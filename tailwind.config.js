/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
      colors: {
          transparent: 'transparent',
          gray: colors.trueGray,
          white: colors.white,
          indigo: colors.indigo,
          black: colors.black,
      },
      extend: {
          colors: {
            transparent: 'transparent',
            gray: colors.trueGray,
            white: colors.white,
            indigo: colors.indigo,
            black: colors.black,
          },
      },  
  },
  plugins: [],
}
