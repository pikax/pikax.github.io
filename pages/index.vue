<template>
  <div
    class="flex h-full py-3 md:py-5 border-t-2 border-b-8 border-gray-600 border-double align-middle flex-col justify-center"
  >
    <!-- <Me class="h-128" />
    <Service class="h-128" />-->
    <!-- 
    <div>
      <logo />
      <h1 class="title">
        pikax.github.io
      </h1>
      <h2 class="subtitle">
        Pikax webpage
      </h2>
      <h2>
        <p v-if="loading">
          loading
        </p>
        <p v-else>
          Quyote
          {{ quote }}
        </p>
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>-->

    <p class="text-lg">My name is Carlos Rodrigues,</p>
    <p class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">I make product owners vision come true</p>
    <p class="mb-3">
      After been doing software development for more than 10 years, I resolved to provide my services through my consultancy
      <a
        href="https://hypermob.co.uk"
        class="text-orange-500 underline"
        target="_bank"
      >
        Hypermob
        <font-awesome-icon :icon="['fas', 'external-link-alt']" />
      </a>
    </p>

    <p>I feel in love with Vue, lately been helping VueJS ecosystem on Github.</p>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Me from '@/widgets/Me.vue';
import Service from '@/widgets/Service.vue';
import { useQuote } from '@/composables';
import { useFormat } from 'vue-composable';

export default {
  components: {
    Logo,
    Me,
    Service
  },

  setup() {

    return useQuote();
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.h-128 {
  height: 32rem;
}

/* 
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
