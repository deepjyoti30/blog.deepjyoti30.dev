<template>
    <nav class="navbar__container">
        <div class="navbar flex justify-between py-6 dm-sans text-lg">
            <div class="brand__container font-medium">
                <img src="~/assets/img/logo.png" alt="Brand Logo" height="35" width="35" />
            </div>
            <div class="links__container inline-flex items-center">
                <nuxt-link to="/">Posts</nuxt-link>
                <a href="https://deepjyoti30.dev" rel="noopener noreferrer">About</a>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.navbar__container {
    .navbar {
        .links__container {
            a {
                @apply mr-4;
            }
        }
    }
}
</style>