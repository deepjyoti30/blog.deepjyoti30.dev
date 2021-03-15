<template>
  <div class="share__container my-4">
    <h5
      class="text-base font-semibold dm-sans text-gray-700 dark:text-gray-300"
    >
      Share
    </h5>
    <div class="share--btns mt-4 flex">
      <a href="" title="Share on Twitter" class="share--btn">
        <TwitterIcon class="icon" />
      </a>
      <a href="" title="Share on LinkedIn" class="share--btn">
        <LinkedinIcon class="icon" />
      </a>
      <button type="button" title="Share Post" class="share--btn">
        <ShareIcon class="icon" />
      </button>
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
      @apply mx-2;
      @apply p-1 hover:bg-darkblue-300 rounded-md hover:text-darkblue transition duration-100 ease-in;

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
