<template>
    <div class="post--text__container mt-8" v-html="content"></div>
</template>

<script>
export default {
    props: {
        content: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
.post--text__container {
    @apply text-base;
    @apply text-gray-700;

    ::v-deep p {
        @apply my-2;
    }

    ::v-deep h1 {
        @apply text-5xl;
    }

    ::v-deep {
        h2 { @apply text-3xl; }
        h3 { @apply text-2xl; }
        h4 { @apply text-xl; }
        h5 { @apply text-lg; }

        h1, h2, h3, h4, h5, h6 {
            @apply my-5;
            @extend .dm-sans;
            @apply font-medium;
        }

        img {
            @apply my-4;
        }
    }
}
</style>