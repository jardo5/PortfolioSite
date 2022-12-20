/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '675': '42rem',
        'proj': '66rem',
      },
      height: {
        '175': '10rem',
        '460': '28.75rem',
        'proj': '32rem',
      },
      colors: {
        background: '#0B0D0E',
        secondary: '#374148',
        primary: '#8394A0',
      },
      boxShadow: {
        'sec': '10px 10px 4px rgb(55, 65, 72, 0.35)',
      },
    },
  },
  plugins: [],
}
