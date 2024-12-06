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
      fontSize: {
        h1: ["2.5rem", { lineHeight: "3rem", fontWeight: "700" }],
        h2: ["2rem", { lineHeight: "2.5rem", fontWeight: "600" }],
        h3: ["1.75rem", { lineHeight: "2.25rem", fontWeight: "500" }],
        h4: ["1.5rem", { lineHeight: "2rem", fontWeight: "500" }],
        p: ["1.25rem", { lineHeight: "1.75rem", fontWeight: "400" }],
      },
      fontFamily: {
        condensed: ["Robot_Condensed", "sans-serif"],
        eurostile: ["eurostile", "sans-serif"],
      },
      spacing: {
        container: "4rem",
      },
    },
  },
  plugins: [],
};
