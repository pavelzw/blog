// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      colors: {
        primary: colors.pink,
        gray: colors.gray,
        // default
        // 'gradient-1': '#7d7aff',
        // 'gradient-2': '#2121e2',
        // 'gradient-3': '#00fff0',
        // 'gradient-4': '#8785FF',
        // bejamas
        'gradient-1': '#7D7AFF',
        'gradient-2': '#2121E2',
        'gradient-3': '#FF76B8',
        'gradient-4': '#001AFF',
        // netlify
        // 'gradient-1': '#00F0FF',
        // 'gradient-2': '#00F0FF',
        // 'gradient-3': '#FAFF00',
        // 'gradient-4': '#00F0FF',
        // reddie
        // 'gradient-1': '#FFC700',
        // 'gradient-2': '#FF85DD',
        // 'gradient-3': '#FF85DD',
        // 'gradient-4': '#FF8585',
        // greenie
        // 'gradient-1': '#FFCC81',
        // 'gradient-2': '#00F37F',
        // 'gradient-3': '#00F37F',
        // 'gradient-4': '#FFCC81',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
