<template>
  <div
    class="container mx-auto flex bg-black bg-center bg-contain bg-no-repeat min-h-screen p-8"
  >
    <div class="flex-1 flex items-center justify-center">
      <!-- change the wrapping container width -->
      <div
        class="flex-1 max-w-2xl mx-auto border-2 border-white my-auto bg-gray-50 bg-opacity-50 relative"
      >
        <div class="absolute top-0 left-0 right-0">
          <img
            class="mx-auto w-24 h-24 md:w-36 md:h-36 rounded-full -mb-7 border-2 border-white transform -translate-y-2/4"
            src="~/assets/face.jpg?resize&size=150"
          />
        </div>

        <h1 class="text-4xl text-center mb-4 mt-12 md:mt-20">Ben Hutton</h1>

        <!-- change the buttons containers width -->
        <div class="max-w-md mx-auto">
          <a
            href="https://twitter.com/relequestual"
            target="_blank"
            rel="noopener"
            class="text-twitter-blue btn block"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" />
            Twitter
          </a>
          <a
            href="https://json-schema.org"
            target="_blank"
            rel="noopener"
            class="btn block"
          >
            { JSON Schema }
          </a>
          <a
            href="https://jsonschema.dev"
            target="_blank"
            rel="noopener"
            class="btn block text-green-600"
          >
            {<font-awesome-icon :icon="['fa', 'check-double']" />} JSON Schema
            Dev
          </a>
          <a
            href="https://jsonschema.dev"
            target="_blank"
            rel="noopener"
            class="btn block"
          >
            JSON Schema Book
          </a>
          <a
            href="https://www.buymeacoffee.com/relequestual"
            target="_blank"
            rel="noopener"
            class="text-yellow-500 btn block"
          >
            <font-awesome-icon :icon="['fa', 'coffee']" />
            Buy me a coffee
          </a>
          <a
            href="https://github.com/relequestual"
            target="_blank"
            rel="noopener"
            class="btn block"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/benhuttonuk/"
            target="_blank"
            rel="noopener"
            class="btn block text-blue-700"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
            LinkedIn
          </a>
          <a
            href="https://speakerdeck.com/relequestual"
            target="_blank"
            rel="noopener"
            class="btn block text-green-700"
          >
            <font-awesome-icon :icon="['fab', 'speaker-deck']" />
            Speaker Deck
          </a>
          <a
            href="https://opencollective.com/json-schema"
            target="_blank"
            rel="noopener"
            class="text-blue-500 btn block"
          >
            Open Collective
          </a>
        </div>

        <div class="text-xs text-center mb-4">
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
  </div>
</template>

<script>
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faSpeakerDeck,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faTwitter,
  faGithub,
  faLinkedin,
  faSpeakerDeck,
  faCoffee,
  faCheckDouble
);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

export default {
  head: {
    bodyAttrs: {
      class: 'bg-black',
    },
  },
};
</script>

<style src="@fortawesome/fontawesome-svg-core/styles.css"></style>
<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.container {
  background-image: url('~/assets/greg-rakozy-oMpAz-DN-9I-unsplash.jpg?resize&size=1920');
}

.btn {
  @apply p-2 mx-5 my-3 border-black font-extrabold text-center border bg-white hover:scale-110 duration-300 ease-in-out transform;
}
</style>
