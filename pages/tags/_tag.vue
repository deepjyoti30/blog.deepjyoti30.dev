<template>
    <div class="tags--posts__container my-16">
        <posts-container :posts="posts" :heading="`Posts for ${tag}`" />
    </div>
</template>

<script>
import PostsContainer from '~/components/PostsContainer.vue'
export default {
  components: { PostsContainer },
  async asyncData({params}) {
        // Fetch the data from the params
        const posts = await fetch(
            `https://apis.deepjyoti30.dev/blog/tags/posts?${new URLSearchParams({
                query: params.tag
            })}`
        ).then(res => res.json())

        return {
            posts,
            tag: params.tag
        }
    }
}
</script>