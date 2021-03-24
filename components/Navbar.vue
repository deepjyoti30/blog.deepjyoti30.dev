<template>
  <nav class="navbar__container">
    <div
      class="navbar md:flex md:justify-between md:items-center py-6 dm-sans text-lg dark:text-white"
    >
      <div class="left--content md:block flex justify-between items-center">
        <nuxt-link to="/" class="brand__container font-medium">
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
        </nuxt-link>
        <div class="menu__container md:hidden block" @click="toggleBar">
          <XIcon v-if="expandedBar" />
          <MenuIcon v-else />
        </div>
      </div>
      <div class="links__container items-center md:flex hidden">
        <div class="links">
          <nuxt-link to="/">Posts</nuxt-link>
          <a
            href="https://deepjyoti30.dev"
            rel="noopener noreferrer"
            class="inline-flex items-center"
            >About
            <span>
              <ExternalLinkIcon size="0.8x" class="ml-2" />
            </span>
          </a>
        </div>
        <div class="separator h-5 w-0.5 mx-4 bg-customgreen"></div>
        <div class="quicks flex items-center">
          <button type="button" class="quick-btn" @click="toggleDarkMode">
            <MoonIcon v-if="!isDark" size="1.1x" />
            <SunIcon v-else class="sun--icon" size="1.1x" />
          </button>
          <a href="/feed.xml" type="button" class="quick-btn">
            <RssIcon size="1.1x" />
          </a>
        </div>
      </div>
      <transition name="navbar-expand">
        <div
          v-if="expandedBar"
          class="links__container expanded--content w-full flex flex-col flex-wrap justify-between"
        >
          <div class="links">
            <nuxt-link to="/">Posts</nuxt-link>
            <a
              href="https://deepjyoti30.dev"
              rel="noopener noreferrer"
              class=""
            >
              <span class="wrapper inline-flex items-center">
                <span>About</span>
                <span>
                  <ExternalLinkIcon size="0.8x" class="ml-2" />
                </span>
              </span>
            </a>
          </div>
          <div class="quicks flex items-center mt-6 mb-10 justify-center">
            <button type="button" class="quick-btn" @click="toggleDarkMode">
              <MoonIcon v-if="!isDark" size="2x" />
              <SunIcon v-else class="sun--icon" size="2x" />
            </button>
            <a href="/feed.xml" type="button" class="quick-btn">
              <RssIcon size="2x" />
            </a>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import {
  MoonIcon,
  SunIcon,
  RssIcon,
  MenuIcon,
  XIcon,
  ExternalLinkIcon,
} from 'vue-feather-icons'
import { theme } from '~/mixins/theme'

export default {
  components: { MoonIcon, RssIcon, SunIcon, MenuIcon, XIcon, ExternalLinkIcon },
  mixins: [theme],
  data() {
    return {
      isDark: false,
      expandedBar: false,
    }
  },
  methods: {
    changeUtteranceTheme: function () {
      const message = {
        type: 'set-theme',
        theme: this.isDark ? 'github-dark' : 'github-light',
      }

      var utterances = document.querySelector('iframe')

      // If utterance has not loaded yet
      if (utterances == null) {
        this.waitForUtteranceToLoad()
        return
      }

      // Else change theme
      utterances.contentWindow.postMessage(message, 'https://utteranc.es')
    },
    waitForUtteranceToLoad: function () {
      // wait for utterances to load and send it's first message.
      addEventListener('message', (event) => {
        if (event.origin !== 'https://utteranc.es') {
          return
        }

        // Finally update the theme
        this.changeUtteranceTheme()
      })
    },
    enableDarkMode: function () {
      document.querySelector('body').classList.add('dark')
      this.isDark = true

      // Change utterance
      this.changeUtteranceTheme()
    },
    disableDarkMode: function () {
      document.querySelector('body').classList.remove('dark')
      this.isDark = false

      // Change utterance
      this.changeUtteranceTheme()
    },
    toggleTheme: function (checkDark, opposite = false) {
      /**
       * Toggle the theme of the device based on the passed variable.
       *
       * Passed param should tell us what the theme should be set to.
       */
      // If opposite, alter the value
      if (opposite) checkDark = !checkDark

      checkDark ? this.disableDarkMode() : this.enableDarkMode()
    },
    toggleDarkMode: function () {
      // Toggle the theme
      // NOTE: This method is called only when the user clicks on the theme button change
      // because this will save the theme to the storage.
      this.toggleTheme(this.isDark)

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
        this.toggleTheme(this.isDarkTheme(), true)
        return
      }

      // Else we need a fallback
      this.toggleTheme(this.isDeviceDarkTheme(), true)
    },
    toggleBar: function () {
      this.expandedBar = !this.expandedBar

      // Disable scroll on body
      const overflow = this.expandedBar ? 'hidden' : 'visible'
      document.querySelector('body').style.overflow = overflow
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

      &.expanded--content {
        height: 90vh;
        z-index: 99;

        @apply pt-10;
        @apply text-center;

        .full-clickable {
          @apply mr-0;
          @apply my-6;
          @apply text-3xl;
        }

        .links {
          a {
            @extend .full-clickable;

            display: block;
          }
        }
      }
    }
  }

  $md: 768px;

  .navbar-expand-enter {
    opacity: 0;

    @media only screen and (max-width: $md) {
      transform: translateY(-90vh);
    }
  }
  .navbar-expand-enter-to {
    opacity: 1;

    @media only screen and (max-width: $md) {
      transform: translateY(0);
    }
  }
  .navbar-expand-leave {
    opacity: 1;

    @media only screen and (max-width: $md) {
      transform: translateY(0);
    }
  }
  .navbar-expand-leave-to {
    opacity: 1;

    @media only screen and (max-width: $md) {
      transform: translateY(-90vh);
    }
  }
  .navbar-expand-enter-active,
  .navbar-expand-leave-active {
    transition: opacity, transform 200ms ease-in-out;
  }
}
</style>
