/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'brandOrange': '#ff8800',
        'brandRed': '#c11212',
      },
    },
  },
  plugins: [],
}

