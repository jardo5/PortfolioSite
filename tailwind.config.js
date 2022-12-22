/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '675': '42em',
        'proj': '66em',
      },
      height: {
        '175': '10em',
        '460': '28.75em',
        'proj': '32em',
      },
      colors: {
        background: '#0B0D0E',
        secondary: '#374148',
        primary: '#8394A0',
      },
      boxShadow: {
        'sec': '10px 10px 4px rgb(55, 65, 72, 0.35)',
      },
      screens: {
        '3xl': '1920px',
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui"),
  ],
}
