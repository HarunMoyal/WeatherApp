/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      "image":
      "url('/src/media/right.jpg')",
      "left":"url('/src/media/right.jpg)"
    },
  },
  plugins: [],
}

