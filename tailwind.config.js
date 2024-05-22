/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {fontSize: {
      'custom-size': '2rem',
      'size-2':'7rem', 
    }},
  },
  plugins: [],
}
