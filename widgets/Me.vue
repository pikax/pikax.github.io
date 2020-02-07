<template>
  <div
    class="me flex flex-auto bg-red-500 justify-center items-center relative justify-center"
  >
    <div
      class="myself absolute rounded-tr-full rounded-br-full rounded-tl-full overflow-hidden left-0 bottom-0"
    >
      <img :src="profile_img" :alt="fullname" :title="fullname" />
    </div>
    <div class=" container relative flex justify-center items-center">
      <div class="absolute text-center">
        <p class="text-6xl">{{ greeting }} {{ name }}</p>
        <p class="text-xl">{{ position }}</p>
      </div>
      <ul class="absolute right-0 text-2xl">
        <li v-for="{ name, url } in social" :key="name">
          <a
            class="social-icon"
            :href="url"
            target="_blank"
            :alt="name"
            rel="noopener"
            :title="name"
          >
            <i :class="`fa fa-${name}`"></i>
          </a>
        </li>
      </ul>
    </div>

    <div class="absolute profile-picture"></div>

    <div v-if="quote" class="quote absolute bottom-0 pl-56 text-center text-l">
      <p>"{{ quote.text }}"</p>
      <p>{{ quote.author }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { useInfo, useQuote } from '@/composables';
import { useBreakpoint } from 'vue-composable';
export default {
  setup() {
    const { quote } = useQuote();

    return { ...useInfo(), quote };
  }
};
</script>

<style>
.myself {
  width: 20rem;
  height: 20rem;
}

.quote {
  font-family: cursive;
}

.social-icon {
  width: 40px;
  height: 40px;
  display: inline-block;
  line-height: 40px;
  text-align: center;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 15px;
  position: relative;
  z-index: 2;
  overflow: hidden;
}
.social-icon:hover::before {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  content: '';
  z-index: -1;

  background: linear-gradient(to bottom, #615cfd 0%, #d465ef 100%);
}
</style>
