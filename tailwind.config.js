/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/swiper/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    }
  },
  plugins: [],
};
