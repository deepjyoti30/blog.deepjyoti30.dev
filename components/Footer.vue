<template>
  <div class="footer__container border-t-2 dark:border-gray-700 mt-6">
    <div
      class="bottom--content md:w-3/5 mr-auto ml-auto py-5 md:flex md:justify-between text-gray-500 dark:text-gray-400 text-center"
    >
      <div class="copyright--content">© 2021-Present Deepjyoti Barman</div>
      <div class="social--content inline-flex md:mt-0 mt-6">
        <a
          href="https://deepjyoti30.dev/github"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GithubIcon class="icon" />
        </a>
        <a
          href="https://twitter.com/DeepBarman30"
          target="_blank"
          rel="noreferrer noopener"
        >
          <TwitterIcon class="icon" />
        </a>
        <a
          href="mailto:hello@deepjyoti30.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          <MailIcon class="icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { GithubIcon, TwitterIcon, MailIcon } from 'vue-feather-icons'

export default {
  components: {
    GithubIcon,
    TwitterIcon,
    MailIcon,
  },
}
</script>

<style lang="scss" scoped>
.social--content {
  a {
    @apply mx-2;

    .icon {
      width: 1.3em;
      height: 1.3em;
    }
  }
}
</style>
