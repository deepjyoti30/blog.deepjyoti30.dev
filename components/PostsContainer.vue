<template>
  <div>
    <h1
      v-if="!noHeading"
      class="container--heading text-lg text-gray-700 dark:text-gray-300 dm-sans mb-6 font-semibold"
    >
      {{ heading }}
    </h1>
    <div v-for="(post, index) in posts" :key="post.post_id">
      <PostPreview
        :post="post"
        :position="index"
        :disableExpanded="getDisableExpanded"
      />
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
      default: null,
    },
    heading: {
      type: String,
      default: 'Blog Posts',
    },
    noHeading: {
      type: Boolean,
      default: false,
    },
    disableExpanded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getDisableExpanded() {
      return this.disableExpanded
    },
  },
}
</script>
