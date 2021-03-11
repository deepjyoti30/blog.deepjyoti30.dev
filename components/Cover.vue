<template>
  <div class="cover__container mt-4">
    <img :src="getCover" alt="Post cover" loading="lazy" class="rounded" />
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
  computed: {
    getCover() {
      const imgPrefix = `https://res.cloudinary.com/deepjyoti30/image/fetch/f_auto,q_50,w_1390/`
      return imgPrefix + this.post.cover_img
    },
  },
}
</script>
