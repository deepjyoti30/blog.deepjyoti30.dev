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