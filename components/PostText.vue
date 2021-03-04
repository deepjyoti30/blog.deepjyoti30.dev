<template>
    <div class="post--text__container" v-html="content"></div>
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
    @apply mb-20 ;
    @apply mt-10;
    @apply text-lg;
    @apply text-gray-700;

    ::v-deep h1 {
        @apply text-5xl;
    }

    ::v-deep {
        h1 { @apply text-5xl; }
        h2 { @apply text-3xl; }
        h3 { @apply text-2xl; }
        h4 { @apply text-xl; }
        h5 { @apply text-lg; }

        h1, h2, h3, h4, h5, h6 {
            @apply my-5;
            @extend .dm-sans;
            @apply font-medium;
        }

        p {
            @apply my-2;

            strong {
                @apply font-medium;
            }
        }

        img {
            @apply my-4;
        }

        blockquote {
            background: lighten($yellow, 15);
            @apply border-l-8;
            @apply p-2;
            @apply pl-4;
            @apply my-4;
            @apply rounded;
            @apply border-customyellow;
            @apply text-yellow-800;
        }

        li {
            @apply list-inside;
            @apply list-disc;
        }

        pre {
            white-space: pre-wrap;
            white-space: -moz-pre-wrap;
            
            @apply p-4;
            @apply rounded;
            @apply text-sm;
        }
    }
}
</style>