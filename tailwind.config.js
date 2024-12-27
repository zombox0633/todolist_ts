/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "serif"],
    },
    extend: {
      colors: {
        eerieBlack: "#1e1e1e",
        richBlack: "#101828",
        charcoal: "#383f50",
        mediumSlateBlue: "#8C64E6",
      },
    },
  },
  plugins: [],
};
