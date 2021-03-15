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
        <h6 class="text-base text-gray-500 dark:text-gray-400">
          {{ post.description }}
        </h6>
      </div>
      <div class="copy__container">
        <div class="copy--content flex flex-wrap mt-6">
          <input
            type="url"
            class="p-2 flex-grow select-all truncate bg-transparent border rounded-l-md border focus:outline-none"
            readonly
            value="https://blog.deepjyoti30.dev/ytmdl-release-v2"
          />
          <button type="button" class="w-1/12 border rounded-r-md"></button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '~/components/Modal.vue'

export default {
  components: {
    Modal,
  },
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
  methods: {},
}
</script>
