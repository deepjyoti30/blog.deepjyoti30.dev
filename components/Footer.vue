<template>
    <div class="footer__container">
        <div class="top--statement font-medium text-center text-2xl text-gray-600 dm-sans hidden">
            I build useful, creative and confident apps.
        </div>
        <div class="bottom--content mt-6 py-6 md:flex md:justify-between border-t-2 text-gray-500 text-center">
            <div class="copyright--content">
                © 2021-Present Deepjyoti Barman
            </div>
            <div class="social--content inline-flex md:mt-0 mt-6">
                <a href="https://deepjyoti30.dev/github" target="_blank" rel="noreferrer noopener">
                    <github-icon class="icon" />
                </a>
                <a href="https://twitter.com/DeepBarman30" target="_blank" rel="noreferrer noopener">
                    <twitter-icon class="icon" />
                </a>
                <a href="mailto:hello@deepjyoti30.dev" target="_blank" rel="noreferrer noopener">
                    <mail-icon class="icon" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { GithubIcon, TwitterIcon, MailIcon } from "vue-feather-icons";

export default {
    components: {
        GithubIcon,
        TwitterIcon,
        MailIcon
    }
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