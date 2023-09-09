/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        custom: ['"Poppins"', 'Poppins'],
      },
      colors:{
        'custom-blue': 'rgba(18, 50, 109, 1)',
      }
    },
  },
  plugins: [],
}