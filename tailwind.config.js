module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'primary-green': '#77DD77',
        'hover-green': '#60b560'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
