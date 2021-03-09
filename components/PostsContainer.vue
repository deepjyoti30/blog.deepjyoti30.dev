<template>
  <div>
      <h1 v-if="!noHeading" class="container--heading text-3xl text-gray-700 dm-sans mb-8 font-semibold">{{heading}}</h1>
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
      },
      noHeading: {
        type: Boolean,
        default: false
      }
  }
}
</script>