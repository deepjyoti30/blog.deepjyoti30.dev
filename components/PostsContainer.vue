<template>
  <div>
      <h1 class="container--heading text-2xl mb-6 font-medium">{{heading}}</h1>
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
      posts: {
        type: Array,
        default: null
      },
      heading: {
        type: String,
        default: "Blog Posts"
      }
  }
}
</script>