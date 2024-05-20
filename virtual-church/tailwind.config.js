/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        "Montserrat":["Montserrat", "sans-serif"],
        "Roboto":["Roboto", "sans-serif"],
        "Pacifico":["Pacifico", "cursive"],
        "poppins":["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}