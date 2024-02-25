/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      },
      colors:{
        primary: '#262835',
        secondary: '#ff5473',
        statusPokemon: '#EFEFEF'

      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}