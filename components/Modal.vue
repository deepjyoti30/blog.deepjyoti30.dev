<template>
  <div :id="`${getModalId}`" class="modal micromodal-slide" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div
        class="modal__container md:w-2/6 w-full"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`${getModalId}-title`"
      >
        <header class="modal__header">
          <h3 :id="`${getModalId}-title`" class="modal__title">
            {{ getHeading }}
          </h3>
          <button
            v-if="showCancelButton"
            id="close-btn"
            class="modal__close strip-button"
            aria-label="Close modal"
            data-micromodal-close
            @click="closeModal"
          >
            <XIcon class="dark:text-gray-400"></XIcon>
          </button>
        </header>
        <main :id="`${getModalId}-content`" class="modal__content">
          <slot></slot>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from 'vue-feather-icons'

export default {
  name: 'Modal',
  components: {
    XIcon,
  },
  props: {
    modalId: {
      type: String,
      default: '',
    },
    heading: {
      type: String,
      default: 'Modal',
    },
    crossBtn: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getHeading() {
      return this.heading
    },
    showCancelButton() {
      return this.crossBtn
    },
    getModalId() {
      return `${this.modalId}-frame`
    },
  },
  methods: {
    showModal: function () {
      /**
       * Show the modal
       */
      this.$MicroModal.show(this.getModalId, {
        disableFocus: true,
        awaitCloseAnimation: true,
        awaitOpenAnimation: true,
      })
    },
    closeModal: function () {
      /**
       * Close the modal when the close button is clicked
       */
      this.$MicroModal.close(this.getModalId)
    },
  },
}
</script>
