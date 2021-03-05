<template>
  <div>
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
          posts: Object
      }
  },
  methods: {
      fetchPosts: async function() {
          // Check if URL is passed
          if (!this.fetchUrl) throw "fetchUrl is required";

          const posts = await fetch(
            this.fetchUrl
          ).then((res) => res.json())

          this.posts = posts;
      }
  },
  mounted() {
      this.fetchPosts();
  }
}
</script>