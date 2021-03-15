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
            readonly
            @click="selectText($event)"
            class="select-all p-2 text-gray-700 flex-grow truncate border rounded-l-md focus:outline-none"
            :value="buildShareUrl(post.slug)"
          />
          <button
            type="button"
            class="w-1/12 border rounded-r-md flex justify-center items-center bg-gray-200 text-gray-500 focus:outline-none"
            title="Copy Link"
          >
            <CopyIcon class="icon" />
          </button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { CopyIcon } from 'vue-feather-icons'
import Modal from '~/components/Modal.vue'
import { share } from '~/mixins/share'

export default {
  components: {
    Modal,
    CopyIcon,
  },
  mixins: [share],
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
  methods: {
    selectText: function (el) {
      /**
       * Select the text when the input container is clicked by
       * the user.
       */
      el.currentTarget.select()
    },
  },
}
</script>
