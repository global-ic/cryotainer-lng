const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './composables/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        headline: ['Bai Jamjuree', 'Inter', 'system-ui', 'sans-serif'],
      },

      screens: {
        xs: '540px',
      },
      colors: {
        primary: colors.blue,
      },
      aspectRatio: {
        photo: '4 / 3',
      },
    },
  },
  plugins: [],
};
