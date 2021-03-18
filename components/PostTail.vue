<template>
  <div class="post--tail__container my-5">
    <div class="share--content">
      <Share :post="post" />
    </div>
    <div class="subscribe my-12">
      <Subscribe :post="post" />
    </div>
    <Comments />
    <div class="tag--details my-2 inline-flex flex-wrap">
      <div
        v-for="(tag, id) in post.tags.tags_list"
        :key="id"
        class="tag--each rounded text-gray-500 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 mt-2"
      >
        <nuxt-link :to="`/tags/${tag}`" class="px-2 py-0.5">
          {{ tag }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Share from '~/components/Share.vue'
import Subscribe from './Subscribe.vue'
import Comments from './Comments.vue'

export default {
  components: { Share, Subscribe, Comments },
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.post--tail__container {
  .tag--details {
    .tag--each {
      @apply mr-2;

      &:last-child {
        @apply mr-0;
      }
    }
  }
}
</style>
