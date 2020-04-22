<template>
  <div class="flex-initial uppercase my-5 ml-5">pikax</div>
</template>

<script>
import { useOnScroll, isClient } from 'vue-composable';
import { computed, ref, watch, onMounted } from '@vue/composition-api';
export default {
  name: 'Header',

  // setup() {
  //   const height = 40;
  //   const { scrollTop } = useOnScroll(isClient && window);
  //   const showStatic = ref(false);

  //   // NOTE: Hacky because showStatic as computed wouldn't update if refreshed
  //   onMounted(() => watch(scrollTop, s => (showStatic.value = s >= height)));

  //   return { showStatic, height };
  // }
};
</script>
