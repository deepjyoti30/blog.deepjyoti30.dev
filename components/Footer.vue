<template>
    <div class="footer__container">
        <div class="top--statement"></div>
        <div class="bottom--content mt-8 py-6 border-t-2 text-gray-500 text-center">
            <div class="copyright--content">
                © 2020-Present Deepjyoti Barman. All rights reserved.
            </div>
            <div class="social--content inline-flex mr-auto ml-auto md:mt-4 mt-6">
                <span>
                    <github-icon class="icon" />
                </span>
                <span>
                    <twitter-icon class="icon" />
                </span>
                <span>
                    <mail-icon class="icon" />
                </span>
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
    span {
        @apply mx-2;

        .icon {
            width: 1.3em;
            height: 1.3em;
        }
    }
}
</style>