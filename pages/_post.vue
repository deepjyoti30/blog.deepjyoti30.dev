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
  head: {
    title: `${this.post.title} | Deepjyoti Barman`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: this.post.description,
      },
      { name: 'robots', content: 'index,follow' },
      {
        name: 'keywords',
        content: this.post.tags.tags_list.join(','),
      },
      // Itemprop
      {
        itemprop: 'name',
        content: this.post.title,
      },
      {
        itemprop: 'description',
        content: this.post.description,
      },
      // Twitter stuff
      {
        name: 'twitter:card',
        content:
          this.post.cover_img != null ? 'summary_large_image' : 'summary',
      },
      {
        name: 'twitter:title',
        content: this.post.title,
      },
      {
        name: 'twitter:description',
        content: this.post.description,
      },
      {
        name: 'twitter:url',
        content: `https://blog.deepjyoti30.dev/${this.post.slug}`,
      },
      { name: 'twitter:creator', content: '@DeepBarman30' },
      {
        name: 'twitter:image',
        content:
          this.post.cover_img != null
            ? this.post.cover_img
            : 'https://blog.deepjyoti30.dev/img/logo.png',
      },
      {
        name: 'twitter:creator',
        content: '@DeepBarman30',
      },
      // Facebook
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: this.post.title,
      },
      {
        property: 'og:url',
        content: `https://blog.deepjyoti30.dev/${this.post.slug}`,
      },
      {
        p: 'og:description',
        c: this.post.description,
      },
      {
        p: 'og:image',
        c: this.post.cover_img,
      },
      { p: 'og:image:type', c: 'image/png' },
      { p: 'og:image:width', c: '512' },
      { p: 'og:image:height', c: '512' },
    ],
  },
}
</script>
