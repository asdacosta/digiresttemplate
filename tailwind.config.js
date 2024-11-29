/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        1: "1",
        3: "3",
        2: "2",
        5: "5",
      },
      backgroundImage: {
        bgImage: "url('./src/assets/swipes/bg1.jpg')",
      },
      fontFamily: {
        dance: ["Dancing Script", "cursive"],
      },
      screens: {
        max1050: { max: "1050px" },
        max650: { max: "650px" },
      },
    },
  },
  plugins: [],
};
