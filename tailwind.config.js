/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.{html,js}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        'accent': {
          DEFAULT: '#006FCF',
          '50': '#1592FF',
          '100': '#0D8FFF',
          '200': '#0088FD',
          '300': '#007FEE',
          '400': '#0077DE',
          '500': '#006FCF',
          '600': '#0067C0',
          '700': '#005FB0',
          '800': '#0056A1',
          '900': '#004E92'
        },
      },
    }
  },
  plugins: [],
}
