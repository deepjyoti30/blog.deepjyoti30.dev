<template>
  <div>
    <h2>Mountain: {{ post }}</h2>
    <p>Path: {{ $route.path }}</p>
    <NuxtLink to="/">Back to Mountains</NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: this.$route.params.parent,
    }
  },
  async asyncData({ params, redirect }) {
    return {
        post: params.parent
    }
  }
}
</script>