<template>
  <div class="post__container md:my-16 my-6">
    <PostHeader :post="post" />
    <Cover v-if="post.cover_img" :post="post" />
    <PostText :content="post.content" />
    <PostTail :post="post" />
    <div v-if="isRelatedLoaded" class="related--wrapper mt-8">
      <PostsContainer
        :posts="posts"
        heading="Read More"
        :disableExpanded="true"
      />
    </div>
  </div>
</template>

<script>
import Cover from './Cover.vue'
import PostHeader from './PostHeader.vue'
import PostText from './PostText.vue'
import PostsContainer from './PostsContainer.vue'
import PostTail from './PostTail.vue'

export default {
  components: { PostHeader, Cover, PostText, PostsContainer, PostTail },
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
  data: () => {
    return {
      baseUrl: 'https://apis.deepjyoti30.dev/blog',
      relatedEndpoint: '/related/',
      posts: Array,
      isRelatedLoaded: false,
    }
  },
  async fetch() {
    // Fetch the related posts
    this.posts = await fetch(this.getRelatedUrl).then((res) => res.json())

    this.isRelatedLoaded = true
  },
  computed: {
    getRelatedUrl() {
      return `${this.baseUrl}${this.relatedEndpoint}${this.post.post_id}`
    },
  },
  watch: {
    post: '$fetch',
  },
}
</script>
