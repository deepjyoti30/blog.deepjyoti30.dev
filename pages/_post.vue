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
  async asyncData({ params, redirect }) {
    return {
        post: params.parent
    }
  }
}
</script>