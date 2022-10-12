export default {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Møllbensin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
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
  css: [
    // SCSS file in the project
    '~/assets/main.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/google-maps', ssr: true }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: [/^vue2-google-maps($|\/)/],

    extend(config, ctx) {},
  },
}
