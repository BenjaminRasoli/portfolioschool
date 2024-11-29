/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Main: "#000000",
      Second: "#290038",
      White: "#FFFFFF",
      Dark: "#22223b",
    },
    extend: {
      fontFamily: {
        condensed: ["Robot_Condensed", "sans-serif"],
        eurostile: ["eurostile", "sans-serif"],
      },
    },
  },
  plugins: [],
};
