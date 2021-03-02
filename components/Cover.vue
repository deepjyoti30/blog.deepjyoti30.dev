<template>
    <div class="cover__container mt-8">
        <img
            :src="getCover"
            alt="Post cover"
            loading="lazy"
            class="rounded-md"
      />
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object
        }
    },
    computed: {
        getCover() {
          const imgPrefix = `https://res.cloudinary.com/deepjyoti30/image/fetch/f_auto,q_50,w_1390/`;
          return imgPrefix + this.post.cover_img;
        },
    }
}
</script>