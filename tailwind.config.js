/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        skyblue: "#d9edf4",
        tealish: "#85c8bf",
        customGray: "#969696",
        lightgray:"#00BFB3",
        lightcyan:"#d7eff1",
        torquise:"#4dd0e2",
        amemsblue:"#4975A4"
      },
      fontFamily: {
        Satoshi: ["'Satoshi-Regular'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
