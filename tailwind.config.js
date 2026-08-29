const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1A2421', // hero, bespoke, footer backgrounds
          light: '#23302C', // borders on dark sections
          dark: '#141D1A', // deep shadows, overlays
        },
        ivory: {
          DEFAULT: '#F9F8F6', // main light background
          light: '#FDFCFB', // card backgrounds
          dark: '#F2EFEA', // dividers on light sections
        },
        brass: {
          DEFAULT: '#C5A059', // primary CTA, accents, icons
          light: '#D4B87A', // hover state
          dark: '#A8873F', // active state
        },
        coffee: {
          DEFAULT: '#3E2723', // body text on light
          light: '#5D4037', // muted text
          dark: '#2C1B19', // strong headings on light
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        // Loaded via next/font in app/layout.tsx
        serif: ['var(--font-playfair)', ...defaultTheme.fontFamily.serif],
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      transitionTimingFunction: {
        // The single easing curve used across the whole page.
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        700: '700ms',
        800: '800ms',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '70%': { transform: 'scale(1.55)', opacity: '0' },
          '100%': { transform: 'scale(1.55)', opacity: '0' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.8s cubic-bezier(0.22, 1, 0.36, 1) infinite',
      },
      boxShadow: {
        card: '0 1px 2px rgba(26, 36, 33, 0.06), 0 8px 24px -12px rgba(26, 36, 33, 0.14)',
        'card-hover': '0 2px 4px rgba(26, 36, 33, 0.08), 0 20px 48px -16px rgba(26, 36, 33, 0.24)',
      },
    },
  },
  plugins: [],
};
