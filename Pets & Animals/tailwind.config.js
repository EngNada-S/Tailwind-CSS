/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html','./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        "first-color": "#833de7",
        "second-color": "#fbc43c",
      },
      fontFamily:{
        "Ubuntu":["Ubuntu", "sans-serif"]
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1170px",
        xl: "1170px",
        "2xl": "1170px",
      },
    },
  plugins: [],
}
}
