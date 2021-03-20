<template>
  <div class="share--mini__container">
    <button
      class="p-1 hover:bg-darkblue-300 rounded-md hover:text-darkblue transition duration-100 ease-in focus:outline-none"
      title="Share Post"
      @click="showShareMenu()"
    >
      <ShareIcon size="1.2x" />
    </button>
    <SharePopup ref="sharePopup" :post="post" />
  </div>
</template>

<script>
import { ShareIcon } from 'vue-feather-icons'
import { share } from '~/mixins/share'
import SharePopup from './SharePopup.vue'

export default {
  components: {
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
  methods: {
    showShareMenu: function () {
      /**
       * Show the share popup when the button is clicked.
       *
       * We need to check if native menu is supported, if so, then
       * show the native menu.
       *
       * Else, we need to show our custom menu.
       */
      if (this.isNativePresent())
        return this.showNativeShare(
          this.post.title,
          this.post.description,
          this.post.slug
        )
      this.$refs.sharePopup.$refs.modal.showModal()
    },
  },
}
</script>
