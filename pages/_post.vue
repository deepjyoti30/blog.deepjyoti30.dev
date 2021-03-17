<template>
  <div>
    <PostContent :post="post" />
  </div>
</template>

<script>
import PostContent from '~/components/PostContent.vue'
export default {
  components: { PostContent },
  async asyncData({ params }) {
    // If post content is not passed, we will have to extract
    // it using the API.
    if (params.parent) {
      return { post: params.parent }
    }

    const slug = params.post
    const response = await fetch(
      `https://apis.deepjyoti30.dev/blog/search?${new URLSearchParams({
        slug: slug,
      })}`
    ).then((res) => res.json())

    return { post: response[0] }
  },
  data() {
    return {
      post: this.$route.params.parent,
    }
  },
  head() {
    return {
      title: `${this.post.title} | Deepjyoti Barman`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
        { name: 'robots', content: 'index,follow' },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.post.tags.tags_list.join(','),
        },
        // Itemprop
        {
          hid: 'itemprop-name',
          itemprop: 'name',
          content: this.post.title,
        },
        {
          hid: 'itemprop-description',
          itemprop: 'description',
          content: this.post.description,
        },
        // Twitter stuff
        {
          hid: 'twitter-card',
          name: 'twitter:card',
          content:
            this.post.cover_img != null ? 'summary_large_image' : 'summary',
        },
        {
          hid: 'twitter-title',
          name: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter-desc',
          name: 'twitter:description',
          content: this.post.description,
        },
        {
          hid: 'twitter-url',
          name: 'twitter:url',
          content: `https://blog.deepjyoti30.dev/${this.post.slug}`,
        },
        {
          hid: 'twitter-creator',
          name: 'twitter:creator',
          content: '@DeepBarman30',
        },
        {
          hid: 'twitter-img',
          name: 'twitter:image',
          content:
            this.post.cover_img != null
              ? this.post.cover_img
              : 'https://blog.deepjyoti30.dev/img/logo.png',
        },
        // Facebook
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title,
        },
        {
          hid: 'fb-url',
          property: 'og:url',
          content: `https://blog.deepjyoti30.dev/${this.post.slug}`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Blog | Deepjyoti Barman',
        },
        {
          hid: 'fb-img',
          property: 'og:image',
          content: this.post.cover_img,
        },
        { hid: 'fb-img-type', property: 'og:image:type', content: 'image/png' },
        { hid: 'fb-img-width', property: 'og:image:width', content: '512' },
        { hid: 'fb-img-height', property: 'og:image:height', content: '512' },
      ],
    }
  },
}
</script>
