import colors from 'vuetify/es5/util/colors';
import ip from 'ip';

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    // title: process.env.npm_package_name || '',
    titleTemplate: '%s',
    title: 'Socius' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Descubra quantas palavras você sabe em inglês.', //process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      },
      {
        ref: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Poppins&display=swap',
      },
    ],
    script: [{ src: 'cordova.js' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/cordova.client',
    '~/plugins/facebook-sdk.js',
    '~/plugins/vue-analytics',
    '~/plugins/socius-api',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    'vue-sweetalert2/nuxt',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
        ],
      },
    ],
    '@neneos/nuxt-animate.css',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-91642035-2',
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3,
    },
    defaultAssets: {
      font: true,
      icons: 'mdi',
    },
  },
  /*
   ** Build configuration
   */
  build: {
    publicPath: '/nuxtfiles/',
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  router: { mode: 'hash' },
  env: {
    SOCIUS_API_URL:
      process.env.SOCIUS_API_URL || `http://${ip.address()}:8200/v1`,
    INFOCAR_CNH: process.env.INFOCAR_CNH || '',
  },
};
