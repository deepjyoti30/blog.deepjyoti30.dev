import axios from 'axios'

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

  css: ['~/assets/scss/app.scss', '~/assets/css/dracula.css', '~/assets/css/fonts/dm-sans.css', '~/assets/css/fonts/roboto.css', '~/assets/css/fonts/jetbrains-mono.css'],

  plugins: [
    '~/plugins/micromodal.client.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics'
  ],

  styleResources: {
    scss: ['~/assets/scss/app.scss'],
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/feed'
  ],

  // NuxtJS Feed
  feed: [
    {
      path: '/feed',
      async create(feed) {
        feed.options = {
          title: "Blog | Deepjyoti Barman",
          link: "https://blog.deepjyoti30.dev",
          description: "Personal Blogging Site | I write about Backend, Frontend and Linux mostly",
          image: "https://blog.deepjyoti30.dev/icon.png",
          favicon: "https://blog.deepjyoti30.dev/favicon.ico",
          language: "en",
          author: {
            name: "Deepjyoti Barman",
            email: "hello@deepjyoti30.dev",
            link: "https://deepjyoti30.dev"
          }
        }

        // Fetch the posts from the API and update the feed
        const posts = await (axios({
          method: 'GET',
          url: 'https://apis.deepjyoti30.dev/blog/posts',
          validateStatus: () => true
        }))

        // Check if everything is cool, else exit
        if (posts.status != 200) return

        posts.data.forEach(post => {
          let url = `https://blog.deepjyoti30.dev/${post.slug}`
          feed.addItem({
            title: post.title,
            link: url,
            description: post.description,
            date: new Date(post.updated_at),
            guid: url,
            content: post.content,
            author: {
              name: "Deepjyoti Barman",
              email: "hello@deepjyoti30.dev",
              link: "https://deepjyoti30.dev"
            },
            image: post.cover_img
          })
        })
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
    }
  ],


  // Google Analytics
  googleAnalytics: {
    id: 'UA-152084173-7'
  },

  pwa: {
    manifest: {
      lang: 'en',
      name: "Blog | Deepjyoti Barman"
    },
  },

  build: {},

  // Change port
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
}
