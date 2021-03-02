<template>
    <div class="post__container mt-16">
        <post-header :post="post" />
    </div>
</template>

<script>
import PostHeader from './PostHeader.vue'
export default {
  components: { PostHeader },
    props: {
        post: {
            type: Object,
            default: null
        }
    }
}
</script>