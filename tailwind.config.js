/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '54rem',
      },
      height: {
        '128': '54rem',
      },
      colors: {
        background: '#0B0D0E',
        secondary: '#374148',
        primary: '#8394A0',
      },
    },
  },
  plugins: [],
}
