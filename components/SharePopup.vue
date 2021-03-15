<template>
  <div class="share--popup__container">
    <Modal ref="modal" modal-id="share" heading="Share" cross-btn>
      <div id="message" class="mb-2">
        <h3
          id="modal-frame-title"
          class="modal__title md:text-2xl text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          {{ post.title }}
        </h3>
        <h6 class="md:text-base text-sm text-gray-500 dark:text-gray-400">
          {{ post.description }}
        </h6>
      </div>
      <div class="btn-container w-full mb-2 mt-8 flex text-xl"></div>
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
