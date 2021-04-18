<template>
  <div
    class="container bg-black bg-center bg-contain bg-no-repeat mx-auto grid min-h-screen justify-center"
  >
    <div class="my-auto">
      <div class="border-2 border-white my-auto bg-gray-50 bg-opacity-50">
        <img
          class="mx-auto rounded-full -mt-28 mb-4 border-2 border-white"
          src="~/assets/face.jpg?resize&size=150"
        />
        <h1 class="text-4xl text-center mb-4">Ben Hutton</h1>
        <div class="">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="button--green"
          >
            Documentation
          </a>
          <!-- <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a> -->
        </div>
      </div>
      <div>
        Photo by
        <a
          href="https://unsplash.com/@grakozy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Greg Rakozy</a
        >
        on
        <a
          href="https://unsplash.com/collections/9415895/for-json-schema/717d1c58e33fd8f0119ed72f768a584a?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Unsplash</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'bg-black',
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.container {
  background-image: url('~/assets/greg-rakozy-oMpAz-DN-9I-unsplash.jpg?resize&size=1920');
}
</style>
