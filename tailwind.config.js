/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ".components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    keyframes: {
      bounce: {
        '0%, 100%': { transform: 'translateY(-25%)' },
        '50%': { transform: 'translateY(0)' },
      },

      wave: {
        '0%' : { transform: 'translateY(-100px)' },
        '100%' : { transform: 'translateY(0px)' },
 
      },
      moveInLeft: {
        '0%' : { transform: 'translateX(-300px)' },
        '100%' : { transform: 'translateX(0px)' },
      
    },
    moveInRight: {
      '0%' : { transform: 'translateX(300px)' },
      '100%' : { transform: 'translateX(0px)' },
    },
    },
    animation: {
      'waving-hand': 'wave .8s ease-in-out',
      'bounce': 'bounce 1s ease-in-out infinite',
      'moveInLeft': 'moveInLeft .5s ease-in-out .8s',
      'moveInRight': 'moveInRight .5s ease-in-out .8s',
    },

    screens: {

      'small': '320px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
