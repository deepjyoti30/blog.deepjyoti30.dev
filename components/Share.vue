<template>
  <div class="share__container my-4">
    <h5
      class="text-base font-semibold dm-sans text-gray-700 dark:text-gray-300"
    >
      Share
    </h5>
    <div class="share--btns mt-4 flex">
      <a
        :href="twitterUrl"
        title="Share on Twitter"
        target="_blank"
        class="share--btn"
      >
        <TwitterIcon class="icon" />
      </a>
      <a
        :href="linkedInUrl"
        title="Share on LinkedIn"
        target="_blank"
        class="share--btn"
      >
        <LinkedinIcon class="icon" />
      </a>
      <button
        type="button"
        title="Share Post"
        class="share--btn"
        @click="showShareMenu()"
      >
        <ShareIcon class="icon" />
      </button>
    </div>
    <SharePopup ref="sharePopup" :post="post" />
  </div>
</template>

<script>
import { TwitterIcon, LinkedinIcon, ShareIcon } from 'vue-feather-icons'
import { share } from '~/mixins/share'
import SharePopup from './SharePopup.vue'

export default {
  components: {
    TwitterIcon,
    LinkedinIcon,
    ShareIcon,
    SharePopup,
  },
  mixins: [share],
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      linkedInBase: 'https://www.linkedin.com/sharing/share-offsite/',
      twitterBase: 'https://twitter.com/intent/tweet',
      selfUrl: '',
      twitterUrl: '',
      linkedInUrl: '',
    }
  },
  mounted() {
    this.buildAll()
  },
  methods: {
    buildSelf: function () {
      /**
       * Build the URL that will be shared in all the sites
       */
      this.selfUrl = this.buildShareUrl(this.post.slug)
    },
    buildLinkedIn: function () {
      /**
       * Build the URL for the linkedin share
       */
      this.linkedInUrl = `${this.linkedInBase}?${new URLSearchParams({
        mini: true,
        url: this.selfUrl,
      })}`
    },
    buildTwitter: function () {
      /**
       * Build the URL for the Twitter share
       */
      this.twitterUrl = `${this.twitterBase}?${new URLSearchParams({
        url: this.selfUrl,
        text: this.post.title,
      })}`
    },
    buildAll: function () {
      this.buildSelf()
      this.buildLinkedIn()
      this.buildTwitter()
    },
    showMessage: function (messageToShow) {
      /**
       * Show the passed message in the tip
       *
       * Also hide it after 5-3 seconds.
       */
      this.tipMessage = messageToShow
      setTimeout(() => {
        this.tipMessage = ''
      }, 5000)
    },
    showShareMenu: function () {
      /**
       * Show the share popup when the button is clicked.
       */
      if (this.isNativePresent())
        return this.showNativeShare(post.title, post.description, post.slug)
      this.$refs.sharePopup.$refs.modal.showModal()
    },
  },
}
</script>

<style lang="scss" scoped>
.share__container {
  .share--btns {
    @apply text-gray-500 dark:text-gray-400;

    .share--btn {
      @apply mx-3;
      @apply p-1 hover:bg-darkblue-300 rounded-md hover:text-darkblue transition duration-100 ease-in;
      @apply focus:outline-none;

      &:first-child {
        @apply ml-0;
      }

      .icon {
        width: 1.3em;
        height: 1.3em;
      }
    }
  }
}
</style>
