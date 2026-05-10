import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://academy.slatin.pro',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
      filter: (page) =>
        !page.includes('/mockup-') &&
        !page.includes('/preview/') &&
        !/^https?:\/\/[^/]+\/mastering-challenge\/?$/.test(page),
    }),
  ],
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
