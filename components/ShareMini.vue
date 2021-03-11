<template>
  <div class="share--container">
    <button
      class="p-1 hover:bg-darkblue-300 rounded-md hover:text-darkblue transition duration-100 ease-in"
    >
      <ShareIcon size="1.2x" />
    </button>
  </div>
</template>

<script>
import { ShareIcon } from 'vue-feather-icons'

export default {
  components: {
    ShareIcon,
  },
}
</script>
