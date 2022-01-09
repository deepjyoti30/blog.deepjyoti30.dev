<template>
  <div class="navbar--top__container bg-white dark:bg-darkhigh">
    <div
      class="
        navbar--top
        py-1
        text-sm text-gray-500
        flex
        justify-center
        border-b border-gray-100
        dark:border-gray-800
      "
    >
      <div class="text--container flex">
        <div
          class="
            new--indicator
            mr-1
            bg-green-100
            text-green-500
            rounded-lg
            px-2
            uppercase
            font-semibold
            dark:bg-green-700 dark:text-green-100
          "
        >
          New
        </div>
        <div class="text--content">
          We're now open source!
          <a
            href="https://github.com/deepjyoti30/blog.deepjyoti30.dev"
            class="ml-1 text-gray-800 underline text-blue-500"
            target="_blank"
            rel="noopener"
            >Check Code</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarTop',
}
</script>