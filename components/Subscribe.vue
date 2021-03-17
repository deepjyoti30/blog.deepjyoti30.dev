<template>
  <div
    class="subscribe__container bg-gray-800 text-white rounded py-6 px-4 text-center"
  >
    <div class="text--content">
      <h3 class="md:text-3xl text-2xl dm-sans font-bold">
        For the love of coding
      </h3>
      <p class="description text-gray-400 mt-6 md:text-base text-sm">
        Subscribe to get the latest posts. I mostly write about Backend
        (Python/MongoDB/Postgres), Frontend (Vue/Tailwind/SCSS) and Linux.
      </p>
    </div>
    <div class="subscribe--box">
      <div class="subscribe flex items-center md:w-4/5 mr-auto ml-auto mt-8">
        <input
          name="email"
          class="flex-grow rounded-l p-2 focus:outline-none text-black"
          placeholder="awesomejohn@john.com"
          required
          spellcheck="false"
          v-model="emailEntered"
          @keyup.enter="subscribeUser"
        />
        <button
          type="button"
          title="Click to Subscribe"
          class="w-2/6 text-darkblue bg-green-300 rounded-r p-2 focus:outline-none hover:bg-green-400 transition ease-in duration-100 font-medium disabled:opacity-80"
          :disabled="!isVerified"
          @click="subscribeUser"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailEntered: '',
      forceDisable: false,
      subscribeEndpoint: 'https://apis.deepjyoti30.dev/blog/subscribe',
      ongoing: false,
      userSubscribed: false,
    }
  },
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
  methods: {
    subscribeUser: async function () {
      /**
       * Subscribe the user to the newsletter
       */
      this.forceDisable = true
      this.ongoing = true
      await fetch(this.subscribeEndpoint, {
        method: 'POST',
        body: JSON.stringify({
          email: this.emailEntered,
          subscribed_from: this.post ? this.post.post_id : 'index',
        }),
      })
      this.ongoing = false
      this.userSubscribed = true
    },
    validEmail: function () {
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.emailEntered
      )
    },
  },
  computed: {
    isVerified() {
      return this.validEmail() && !this.forceDisable
    },
    isOngoing() {
      return this.ongoing
    },
    isSuccess() {
      return this.userSubscribed
    },
  },
}
</script>