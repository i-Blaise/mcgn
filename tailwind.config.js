/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: { 
      montserrat: ['"Montserrat"', "sans-serif"],
      montBold: ['"Montserrat-Bold"', "sans-serif"],
      montExtraBold: ['"Montserrat-ExtraBold"', "sans-serif"]
     },
    },
  },
  plugins: [],
}
