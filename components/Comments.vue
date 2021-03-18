<template>
  <div class="comments__container my-20">
    <h3 class="text-3xl dm-sans font-medium border-b-2 border-gray-700">
      Comments
    </h3>
    <div class="comments--content mt-4">
      <script
        src="https://utteranc.es/client.js"
        repo="deepjyoti30/blog-comments"
        issue-term="pathname"
        theme="preferred-color-scheme"
        crossorigin="anonymous"
        async
      ></script>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.utterances-frame {
  padding: 0;
}
</style>