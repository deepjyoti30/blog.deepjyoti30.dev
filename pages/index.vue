<template>
  <div>
    <Subscribe class="my-2" />
    <PostsContainer class="md:my-12 my-10" :posts="posts" no-heading />
  </div>
</template>

<script>
import PostsContainer from '~/components/PostsContainer.vue'
import Subscribe from '~/components/Subscribe.vue'

export default {
  components: { PostsContainer, Subscribe },
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
