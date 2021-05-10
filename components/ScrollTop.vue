<template>
  <div class="scroll--top__container fixed bg-white">
    <div class="scroll--content border rounded-2xl p-3">
      <ArrowUpIcon size="2.2x" />
    </div>
  </div>
</template>

<script>
import { ArrowUpIcon } from 'vue-feather-icons'

export default {
  name: 'ScrollTop',
  components: {
    ArrowUpIcon,
  },
}
</script>

<style lang="scss" scoped>
.scroll--top__container {
  bottom: 5%;
  right: 3%;
}
</style>