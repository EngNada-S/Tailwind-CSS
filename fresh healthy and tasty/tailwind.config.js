/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html","./src/**/*.js"],
  theme: {
    extend: {
      colors:{
        "mainColor":"#2ccc38",
        "hoverColor":"#36ba2f",
        "bgColor":"#EAFDEB"
      },
      fontFamily:{
        "arizonia":['Arizonia', "serif"],
        "merriweather":["Merriweather", "serif"],
        "openSans":["Open Sans", "serif"]
      }
    },
    container:{
      center:true,
      padding:'2rem',
      screens: {
        lg: "1170px",
        xl: "1170px",
        "2xl": "1170px",
      },
    }
  },
  plugins: [],
}

