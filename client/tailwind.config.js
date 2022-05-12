const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Bai Jamjuree', 'Inter', 'sans-serif'],
      },

      colors: {
        primary: colors.blue
      }
    },
  },
  plugins: [],
};
