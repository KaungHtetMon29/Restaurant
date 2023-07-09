/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custorange: '#EA6D27',
        custblack: '#101A24',
        custgray: '#F3F4F4'
      },
      fontFamily: {
        segoe: ['Segoe UI']
      },
      margin: {
        82: '21rem'
      }
    }
  },
  plugins: []
}
