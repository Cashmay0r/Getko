/* eslint-disable indent */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Getko-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    ['@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyD1cEZC39UUWwByVLeinL8ZMnee-TPbQ4o",
          authDomain: "getko-b4be9.firebaseapp.com",
          projectId: "getko-b4be9",
          storageBucket: "getko-b4be9.appspot.com",
          messagingSenderId: "578777348041",
          appId: "1:578777348041:web:7cc58ca86b2309219b1a18",
          measurementId: "G-R9DHYQMM2G"
        },
        services: {
          auth: true
        }
      }
    ]


  ],
  auth: {

    persistence: 'local', // default
    initialize: {
      subscribeManually: false
    },
    ssr: false, // default 
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    middleware: ['auth']
  }
}
