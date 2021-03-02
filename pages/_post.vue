<template>
  <div>
    <post-content :post="post" />
  </div>
</template>

<script>
import PostContent from '~/components/PostContent.vue'
export default {
  components: { PostContent },
  data() {
    return {
      post: this.$route.params.parent,
    }
  },
  async asyncData({ route, params, redirect }) {
    // If post content is not passed, we will have to extract
    // it using the API.
    if (params.parent) {
      return { post: params.parent }
    }

    const slug = params.post;
      const response = await fetch(
        `https://apis.deepjyoti30.dev/blog/search?${new URLSearchParams({
          slug: slug
        })}`
      ).then(res => res.json());

      return { post: response[0] }

  }
}
</script>