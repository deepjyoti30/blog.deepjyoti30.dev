<template>
  <div class="scroll--top__container fixed bg-white">
    <button
      class="scroll--content border rounded-2xl p-3 outline-none focus:outline-none"
      @click="goToTop"
    >
      <ArrowUpIcon size="2.2x" />
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