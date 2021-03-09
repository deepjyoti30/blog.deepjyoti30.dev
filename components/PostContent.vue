<template>
    <div class="post__container mt-16">
        <post-header :post="post" />
        <cover :post="post" />
        <post-text :content="post.content" />
        <div class="related--wrapper" v-if="isRelatedLoaded">
            <posts-container :posts="posts" />
        </div>
    </div>
</template>

<script>
import Cover from './Cover.vue'
import PostHeader from './PostHeader.vue'
import PostText from './PostText.vue'
import PostsContainer from './PostsContainer.vue'

export default {
  components: { PostHeader, Cover, PostText, PostsContainer },
    props: {
        post: {
            type: Object,
            default: null
        }
    },
    data: () => {
        return {
            baseUrl: "https://apis.deepjyoti30.dev/blog",
            relatedEndpoint: "/related/",
            posts: Array,
            isRelatedLoaded: false
        }
    },
    computed: {
        getRelatedUrl() {
            return `${this.baseUrl}${this.relatedEndpoint}${this.post.post_id}`;
        }
    },
    watch: {
        "post": "$fetch"
    },
    async fetch() {
        // Fetch the related posts
        this.posts = await fetch(
          this.getRelatedUrl
        ).then((res) => res.json())

        this.isRelatedLoaded = true
    }
}
</script>