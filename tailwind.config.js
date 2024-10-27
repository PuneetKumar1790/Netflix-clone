/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Root HTML file
    "./script.js",  // Root JavaScript file
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/assets/bgimage.jpg')", // Custom background image
      },
    },
  },
  plugins: [],
}
