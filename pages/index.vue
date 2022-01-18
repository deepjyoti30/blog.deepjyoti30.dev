<template>
  <div>
    <div
      class="
        wrapper
        2xl:w-1/3
        xl:w-1/2
        lg:w-3/5
        md:w-4/5
        w-11/12
        mr-auto
        ml-auto
      "
    >
      <PostsContainer class="my-10" :posts="posts" no-heading />
    </div>
  </div>
</template>

<script>
import PostsContainer from '~/components/PostsContainer.vue'

export default {
  components: { PostsContainer },
  async asyncData() {
    // Fetch the posts based on the fetch URL
    const posts = await fetch('https://apis.deepjyoti30.dev/blog/posts').then(
      (res) => res.json()
    )

    return {
      posts,
    }
  },
}
</script>
