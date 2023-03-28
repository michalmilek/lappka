/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Primary/PR600": "#369871",
        "Primary/PR100": "#E1F5ED",
        "Primary/PR500": "#43BE8D",
        orange: "#F76659",
        bgGreen: "#F0FAF6",
        "Primary/PR800": "#205B43",
        midGray2: "#6E7C87",
        lightGray1: "#D5DADD",
        lightGray4: "#EEF0F2",
        lightGray5: "#F6F7F9",
        midGray5: "#B0BABF",
        midGray4: "#9AA6AC",
        midGray3: "#84919A",
        darkGray2: "#252C32",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        veryTight: "-.006em",
        veryVeryTight: "-0.003em",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
