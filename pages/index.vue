<template>
  <div class="my-16">
      <posts-container :fetchUrl="getUrl" />
  </div>
</template>

<script>
import PostsContainer from "~/components/PostsContainer.vue";

export default {
  components: { PostsContainer },
  computed: {
    getUrl() {
      return 'https://apis.deepjyoti30.dev/blog/posts'
    }
  }
}
</script>
