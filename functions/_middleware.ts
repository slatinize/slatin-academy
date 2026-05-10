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

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
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
