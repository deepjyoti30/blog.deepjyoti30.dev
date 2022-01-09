<template>
  <nav
    class="
      navbar__container
      bg-white
      dark:bg-darkhigh
      border-b border-gray-100
      dark:border-gray-900
    "
  >
    <div
      class="
        navbar
        lg:w-3/5
        md:w-4/5
        mr-auto
        ml-auto
        md:flex md:justify-between md:items-center
        py-4
        md:px-0
        px-4
        dm-sans
        text-lg
        dark:text-white
      "
    >
      <div class="left--content md:block flex justify-between items-center">
        <nuxt-link
          to="/"
          class="brand__container font-medium inline-flex items-center"
        >
          <span class="img--wrapper">
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
          </span>
          <span
            class="
              name
              ml-4
              text-lg text-gray-800
              dark:text-gray-200
              font-semibold
              md:inline
              hidden
            "
            >Deepjyoti Barman</span
          >
        </nuxt-link>
        <div class="menu__container md:hidden block" @click="toggleBar">
          <XIcon v-if="expandedBar" />
          <MenuIcon v-else />
        </div>
      </div>
      <div class="links__container items-center md:flex hidden font-medium">
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
          <a href="/feed.xml" type="button" class="quick-btn button-cust">
            <RssIcon size="1.1x" />
          </a>
          <div class="theme__container mr-3">
            <div
              class="theme mt-2 relative"
              @mouseover="showThemeMenu = true"
              @mouseleave="showThemeMenu = false"
            >
              <button title="Change Theme" aria-label="Change Theme">
                <client-only>
                  <MoonIcon
                    v-if="currentThemeIndex == 1"
                    size="1.1x"
                    class="fill-current"
                  />
                  <SunIcon
                    v-else-if="currentThemeIndex == 2"
                    class="sun--icon"
                    size="1.1x"
                  />
                  <SunriseIcon v-else class="sunrise--icon" size="1.1x" />
                </client-only>
              </button>
              <transition name="theme-show">
                <div
                  v-if="showThemeMenu"
                  class="
                    theme--options
                    absolute
                    top-0
                    md:left-0 md:right-auto
                    right-0
                    rounded-md
                    border
                    dark:border-gray-800
                    shadow-lg
                    bg-white
                    dark:bg-darklow
                    py-2
                    px-5
                    text-gray-600
                    dark:text-gray-400
                    md:origin-top-left
                    origin-top-right
                  "
                >
                  <div class="options">
                    <button
                      :class="currentThemeIndex == 2 ? 'active' : ''"
                      title="Enable light theme"
                      aria-label="Enable light theme"
                      @click="setThemeIndex(2)"
                    >
                      Light
                    </button>
                    <button
                      :class="currentThemeIndex == 1 ? 'active' : ''"
                      title="Enable dark theme"
                      aria-label="Enable dark theme"
                      @click="setThemeIndex(1)"
                    >
                      Dark
                    </button>
                    <button
                      :class="currentThemeIndex == 0 ? 'active' : ''"
                      title="Sync theme with device"
                      aria-label="Sync theme with device"
                      @click="setThemeIndex(0)"
                    >
                      Auto
                    </button>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <transition name="navbar-expand">
        <div
          v-if="expandedBar"
          class="
            links__container
            expanded--content
            w-full
            flex flex-col flex-wrap
            justify-between
          "
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
            <button
              type="button"
              class="quick-btn"
              @click="toggleDarkMode"
              :title="getThemeChangeText"
              aria-label="Theme Change button"
            >
              <MoonIcon
                v-if="currentThemeIndex == 2"
                size="2x"
                class="fill-current"
              />
              <SunIcon
                v-else-if="currentThemeIndex == 1"
                class="sun--icon"
                size="2x"
              />
              <SunriseIcon v-else class="sunrise--icon" size="2x" />
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
  SunriseIcon,
  ExternalLinkIcon,
} from 'vue-feather-icons'
import { theme } from '~/mixins/theme'

