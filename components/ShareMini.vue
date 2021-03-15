<template>
  <div class="share--mini__container">
    <button
      class="p-1 hover:bg-darkblue-300 rounded-md hover:text-darkblue transition duration-100 ease-in"
      title="Share Post"
      @click="showShareMenu()"
    >
      <ShareIcon size="1.2x" />
    </button>
    <SharePopup ref="sharePopup" />
  </div>
</template>

<script>
import { ShareIcon } from 'vue-feather-icons'
import SharePopup from './SharePopup.vue'

export default {
  components: {
    ShareIcon,
    SharePopup,
  },
  methods: {
    showShareMenu: function () {
      /**
       * Show the share popup when the button is clicked.
       */
      this.$refs.sharePopup.$refs.modal.showModal()
    },
  },
}
</script>
