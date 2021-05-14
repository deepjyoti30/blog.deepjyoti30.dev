<template>
  <div class="post--text__container" v-html="content"></div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.post--text__container {
  @apply mt-5 mb-10;
  @apply md:text-lg;
  @apply text-gray-700 dark:text-gray-400;

  ::v-deep h1 {
    @apply text-5xl;
  }

  ::v-deep {
    h1 {
      @apply text-5xl;
    }
    h2 {
      @apply text-3xl;
    }
    h3 {
      @apply text-2xl;
    }
    h4 {
      @apply text-xl;
    }
    h5 {
      @apply text-lg;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @apply my-4;
      @extend .dm-sans;
      @apply font-medium;

      @apply text-black dark:text-gray-200;
    }

    h1,
    h2 {
      @apply mt-12;
    }

    h3 {
      @apply mt-10;
    }

    p {
      @apply my-4;

      strong {
        @apply font-medium;
      }

      code {
        @apply rounded;
        @apply bg-yellow-100;
        @apply text-base;
        @apply dark:text-gray-700;
        padding: 1px 3px;
        overflow-wrap: break-word;
      }
    }

    img {
      @apply rounded;
      @apply my-4;
    }

    blockquote {
      background: lighten($yellow, 20);
      @apply border-l-8;
      @apply py-2;
      @apply px-4;
      @apply my-4;
      @apply rounded;
      @apply border-customyellow;
      @apply text-yellow-800;

      code {
        @apply rounded;
        @apply bg-customyellow;
        @apply text-base;
        padding: 1px 3px;
      }

      a {
        @apply text-yellow-700 dark:text-yellow-700;
        @apply border-yellow-700 dark:border-yellow-700;
      }
    }

    li {
      @apply list-inside;
      @apply list-disc;

      code {
        @apply rounded;
        @apply bg-yellow-100;
        @apply text-base;
        @apply dark:text-gray-700;
        padding: 1px 3px;
      }
    }

    pre {
      overflow: auto;

      code {
        @extend .jetbrains-mono;
      }

      @apply p-4;
      @apply text-sm;
    }

    .codehilite {
      @apply rounded;
      @apply my-4;
    }

    a {
      @apply text-blue-500 dark:text-blue-300;
      @apply border-b-2;
      @apply font-medium;
      @apply border-blue-500 dark:border-blue-300;
      transition: 0.1s ease;

      &:hover {
        @apply border-b-4;
        transition: 0.1s ease;
      }
    }
  }
}
</style>
