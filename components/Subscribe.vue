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
        />
        <button
          type="button"
          class="w-2/6 text-darkblue bg-green-300 rounded-r p-2 focus:outline-none hover:bg-green-400 transition ease-in duration-100 font-medium"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>