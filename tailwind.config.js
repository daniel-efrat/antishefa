module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "primary":"#782084ff",
        "champagne":"#f9dec9ff",
        "wild-blue":"#99b2ddff",
        "melon":"#e8afa3ff",
        "umber":"#685044ff"
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
