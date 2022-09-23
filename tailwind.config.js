/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: "'Rajdhani', sans-serif",
        nunito: "'Nunito Sans', sans-serif",
        roboto: "'Roboto', sans-serif"
      }
    },
  },
  plugins: [require('daisyui')],
}