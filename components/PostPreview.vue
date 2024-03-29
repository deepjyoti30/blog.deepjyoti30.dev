<template>
  <nuxt-link
    :to="getPostLink"
    :target="post.on_dev ? '_blank' : null"
    class="post--preview__container md:mb-8 mb-4 block hover:bg-gray-100 dark:hover:bg-darkhigh transition duration-50 ease-in md:p-4 p-1 rounded-lg"
  >
    <div v-if="isFirst" class="cover--expanded md:mb-6 mb-4">
      <img :src="getCoverExpanded" alt="" class="rounded-md" />
    </div>
    <div
      class="wrapper flex"
      :class="!isFirst ? 'md:flex-row flex-row-reverse' : ''"
    >
      <div
        class="preview--text__container"
        :class="!isFirst ? `xl:w-3/5 w-2/3 md:pr-4 md:pl-0 pr-0 pl-3` : ''"
      >
        <div class="post--title">
          <h1
            class="md:text-xl dm-sans font-bold text-darkblue dark:text-darkblue-300"
          >
            {{ post.title }}
            <div v-if="post.on_dev" class="inline-flex">
              <span class="external--link__indicatior" title="External link">
                <ExternalLinkIcon size="0.8x" />
              </span>
            </div>
          </h1>
        </div>
        <div
          class="quick--details__container flex items-center md:text-base text-sm"
        >
          <div
            class="post--top--details my-2 flex text-gray-600 dark:text-gray-400"
          >
            <div class="date__container dm-sans font-medium">
              {{ getDate }}
            </div>
          </div>
          <div class="extended--details text-gray-700 dark:text-gray-400">
            <span v-if="timeStatus != null" class="inline-flex items-center">
              <span class="mx-2">&bullet;</span>
              <span
                class="quick--detail font-medium inline-flex items-center"
                :class="`${
                  timeStatus.toLowerCase() == 'quick'
                    ? 'text-green-500'
                    : 'text-blue-400'
                }`"
              >
                <component
                  :is="
                    timeStatus.toLowerCase() == 'quick'
                      ? 'ZapIcon'
                      : 'CoffeeIcon'
                  "
                  size="0.8x"
                  class="fill-current status--icon"
                />
                <span class="text ml-2">{{ timeStatus }} Read</span>
              </span>
            </span>
            <span v-else class="time inline-flex items-center">
              <span class="mx-2">&bullet;</span>
              <ClockIcon
                size="0.8x"
                class="mr-2 fill-current dark:text-white clock--icon"
              />
              <span class="text">{{ post.read_time.text }}</span>
            </span>
          </div>
        </div>
        <!--Since the p is disabled based on the breakpoint, we need one just for the first post-->
        <p v-if="isFirst" class="text-gray-500 mt-2">{{ post.description }}</p>
        <p v-else class="desc text-gray-500 mt-2">{{ post.description }}</p>
      </div>
      <div v-if="!isFirst" class="preview--img__container xl:w-2/5 w-1/3">
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
import { image } from '~/mixins/image'

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
    position: {
      type: Number,
      default: -1,
    },
    disableExpanded: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [image],
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
      return this.getImgUrl(this.post.cover_img, 250)
    },
    getCoverExpanded() {
      return this.getImgUrl(this.post.cover_img, 750)
    },
    isFirst() {
      return !this.disableExpanded && this.position == 0
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

    @media only screen and (max-width: 768px) {
      display: none;
    }
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

  .preview--img__container {
    img {
      width: 250px;
      height: 150px;
      object-fit: cover;

      @media only screen and (max-width: 768px) {
        width: 110px;
        height: 110px;
      }
    }
  }

  .cover--expanded {
    img {
      width: 750px;
      height: 350px;
      object-fit: cover;

      @media only screen and (max-width: 768px) {
        height: 200px;
      }
    }
  }
}
</style>
