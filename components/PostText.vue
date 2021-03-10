<template>
  <div class="post--text__container" v-html="content"></div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.post--text__container {
  @apply mb-20;
  @apply mt-10;
  @apply text-lg;
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
      @apply my-5;
      @extend .dm-sans;
      @apply font-medium;
    }

    p {
      @apply my-2;

      strong {
        @apply font-medium;
      }

      code {
        @apply rounded;
        @apply bg-yellow-100;
        @apply text-base;
        @apply dark:text-gray-700;
        padding: 1px 3px;
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
        @apply text-yellow-700;
        @apply border-yellow-700;
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
      @apply text-indigo-500;
      @apply border-b-2;
      @apply font-medium;
      @apply border-indigo-500;
      transition: 0.1s ease;

      &:hover {
        @apply border-b-4;
        transition: 0.1s ease;
      }
    }
  }
}
</style>
