<template>
  <div class="my-16">
      <div v-for="post in posts" :key="post.post_id">
        <post-preview :post="post" />
      </div>
  </div>
</template>

<script>
import PostPreview from '~/components/PostPreview.vue'
export default {
  components: { PostPreview },
  async asyncData() {
    const posts = await fetch(
      'https://apis.deepjyoti30.dev/blog/posts'
    ).then((res) => res.json())

    return { posts }
  }
}
</script>
