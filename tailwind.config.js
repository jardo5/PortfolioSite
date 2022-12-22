/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
      daisyui: {
        themes: [
          {
            mytheme: {
            
    "primary": "#d16b1d",
            
    "secondary": "#54d3a2",
            
    "accent": "#0338bc",
            
    "neutral": "#374148",
            
    "base-100": "#374148",
            
    "info": "#73C3D9",
            
    "success": "#23D7C5",
            
    "warning": "#EBA94C",
            
            },
          },
        ],
      },
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
  },
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui"),
  ],
}
