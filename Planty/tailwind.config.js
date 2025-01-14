/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "main-color": "#688F4E",
        "secondary-color": "#ECF2E6",
        "textcolor": "#3D4951",
        "background-color": "#F3F3F3"
      },
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
