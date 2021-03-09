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
      posts: {
        type: Array,
        default: []
      }
  }
}
</script>