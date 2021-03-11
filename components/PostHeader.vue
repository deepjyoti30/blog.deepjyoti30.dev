<template>
  <div class="post--header__container">
    <h1
      class="md:text-4xl text-3xl dm-sans font-semibold text-darkblue dark:text-darkblue-300"
    >
      {{ post.title }}
    </h1>
    <div
      class="more--details md:flex items-center text-gray-500 dark:text-gray-400 md:mt-4 md:my-0 mt-8 mb-2 font-medium"
    >
      <div class="author--details inline-flex items-center">
        <span class="author--name text-darkblue dark:text-darkblue-300">{{
          post.author.name
        }}</span>
        <span class="author--username ml-3">@{{ post.author.username }}</span>
      </div>
      <div
        class="separator md:h-5 md:w-0.5 h-0.5 w-10 bg-skyblue md:mx-2 my-2"
      ></div>
      <div class="time--details inline-flex items-center">
        <span class="date mr-1.5">{{ getDate }}</span>
        <span>&bullet;</span>
        <span class="time ml-1.5">{{ getTime }}</span>
      </div>
    </div>
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
    getTime() {
      return new Date(this.post.created_at).toLocaleString('en-US', {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
      })
    },
    getDate() {
      return new Date(this.post.created_at).toLocaleString('en-US', {
        dateStyle: 'medium',
      })
    },
  },
}
</script>
