import type { APIRoute } from 'astro';

export const prerender = false;

interface BillingData {
  name: string;
  nif: string;
  address: string;
  city: string;
  postal: string;
}

interface ReservePayload {
  tier: number;
  name: string;
  email: string;
  phone: string;
  instagram: string;
  experience: string;
  needsInvoice: boolean;
  billing?: BillingData;
}

interface StripeSession {
  id?: string;
  url?: string;
  error?: { message: string };
}

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;

  let body: ReservePayload;
  try {
    body = await request.json() as ReservePayload;
  } catch {
    return json({ error: 'Invalid request body' }, 400);
  }

  const { tier, name, email, phone, instagram, experience, needsInvoice, billing } = body;

  if (!tier || !name || !email || !phone || !instagram || !experience) {
    return json({ error: 'Faltan campos obligatorios' }, 400);
  }

  if (needsInvoice) {
    if (!billing?.name || !billing?.nif || !billing?.address || !billing?.city || !billing?.postal) {
      return json({ error: 'Faltan datos de facturación' }, 400);
    }
  }

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  try {
    await env.DB.prepare(`
      INSERT INTO leads
        (id, created_at, tier, name, email, phone, instagram, experience,
         needs_invoice, billing_name, billing_nif, billing_address, billing_city, billing_postal)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      id, createdAt, tier, name, email, phone, instagram, experience,
      needsInvoice ? 1 : 0,
      billing?.name ?? null,
      billing?.nif ?? null,
      billing?.address ?? null,
      billing?.city ?? null,
      billing?.postal ?? null,
    ).run();
  } catch (err) {
    console.error('D1 insert failed:', err);
    return json({ error: 'Error al guardar los datos' }, 500);
  }

  const priceId = tier === 1 ? env.STRIPE_PRICE_TIER1 : env.STRIPE_PRICE_TIER2;
  const siteUrl = env.SITE_URL ?? 'https://slatin.pro';
  const successUrl = tier === 1
    ? `${siteUrl}/es/success/mc-tier-1`
    : `${siteUrl}/es/success/mc-tier-2`;

  const params = new URLSearchParams({
    mode: 'payment',
    'line_items[0][price]': priceId,
    'line_items[0][quantity]': '1',
    customer_email: email,
    'phone_number_collection[enabled]': 'true',
    success_url: successUrl,
    cancel_url: `${siteUrl}/es/mastering-challenge`,
    'metadata[lead_id]': id,
    'metadata[name]': name,
    'metadata[phone]': phone,
    'metadata[instagram]': instagram,
    'metadata[experience]': experience,
    'metadata[needs_invoice]': needsInvoice ? 'true' : 'false',
    'metadata[tier]': String(tier),
  });

  if (needsInvoice && billing) {
    params.set('metadata[billing_name]', billing.name);
    params.set('metadata[billing_nif]', billing.nif);
  }

  let stripeUrl: string;
  try {
    const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const session = await stripeRes.json() as StripeSession;

    if (!stripeRes.ok || !session.url) {
      console.error('Stripe error:', session.error);
      return json({ error: 'Error al iniciar el pago' }, 500);
    }

    stripeUrl = session.url;

    await env.DB.prepare('UPDATE leads SET stripe_session_id = ? WHERE id = ?')
      .bind(session.id, id)
      .run();
  } catch (err) {
    console.error('Stripe request failed:', err);
    return json({ error: 'Error al iniciar el pago' }, 500);
  }

  return json({ url: stripeUrl });
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
