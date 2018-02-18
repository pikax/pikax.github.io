const pkg = require('./package');

const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%sCarlos Rodrigues',
    meta: [
      {charset: 'utf-8'},
      {name: "viewport", content: 'width=device-width, initial-scale=1, user-scalable=no'},
      {property: 'mobile-web-app-capable', content: 'yes'},
      {
        property: 'og:image',
        content: 'https://user-images.githubusercontent.com/904724/26879447-689b56a8-4b91-11e7-968f-5eea1d6c71b4.png'
      },
      {property: 'twitter:card', content: 'summary_large_image'},
      {property: 'twitter:site', content: '@nuxt_js'},
    ],

    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'},
    ],
    script:[
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#3B8070'},

  loadingIndicator: {
    name: 'rectangle-bounce',
    color: 'white',
    background: '#188269'
  },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '~modules/typescript.js',
    '@nuxtjs/component-cache',
    '@nuxtjs/font-awesome',
  ],


  router: {
    middleware: ['https']
  },

  /*
  ** PWA manifest
  */

  manifest: {
    name: 'Pikaxapp',
    description: 'pikax website',
    /*   short_name: 'PikaxApp',
       start_url: '/',
       display: "standalone",
       lang: 'en',
   */
    theme_color: '#3B8070'
  },

  generate: {
    routes: [
      "/iplicit",
      "/sig",
      // "/gin-downloader",
    ]
  },


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];


      }

      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      })

    }
  },

  render: {
    static: {
      maxAge: '1y',
      setHeaders(res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', 'public, max-age=0')
        }
      }
    }
  }
}
