<template>
  <div></div>
</template>

<script>
export default {
  async asyncData({ query, redirect }) {
    /**
     * Redirect the user to the dev.to post
     */
    redirect(query.url)
  },
}
</script>
