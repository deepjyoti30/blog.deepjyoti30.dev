<template>
  <div class="post__container md:my-16 my-6">
    <div
      class="
        init--content
        2xl:w-1/3
        xl:w-1/2
        lg:w-3/5
        md:w-4/5
        w-11/12
        mr-auto
        ml-auto
      "
    >
      <PostHeader :post="post" />
    </div>
    <div
      class="
        cover--wrapper
        md:py-12
        2xl:w-1/2
        xl:w-2/3
        lg:w-4/5
        md:w-11/12
        mr-auto
        ml-auto
      "
    >
      <Cover v-if="post.cover_img" :post="post" />
    </div>
    <div
      class="
        rest--content
        2xl:w-1/3
        xl:w-1/2
        lg:w-3/5
        md:w-4/5
        w-11/12
        mr-auto
        ml-auto
      "
    >
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
