const { fontFamily } = require('tailwindcss/defaultTheme');

const themeColors = {
  lightBackground: '#F2F2F2',
  darkBackground: '#212936',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: themeColors.lightBackground || '#ffffff',
        },
        night: {
          DEFAULT: themeColors.darkBackground || '#000000',
        },
      },
      fontFamily: {
        sans: [...fontFamily.sans],
        serif: [...fontFamily.serif],
        noEmoji: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
