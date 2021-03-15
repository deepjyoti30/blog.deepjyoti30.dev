<template>
  <nav class="navbar__container">
    <div
      class="navbar flex justify-between py-6 dm-sans text-lg dark:text-white"
    >
      <div class="brand__container font-medium">
        <img
          v-if="!isDark"
          src="~/assets/img/logo.png"
          alt="Brand Logo"
          height="30"
          width="30"
        />
        <img
          v-else
          src="~/assets/img/logo_white.png"
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
        <div class="separator h-5 w-0.5 mx-4 bg-customgreen"></div>
        <div class="quicks flex items-center">
          <button type="button" class="quick-btn" @click="toggleDarkMode">
            <MoonIcon v-if="!isDark" size="1.1x" />
            <SunIcon v-else class="sun--icon" size="1.1x" />
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
import { MoonIcon, SunIcon, RssIcon } from 'vue-feather-icons'
import { theme } from '~/mixins/theme'

export default {
  components: { MoonIcon, RssIcon, SunIcon },
  mixins: [theme],
  data() {
    return {
      isDark: false,
    }
  },
  methods: {
    enableDarkMode: function () {
      document.querySelector('body').classList.add('dark')
      this.isDark = true
    },
    disableDarkMode: function () {
      document.querySelector('body').classList.remove('dark')
      this.isDark = false
    },
    toggleDarkMode: function () {
      // Toggle the theme
      // NOTE: This method is called only when the user clicks on the theme button change
      // because this will save the theme to the storage.
      this.isDark ? this.disableDarkMode() : this.enableDarkMode()

      this.setTheme(this.isDark ? 'dark' : 'light')
    },
    determineTheme: function () {
      /**
       * Determine which theme to set for the app.
       *
       * If the theme was previously set by the user, we will
       * use that theme.
       *
       * If no theme was ever set by the user, we will check what
       * the users system theme is and based on that we will set
       * the theme to dark or light.
       *
       * And finally the fallback would be light.
       */
      if (this.isThemeSaved()) {
        this.isDarkTheme() ? this.enableDarkMode() : this.disableDarkMode()
        return
      }

      // Else we need a fallback
      console.log('Need a fallback')
    },
  },
  mounted() {
    this.determineTheme()
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

          &:focus {
            outline: none;
            border: none;
          }

          .sun--icon {
            color: $yellow;
            fill: $yellow;
          }
        }
      }
    }
  }
}
</style>
