/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-bg": "#f7fff7",     // background
        "brand-text": "#292f36",   // text
        "brand-light": "#FF6B6B",  // coral/pink
        "brand-dark": "#4ECDC4",   // teal
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};