export default {
  components: {
    MoonIcon,
    RssIcon,
    SunIcon,
    MenuIcon,
    XIcon,
    ExternalLinkIcon,
    SunriseIcon,
  },
  mixins: [theme],
  data() {
    return {
      isDark: false,
      expandedBar: false,
      currentThemeIndex: 0,
      themeOptions: ['auto', 'dark', 'light'],
      showThemeMenu: false,
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
    toggleThemeIndex: function () {
      /**
       * Toggle the index of the theme.
       *
       * We need to check if the index is equal to
       * the length of the theme options, if so then
       * put it back to 0.
       */
      if (this.currentThemeIndex == this.themeOptions.length - 1)
        return (this.currentThemeIndex = 0)
      this.currentThemeIndex += 1
    },
    setThemeIndex: function (themeIndex) {
      // Set the theme based on the passed index
      // Now we need to check what the theme is. If the theme is
      // auto, we need to find the device theme and set it accordingly.

      // Set the current theme index as the passed one:
      this.currentThemeIndex = themeIndex

      const currentTheme = this.themeOptions[this.currentThemeIndex]

      // Set the theme in the app
      if (currentTheme == 'auto')
        this.toggleTheme(this.isDeviceDarkTheme(), true)
      else this.toggleTheme(currentTheme == 'dark', true)

      // Now save the theme.
      this.setTheme(currentTheme)

      // Hide the menu
      this.showThemeMenu = false
    },
    toggleDarkMode: function () {
      // Toggle the theme
      // NOTE: This method is called only when the user clicks on the theme button change
      // because this will save the theme to the storage.
      this.toggleThemeIndex()

      // Now we need to check what the theme is. If the theme is
      // auto, we need to find the device theme and set it accordingly.
      const currentTheme = this.themeOptions[this.currentThemeIndex]

      // Set the theme in the app
      if (currentTheme == 'auto')
        this.toggleTheme(this.isDeviceDarkTheme(), true)
      else this.toggleTheme(currentTheme == 'dark', true)

      // Now save the theme.
      this.setTheme(currentTheme)
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
      const themeFetched = this.getTheme()
      this.currentThemeIndex = this.themeOptions.indexOf(themeFetched)

      // If the theme is not saved, use auto as fallback
      // If the theme is set to Auto, we need to use device
      // theme as well.
      if (themeFetched == 'auto' || !themeFetched) {
        return this.toggleTheme(this.isDeviceDarkTheme(), true)
      }

      // Else toggle the theme based on users preference
      this.toggleTheme(this.isDarkTheme(), true)
    },
    toggleBar: function () {
      this.expandedBar = !this.expandedBar

      // Disable scroll on body
      const overflow = this.expandedBar ? 'hidden' : 'visible'
      document.querySelector('body').style.overflow = overflow
    },
  },
  computed: {
    getThemeChangeText() {
      // We need to show that the click will set the
      // theme to the next option available, so we
      // will have to increase the value of the index
      // by 1 or reset to 0.
      var tempIndex
      if (this.currentThemeIndex == this.themeOptions.length - 1) tempIndex = 0
      else tempIndex = this.currentThemeIndex + 1

      return `Set theme to ${this.themeOptions[tempIndex]}`
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
          @apply mr-2;

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

          .sunrise--icon {
            color: $blue;
            fill: $blue;
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

.theme__container {
  .theme--options {
    .options {
      button {
        display: block;
        @apply p-1 hover:text-green-500 transition ease-in duration-100 font-medium;
        &.active {
          @apply text-green-500;
        }
      }
    }
  }
  .theme-show-enter,
  .theme-show-leave-to {
    transform: scale(0.5);
    transform-origin: left center;
  }
  .theme-show-enter-to,
  .theme-show-leave {
    transform: scale(1);
  }
  .theme-show-enter-active {
    transition: transform 70ms;
  }
}
</style>
