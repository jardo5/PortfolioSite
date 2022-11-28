/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridRow: {
        'span-10': 'span 10 / span 10',
      },
      backgroundImage: {
        'fenway': "url('../public/Fenway.jpg')",
        'stairs': "url('../public/stairs.jpg')",
        'mountains': "url('../public/moutains.jpeg')",
        'nyc': "url('../public/NYC.jpg')",
        'bg': "url('../public/bg.jpg')",
      },
    },
  },
  plugins: [],
}
