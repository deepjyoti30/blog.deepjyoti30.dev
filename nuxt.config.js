export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Blog | Deepjyoti Barman',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Blogging Site | I write about Backend, Frontend and Linux mostly' },
      { name: "robots", content: "index,follow" },
      { name: "keywords", content: "deepjyoti30,blog,barman,deepjyoti,personal,blogging" },
      // Itemprop
      {
        itemprop: "name",
        content: "Blog | Deepjyoti Barman"
      },
      {
        itemprop: "description",
        content: "Personal Blogging Site | I write about Backend, Frontend and Linux mostly"
      },
      // Twitter stuff
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Blog | Deepjyoti Barman"
      },
      {
        name: "twitter:description",
        content: "Personal Blogging Site | I write about Backend, Frontend and Linux mostly"
      },
      { name: "twitter:url", content: "https://blog.deepjyoti30.dev/" },
      { name: "twitter:creator", content: "@DeepBarman30" },
      {
        name: "twitter:image",
        content: "https://blog.deepjyoti30.dev/img/logo.png"
      },
      {
        name: "twitter:site",
        content: "@DeepBarman30"
      },
      // Facebook
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Blog | Deepjyoti Barman"
      },
      { property: "og:url", content: "https://blog.deepjyoti30.dev/" },
      {
        p: "og:description",
        c: "Personal Blogging Site | I write about Backend, Frontend and Linux mostly"
      },
      {
        p: "og:image",
        c: "https://blog.deepjyoti30.dev/img/logo.png"
      },
      { p: "og:image:type", c: "image/png" },
      { p: "og:image:width", c: "512" },
      { p: "og:image:height", c: "512" }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/app.scss', '~/assets/css/dracula.css', '~/assets/css/fonts/dm-sans.css', '~/assets/css/fonts/roboto.css', '~/assets/css/fonts/jetbrains-mono.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/micromodal.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['~/assets/scss/app.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Change port
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
}
