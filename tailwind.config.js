/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#fea928",
        secondary:"#ed8900",
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"2rem",
          lg:"4rem",
          "2xl":"6rem",
        }
      }
    },
  },
  plugins: [],
}

