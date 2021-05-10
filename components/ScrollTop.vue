<template>
  <div class="scroll--top__container fixed">
    <button
      v-if="showButton"
      class="scroll--content rounded-2xl p-3 outline-none focus:outline-none bg-green-300 shadow-2xl transform hover:scale-125 transition duration-50"
      @click="goToTop"
    >
      <ArrowUpIcon size="1.5x" />
    </button>
  </div>
</template>

<script>
import { ArrowUpIcon } from 'vue-feather-icons'

export default {
  name: 'ScrollTop',
  components: {
    ArrowUpIcon,
  },
  props: {
    scrollAmount: {
      type: Number,
      default: 1000,
    },
  },
  data: () => {
    return {
      showButton: false,
    }
  },
  methods: {
    goToTop: function () {
      /**
       * Go to the top of the window when the user clicks
       * the scroll button.
       */
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
    updateScrollAmount: function () {
      /**
       * Update the scrolled amount when this method
       * is called.
       */
      this.showButton =
        document.body.scrollTop > this.scrollAmount ||
        document.documentElement.scrollTop > this.scrollAmount
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.updateScrollAmount)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScrollAmount)
  },
}
</script>

<style lang="scss" scoped>
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(5%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll--top__container {
  bottom: 5%;
  right: 3%;

  .scroll--content {
    // Animate reveal
    animation-name: slideUp;
    animation-duration: 1s;
  }
}
</style>