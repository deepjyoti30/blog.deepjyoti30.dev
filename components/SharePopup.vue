<template>
  <div class="share--popup__container">
    <Modal ref="modal" modal-id="share" heading="Share" cross-btn>
      <div id="message" class="mb-2">
        <h3
          id="modal-frame-title"
          class="modal__title dm-sans mb-4 font-semibold text-xl"
        >
          {{ post.title }}
        </h3>
        <p class="text-base text-gray-500 dark:text-gray-400">
          {{ post.description }}
        </p>
      </div>
      <div class="copy__container">
        <div class="copy--content flex flex-wrap rounded-md mt-6">
          <input
            type="url"
            ref="linkContent"
            readonly
            @click="selectText($event)"
            class="select-all p-2 text-gray-700 flex-grow truncate border rounded-l-md focus:outline-none"
            :value="getShareUrl"
          />
          <button
            type="button"
            class="w-1/12 rounded-r-md flex justify-center items-center bg-gray-200 text-gray-500 focus:outline-none hover:bg-gray-300 transition duration-100 ease-in"
            title="Copy Link"
            @click="copyLink"
          >
            <CopyIcon v-if="!isClicked" class="icon" />
            <span v-else>
              <CheckCircleIcon v-if="copyStatus" class="text-green-600" />
              <AlertCircleIcon v-else class="text-red-600" />
            </span>
          </button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { CopyIcon, CheckCircleIcon, AlertCircleIcon } from 'vue-feather-icons'
import Modal from '~/components/Modal.vue'
import { share } from '~/mixins/share'

export default {
  components: {
    Modal,
    CopyIcon,
    CheckCircleIcon,
    AlertCircleIcon,
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
      copyStatus: false,
      shareUrl: '',
      isClicked: false,
    }
  },
  methods: {
    selectText: function (el) {
      /**
       * Select the text when the input container is clicked by
       * the user.
       */
      el.currentTarget.select()
    },
    copyLink: async function () {
      /**
       * Copy the link to the users clipboard.
       */
      this.copyStatus = await this.copyUrl(
        this.shareUrl,
        this.$refs.linkContent
      )
      this.isClicked = true

      setTimeout(() => {
        this.isClicked = false
      }, 5000)
    },
  },
  computed: {
    getShareUrl() {
      return this.shareUrl
    },
  },
  mounted() {
    this.shareUrl = this.buildShareUrl(this.post.slug)
  },
}
</script>
