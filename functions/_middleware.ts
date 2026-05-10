const CANONICAL_HOST = 'academy.slatin.pro';

const ES_PAGES = new Set([
  '/',
  '/mastering-challenge/',
  '/low-end-mastery/',
  '/mentoring/',
  '/microdynamics/',
]);

function prefersSpanish(request: Request): boolean {
  const accept = request.headers.get('Accept-Language') || '';
  const langs = accept.split(',').map(part => {
    const [lang, q] = part.trim().split(';q=');
    return { lang: lang.trim().toLowerCase(), q: q ? parseFloat(q) : 1 };
  });
  langs.sort((a, b) => b.q - a.q);
  for (const { lang } of langs) {
    if (lang.startsWith('es')) return true;
    if (lang.startsWith('en')) return false;
  }
  return false;
}

function getCookie(request: Request, name: string): string | null {
  const cookies = request.headers.get('Cookie') || '';
  const match = cookies.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? match[1] : null;
}

function isPreviewHost(host: string): boolean {
  return (
    host === 'localhost' ||
    host === '127.0.0.1' ||
    host.endsWith('.pages.dev') ||
    host.endsWith('.workers.dev')
  );
}

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const proto = context.request.headers.get('X-Forwarded-Proto') || url.protocol.replace(':', '');
  const host = url.hostname;

  // Canonicalize host + scheme on production hosts only.
  // 301 to https://academy.slatin.pro/* for any non-canonical host or http://.
  if (!isPreviewHost(host)) {
    const wrongHost = host !== CANONICAL_HOST;
    const wrongScheme = proto !== 'https';
    if (wrongHost || wrongScheme) {
      const canonical = new URL(url.toString());
      canonical.protocol = 'https:';
      canonical.hostname = CANONICAL_HOST;
      return Response.redirect(canonical.toString(), 301);
    }
  }

  const path = url.pathname.replace(/\/?$/, '/');

  if (!ES_PAGES.has(path)) return context.next();
  if (url.pathname.startsWith('/es/')) return context.next();
  if (getCookie(context.request, 'lang-pref') === 'en') return context.next();
  if (!prefersSpanish(context.request)) return context.next();

  const esPath = `/es${path}${url.search}`;
  return new Response(null, {
    status: 302,
    headers: { Location: esPath },
  });
};
