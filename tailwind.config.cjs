/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Bellefair: ["Bellefair", "serif"],
        BarlowCondensed: ["Barlow Condensed", "sans-serif"],
        Barlow: ['Barlow', 'sans-serif'],
        subHeading1: "var(--subHeading-1)",
      },
      colors: {
        primaryDark: "var(--primary-Dark)",
        primaryGray: "var(--primary-Gray)",
        primaryWhite: "var(--primary-White)",
      },
    },
  },
  plugins: [],
};
