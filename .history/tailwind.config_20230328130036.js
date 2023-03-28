/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        "Primary/PR600": "#369871",
        "Primary/PR100": "#E1F5ED",
        "Primary/PR500": "#43BE8D",
        "Primary/PR700": "#287154",
        orange: "#F76659",
        bgGreen: "#F0FAF6",
        "Primary/PR800": "#205B43",
        midGray2: "#6E7C87",
        lightGray1: "#D5DADD",
        lightGray3: "#E5E9EB",
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
        wide18em: "0.018em",
      },
      boxShadow: {
        registerBtn: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      },
      borderColor: {
        opacity01: "rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
