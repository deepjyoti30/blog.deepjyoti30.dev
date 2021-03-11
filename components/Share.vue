<template>
  <div class="share__container my-2">
    <h5 class="text-lg font-medium dm-sans text-gray-600 dark:text-gray-300">
      Share
    </h5>
    <div class="share--btns mt-4 flex">
      <span class="share--btn">
        <TwitterIcon class="icon" />
      </span>
      <span class="share--btn">
        <LinkedinIcon class="icon" />
      </span>
      <span class="share--btn">
        <ShareIcon class="icon" />
      </span>
    </div>
  </div>
</template>

<script>
import { TwitterIcon, LinkedinIcon, ShareIcon } from 'vue-feather-icons'

export default {
  components: {
    TwitterIcon,
    LinkedinIcon,
    ShareIcon,
  },
}
</script>

<style lang="scss" scoped>
.share__container {
  .share--btns {
    @apply text-gray-700;

    .share--btn {
      @apply mx-4;

      &:first-child {
        @apply ml-0;
      }

      .icon {
        width: 1.3em;
        height: 1.3em;
      }
    }
  }
}
</style>
