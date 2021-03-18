<template>
  <div class="cover__container mt-4">
    <img :src="getCover" alt="Post cover" loading="lazy" class="rounded" />
  </div>
</template>

<script>
import { image } from '~/mixins/image'

export default {
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
  mixins: [image],
  computed: {
    getCover() {
      return this.getImgUrl(this.post.cover_img, 1390)
    },
  },
}
</script>
