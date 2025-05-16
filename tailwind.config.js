/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <- this enables Tailwind to work in all React files inside /src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // optional: for modern font style
      },
    },
  },
  plugins: [],
};
