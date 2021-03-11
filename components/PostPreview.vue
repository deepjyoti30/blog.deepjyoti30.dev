<template>
  <nuxt-link
    :to="getPostLink"
    :target="post.on_dev ? '_blank' : null"
    class="post--preview__container py-2 mb-4 block"
  >
    <div class="post--top--details flex text-gray-700 dark:text-gray-400">
      <div class="date__container mb-2 dm-sans font-medium">
        {{ getDate }}
      </div>
      <div v-if="post.on_dev" class="flex">
        <span class="mx-2">&bullet;</span>
        <span class="external--link__indicatior" title="External link">
          <ExternalLinkIcon size="1.1x" />
        </span>
      </div>
    </div>
    <h1 class="text-2xl dm-sans font-bold text-darkblue dark:text-darkblue-300">
      {{ post.title }}
    </h1>
    <div class="extended--details mt-2 text-gray-700 dark:text-gray-400">
      {{ post.read_time.text }}
    </div>
    <p class="desc text-gray-500 mt-2">{{ post.description }}</p>
  </nuxt-link>
</template>

<script>
import { ExternalLinkIcon } from 'vue-feather-icons'

export default {
  components: {
    ExternalLinkIcon,
  },
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
  computed: {
    getTags() {
      // Parse the tags to make them readable
      let tags = this.post.tags.tags_list.slice(0, 5)
      tags.forEach((el, index) => (tags[index] = `#${el}`))
      return tags.join(', ')
    },
    getDate() {
      return new Date(this.post.updated_at).toLocaleString('en-US', {
        dateStyle: 'medium',
      })
    },
    getPostLink() {
      // Get the router link for the post
      if (this.post.on_dev)
        return {
          name: 'dev',
          query: { url: this.post.dev_link },
        }

      return {
        path: this.post.slug,
        name: 'post',
        params: { parent: this.post, post: this.post.slug },
      }
    },
  },
}
</script>
