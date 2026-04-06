import type { Locale } from '../utils/i18n';

interface NavLink {
  label: string;
  href: string;
}

interface FooterData {
  headline: string;
  quickJumpTitle: string;
  quickLinks: NavLink[];
  legalLinks: NavLink[];
}

interface NavData {
  links: NavLink[];
  submitSong: string;
}

interface LangSwitcher {
  label: string;
  ariaLabel: string;
}

interface UIStrings {
  nav: NavData;
  footer: FooterData;
  langSwitcher: LangSwitcher;
}

export const ui: Record<Locale, UIStrings> = {
  en: {
    nav: {
      links: [
        { label: 'Mentoring', href: '/mentoring' },
        { label: 'Low End', href: '/low-end-mastery' },
        { label: 'Microdynamics', href: '/microdynamics' },
        { label: 'Mastering', href: '/mastering-challenge' },
      ],
      submitSong: 'Submit Your Song',
    },
    footer: {
      headline: 'Get full confidence in your sound',
      quickJumpTitle: 'Quick Jump',
      quickLinks: [
        { label: 'Plugin Closer', href: '#' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Services', href: 'https://www.slatin.pro/#services' },
      ],
      legalLinks: [
        { label: 'Privacy Policy', href: 'https://www.slatin.pro/privacy-policy/' },
        { label: 'Legal Notice', href: 'https://www.slatin.pro/legal-notice/' },
        { label: 'Cookies', href: 'https://www.slatin.pro/cookies/' },
        { label: 'Terms & Conditions', href: 'https://www.slatin.pro/terms-and-conditions/' },
      ],
    },
    langSwitcher: {
      label: 'ES',
      ariaLabel: 'Cambiar a Español',
    },
  },
  es: {
    nav: {
      links: [
        { label: 'Mentoría', href: '/es/mentoring' },
        { label: 'Low End', href: '/es/low-end-mastery' },
        { label: 'Microdinámica', href: '/es/microdynamics' },
        { label: 'Mastering', href: '/es/mastering-challenge' },
      ],
      submitSong: 'Envía Tu Canción',
    },
    footer: {
      headline: 'Consigue plena confianza en tu sonido',
      quickJumpTitle: 'Acceso Rápido',
      quickLinks: [
        { label: 'Plugin Closer', href: '#' },
        { label: 'Testimonios', href: '#testimonials' },
        { label: 'Servicios', href: 'https://www.slatin.pro/#services' },
      ],
      legalLinks: [
        { label: 'Política de Privacidad', href: 'https://www.slatin.pro/privacy-policy/' },
        { label: 'Aviso Legal', href: 'https://www.slatin.pro/legal-notice/' },
        { label: 'Cookies', href: 'https://www.slatin.pro/cookies/' },
        { label: 'Términos y Condiciones', href: 'https://www.slatin.pro/terms-and-conditions/' },
      ],
    },
    langSwitcher: {
      label: 'EN',
      ariaLabel: 'Switch to English',
    },
  },
};
