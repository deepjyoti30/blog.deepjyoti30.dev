<template>
  <div>
      <div v-for="post in posts" :key="post.post_id">
        <nuxt-link :to="{path: post.slug, name: 'post', params: {parent: post, post: post.slug}}">
          <h1>{{post.title}}</h1>
        </nuxt-link>
      </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const posts = await fetch(
      'https://apis.deepjyoti30.dev/blog/posts'
    ).then((res) => res.json())

    return { posts }
  }
}
</script>
