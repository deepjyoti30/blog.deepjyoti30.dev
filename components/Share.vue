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
    copyOldSchool: function () {
      /**
       * Copy by creating a text box and selecting and copying
       */
      // Create a text input and keep it hidden
      const textInput = document.createElement('input')
      textInput.value = this.selfUrl
      // Hide it.
      textInput.style.display = 'none'
      document.body.appendChild(textInput)
      textInput.focus()
      textInput.select()
      try {
        const status = document.execCommand('copy')
        if (status) {
          this.showMessage('Copied!')
        } else {
          this.showMessage('Link could not be copied!')
        }
      } catch (err) {
        console.log('Fallback failed as well :/', err)
      }
      document.body.removeChild(textInput)
    },
    copyUrl: function () {
      /**
       * Copy the url of the post to clipboard
       *
       * We have to ways to copy, one would be by using the
       * new API which might now work all the time, thus we
       * need a fallback.
       */
      if (!navigator.clipboard) {
        // Call the fallback
        this.copyOldSchool()
      }
      navigator.clipboard.writeText(this.selfUrl).then(
        () => {
          this.showMessage('Copied!')
        },
        function (err) {
          console.log('Could not copy text: ', err)
        }
      )
    },
    handleShare: async function () {
      /**
       * Handle the share menu
       *
       * Based on the share menu support we will work
       * distinctly. If share menu is not support, we will
       * just copy the url to the clipboard.
       *
       * Else we will invoke the share menu.
       */
      if (!navigator.share) {
        this.copyUrl()
        return
      }
      await navigator.share({
        title: this.post.title,
        url: this.selfUrl,
        text: this.post.description,
      })
    },
    showShareMenu: function () {
      /**
       * Show the share popup when the button is clicked.
       */
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
