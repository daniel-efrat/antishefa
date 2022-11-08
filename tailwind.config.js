module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#959595",
        champagne: "#fafafa",
        "wild-blue": "#c5c5c5",
        melon: "#898989ff",
        umber: "#685044ff",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
