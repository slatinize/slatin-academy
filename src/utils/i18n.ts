export type Locale = 'en' | 'es';
export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'es'];

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  if (locales.includes(segment as Locale)) return segment as Locale;
  return defaultLocale;
}

export function getAlternateUrl(url: URL, targetLocale: Locale): string {
  const currentLocale = getLocaleFromUrl(url);
  let path = url.pathname;

  // Strip current locale prefix if present
  if (currentLocale !== defaultLocale) {
    path = path.replace(`/${currentLocale}`, '') || '/';
  }

  // Add target locale prefix (skip for default locale)
  if (targetLocale === defaultLocale) return path;
  return `/${targetLocale}${path}`;
}

export function getLocalizedHref(href: string, locale: Locale): string {
  // Only prefix internal paths (starting with /) that aren't already prefixed
  if (!href.startsWith('/') || href.startsWith('http')) return href;
  if (locale === defaultLocale) return href;
  if (href.startsWith(`/${locale}/`)) return href;
  return `/${locale}${href}`;
}
