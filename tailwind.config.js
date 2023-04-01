/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gradientStart: "#60EFFF",
        gradientEnd: "#4522A9",
        primary: "#0D1117",
        secondary: "#161B22",
        ash: "#828282",
        portfolioItem: "#21262D",
      },
    },
  },
  plugins: [],
};
