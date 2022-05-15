const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './index.html',
    './src/App.vue',
    './src/pages/**/*.{vue,js,ts,jsx,tsx}',
    './src/layouts/**/*.{vue,js,ts,jsx,tsx}',
    './src/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Bai Jamjuree', 'Inter', 'sans-serif'],
      },

      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [],
};
