<template>
  <nav class="navbar__container">
    <div
      class="navbar flex justify-between py-6 dm-sans text-lg dark:text-white"
    >
      <div class="brand__container font-medium">
        <img
          src="~/assets/img/logo.png"
          alt="Brand Logo"
          height="30"
          width="30"
        />
      </div>
      <div class="links__container inline-flex items-center">
        <div class="links">
          <nuxt-link to="/">Posts</nuxt-link>
          <a href="https://deepjyoti30.dev" rel="noopener noreferrer">About</a>
        </div>
        <div class="separator h-5 w-1 mx-4 bg-customgreen"></div>
        <div class="quicks flex items-center">
          <button
            type="button"
            class="quick-btn outline-none"
            @click="enableDarkMode"
          >
            <MoonIcon size="1.1x" />
          </button>
          <button type="button" class="quick-btn">
            <RssIcon size="1.1x" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { MoonIcon, RssIcon } from 'vue-feather-icons'

export default {
  components: { MoonIcon, RssIcon },
  methods: {
    enableDarkMode: function () {
      document.querySelector('body').classList.add('dark')
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar__container {
  .navbar {
    .links__container {
      a {
        @apply mr-4;

        &:last-child {
          @apply mr-0;
        }

        &.nuxt-link-exact-active {
          color: $green;
        }
      }

      .quicks {
        .quick-btn {
          @apply mr-4;

          &:last-child {
            @apply mr-0;
          }
        }
      }
    }
  }
}
</style>
