<template>
  <div class="scroll--top__container fixed">
    <button
      class="scroll--content rounded-2xl p-3 outline-none focus:outline-none bg-green-300 shadow-2xl transform hover:scale-125 transition duration-50 ease-in"
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
  },
}
</script>

<style lang="scss" scoped>
.scroll--top__container {
  bottom: 5%;
  right: 3%;
}
</style>