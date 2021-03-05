<template>
  <div v-if="!$fetchState.pending">
      <div v-for="post in posts" :key="post.post_id">
        <post-preview :post="post" />
      </div>
  </div>
</template>

<script>
import PostPreview from '~/components/PostPreview.vue'
export default {
  components: { PostPreview },
  props: {
      fetchUrl: {
          type: String,
          default: null
      }
  },
  data: () => {
      return {
          posts: {
              type: Object,
          },
      }
  },
  watch: {
    'fetchUrl': '$fetch'
  },
  async fetch() {
      // Check if URL is passed
      if (!this.fetchUrl) throw "fetchUrl is required";

      this.posts = await fetch(
            this.fetchUrl
        ).then((res) => res.json())
  }
}
</script>