/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#020202',
          secondary: '#0A0A0A',
          card: '#111111',
          muted: '#1F1F1F',
        },
        cream: '#E5E5C7',
        accent: {
          red: '#FB4141',
          'red-dark': '#DD3333',
          orange: '#D4882B',
          yellow: '#FFF200',
        },
        text: {
          dark: '#070219',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 6.5rem)', { lineHeight: '1.2', fontWeight: '800' }],
        'heading': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', fontWeight: '700' }],
        'subheading': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.3', fontWeight: '600' }],
      },
      maxWidth: {
        'content': '1650px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
