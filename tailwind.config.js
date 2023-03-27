/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonDarkGreen: "#369871",
        buttonLightGreen: "#43BE8D",
        orange: "#F76659",
        primaryGreen: "#F0FAF6",
        midGray2: "#6E7C87",

        lightGray5: "#F6F7F9",
        midGray5: "#B0BABF",
        midGray3: "#84919A",
      },
    },
  },
  plugins: [],
};
