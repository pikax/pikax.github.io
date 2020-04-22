<template>
  <div class="flex flex-col h-screen bg-gray-800 text-gray-200 overflow-auto">
    <!-- <div class="max-h-screen overflow-auto"> -->
    <!--[if lte IE 9]>
      <p class="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please
        <a href="https://browsehappy.com/">upgrade your browser</a> to improve
        your experience and security.
      </p>
    <![endif]-->


    <Header class="flex-none" />
    <nuxt class="px-2 flex-auto" />
    <Footer class="flex-1" />
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import info from '~/assets/info.json';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import { setInfo } from '@/composables';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'default-layout',

  components: {
    Header,
    Footer,
  },

  setup() {
    setInfo(info);
  },
});
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  @screen md {
    font-size: 16px;
  }

  @screen lg {
    font-size: 16px;
  }

  @media screen (min-width: 1300px) {
    font-size: 18px;
  }
  /* 
  @screen xl {
    font-size: 18px;
  } */

  @media screen (min-width: 1440px) {
    font-size: 22px;
  }

  @media screen (min-width: 1800px) {
    font-size: 26px;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* 
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
</style>
