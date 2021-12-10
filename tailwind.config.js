module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-green": "#77DD77",
        "hover-green": "#60b560",
      },
    },
  },
  plugins: [],
};
