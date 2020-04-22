import path from 'path';

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/composition-api'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/fontawesome'],

  /**
   * Font awesome configuration
   * See https://github.com/nuxt-community/fontawesome-module#icons
   */
  fontawesome: {
    icons: {
      solid: [
        'faExternalLinkAlt',
        // 'faUsers',
        // 'faWallet',
        // 'faCheckCircle',
        // 'faCheckDouble',
        // 'faSpinner',
        // 'faTimes',
        // 'faSync',
        // 'faExchangeAlt',
        // 'faPlusSquare',
        // 'faMinusSquare',
        // 'faAngleUp',
        // 'faAngleDown',
        // 'faAngleDoubleUp',
        // 'faTicketAlt',
      ],
      // regular: ['faCheckCircle', 'faTrashAlt'],
    },
  },

  // tailwindcss: {
  //   purgeCSSInDev: true,
  // },

  purgeCSS: {
    whitelist: ['font-awesome-icon'],
    whitelistPatterns: [/^fa-/, /--fa$/],
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
