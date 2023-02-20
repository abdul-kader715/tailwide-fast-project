/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}','./node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    container: {
    },
    extend: {
      spacing: {
        '5px': '5px',
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1399px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1199px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '991px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '767px'},
      // => @media (max-width: 639px) { ... }

      'col': {'max': '567px'},
      // => @media (max-width: 320px) { ... }
    },
    fontFamily: {
      'base-font': ['Inter', 'sans-serif'],
      'heading-font': ['Futura PT'],
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],

  
}