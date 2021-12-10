/* eslint-disable indent */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Getko-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/static/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', 'cookie-universal-nuxt', '@nuxtjs/auth-next'],
  auth: {
    strategies: {
      local: {
        scheme: 'local',
        token: {
          property: 'access_token',
          global: true,
          required: true,
          type: 'Bearer',
          maxAge: 60 * 15,
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: {url: '/api/login', method: 'post'},
          refresh: {url: '/api/refresh-token', method: 'post'},
          user: {url: '/api/user', method: 'post'},
          logout: {url: '/api/logout', method: 'post'},
        },
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  serverMiddleware: {
    '/api': '~/api/index.js',
  },
  router: {
    middleware: ['authentication'],
  },
  axios: {
    baseURL: 'http://example.com',
    browserBaseURL: 'http://localhost:3000',
  },
};
