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
        amemsblue:"#4975A4",
        back:"#6BB947",
        card1:"#f0da6a",
        card2:"#a3dbc2",
        card3:"#e7c2d4",
        card4:"#93bdf7",
        test:"#F5F5F5",
        stat1:"#feebe5",
        stat2:"#edf8f2",
        stat3:"#fef8ec",
        
      },
      fontFamily: {
        Satoshi: ["'Satoshi-Regular'", "sans-serif"],
        nulshock: ['"Nulshock RG"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
