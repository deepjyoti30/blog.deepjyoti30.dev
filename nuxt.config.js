export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Blog | Deepjyoti Barman',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Blogging Site | I write about Backend, Frontend and Linux mostly' },
      { name: "robots", content: "index,follow" },
      { hid: 'keywords', name: "keywords", content: "deepjyoti30,blog,barman,deepjyoti,personal,blogging" },
      // Itemprop
      {
        hid: 'itemprop-name',
        itemprop: "name",
        content: "Blog | Deepjyoti Barman"
      },
      {
        hid: 'itemprop-description',
        itemprop: "description",
        content: "Personal Blogging Site | I write about Backend, Frontend and Linux mostly"
      },
      // Twitter stuff
      { hid: 'twitter-card', name: "twitter:card", content: "summary" },
      {
        hid: 'twitter-title',
        name: "twitter:title",
        content: "Blog | Deepjyoti Barman"
      },
      {
        hid: 'twitter-desc',
        name: "twitter:description",
        content: "Personal Blogging Site | I write about Backend, Frontend and Linux mostly"
      },
      { hid: 'twitter-url', name: "twitter:url", content: "https://blog.deepjyoti30.dev/" },
      { hid: 'twitter-creator', name: "twitter:creator", content: "@DeepBarman30" },
      {
        hid: 'twitter-img',
        name: "twitter:image",
        content: "https://blog.deepjyoti30.dev/icon.png"
      },
      {
        hid: 'twitter-site',
        name: "twitter:site",
        content: "@DeepBarman30"
      },
      // Facebook
      { hid: 'og:type', property: "og:type", content: "website" },
      {
        hid: 'og:title',
        property: "og:title",
        content: "Blog | Deepjyoti Barman"
      },
      { hid: 'fb-url', property: "og:url", content: "https://blog.deepjyoti30.dev/" },
      {
        hid: 'og:description',
        property: "og:description",
        content: "Personal Blogging Site | I write about Backend, Frontend and Linux mostly"
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Blog | Deepjyoti Barman'
      },
      {
        hid: 'fb-img',
        property: "og:image",
        content: "https://blog.deepjyoti30.dev/icon.png"
      },
      { hid: 'fb-img-type', property: "og:image:type", content: "image/png" },
      { hid: 'fb-img-width', property: "og:image:width", content: "512" },
      { hid: 'fb-img-height', property: "og:image:height", content: "512" }
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
