<template>
  <div class="my-16">
    <PostsContainer :posts="posts" no-heading />
  </div>
</template>

<script>
import PostsContainer from '~/components/PostsContainer.vue'

export default {
  components: { PostsContainer },
  async asyncData() {
    // Fetch the posts based on the fetch URL
    const posts = await fetch(
      'https://apis.deepjyoti30.dev/blog/posts'
    ).then((res) => res.json())

    return {
      posts,
    }
  },
}
</script>
