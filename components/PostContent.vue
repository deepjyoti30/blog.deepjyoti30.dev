<template>
    <div class="post__container mt-16">
        <post-header :post="post" />
        <cover :post="post" />
        <post-text :content="post.content" />
    </div>
</template>

<script>
import Cover from './Cover.vue'
import PostHeader from './PostHeader.vue'
import PostText from './PostText.vue'
export default {
  components: { PostHeader, Cover, PostText },
    props: {
        post: {
            type: Object,
            default: null
        }
    }
}
</script>