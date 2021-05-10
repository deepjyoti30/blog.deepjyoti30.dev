<template>
  <nuxt-link
    :to="getPostLink"
    :target="post.on_dev ? '_blank' : null"
    class="post--preview__container mb-8 block hover:bg-gray-100 transition duration-100 ease-in p-2 rounded-lg"
  >
    <div class="wrapper flex items-center">
      <div class="preview--text__container">
        <h1
          class="md:text-xl text-lg dm-sans font-bold text-darkblue dark:text-darkblue-300"
        >
          {{ post.title }}
        </h1>
        <div
          class="post--top--details my-2 flex text-gray-600 dark:text-gray-400"
        >
          <div class="date__container dm-sans font-medium">
            {{ getDate }}
          </div>
          <div v-if="post.on_dev" class="flex">
            <span class="mx-2">&bullet;</span>
            <span class="external--link__indicatior" title="External link">
              <ExternalLinkIcon size="1.1x" />
            </span>
          </div>
        </div>
        <div
          class="extended--details mt-2 text-gray-700 dark:text-gray-400 flex items-center hidden"
        >
          <span class="time inline-flex items-center">
            <ClockIcon
              size="0.8x"
              class="mr-2 fill-current dark:text-white clock--icon"
            />
            <span class="text">{{ post.read_time.text }}</span>
          </span>
          <span v-if="timeStatus != null" class="inline-flex items-center">
            <span class="mx-2">&bullet;</span>
            <span
              class="quick--detail font-medium inline-flex items-center"
              :class="`text-${
                timeStatus.toLowerCase() == 'quick' ? 'customgreen' : 'skyblue'
              }`"
            >
              <component
                :is="
                  timeStatus.toLowerCase() == 'quick' ? 'ZapIcon' : 'CoffeeIcon'
                "
                size="0.8x"
                class="fill-current status--icon"
              />
              <span class="text ml-2">{{ timeStatus }} Read</span>
            </span>
          </span>
        </div>
        <p class="desc text-gray-500 mt-2">{{ post.description }}</p>
      </div>
      <div class="preview--img__container w-1/2 p-2">
        <img :src="getCover" alt="" class="rounded-md" />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import {
  ExternalLinkIcon,
  ZapIcon,
  ClockIcon,
  CoffeeIcon,
} from 'vue-feather-icons'

export default {
  components: {
    ExternalLinkIcon,
    ZapIcon,
    ClockIcon,
    CoffeeIcon,
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
    timeStatus() {
      /**
       * Check if the post is quick to read.
       *
       * We'll consider anythin less than 5 mins a quick
       * read.
       */
      // 1 min is 60 seconds so divide the total seconds by 60.
      const timeInMins = parseInt(this.post.read_time.seconds / 60)

      switch (true) {
        case timeInMins <= 2:
          return 'Quick'
        case timeInMins <= 4:
          return 'Coffee'
        default:
          return null
      }
    },
    getCover() {
      return this.post.cover_img
    },
  },
}
</script>

<style lang="scss" scoped>
.post--preview__container {
  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .clock--icon {
    polyline {
      @apply text-white;
      @apply dark:text-black;
    }
  }

  .status--icon {
    path:first-child {
      fill: none;
    }
  }
}
</style>
