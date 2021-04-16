<template>
  <div
    class="container bg-black bg-center bg-contain bg-no-repeat mx-auto grid min-h-screen justify-center"
  >
    <div class="border border-white my-auto">
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

/* .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
} */
</style>
