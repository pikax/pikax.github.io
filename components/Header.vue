<template>
  <div :style="{ height: `${height}px` }">
    <div
      :class="[
        'flex flex-grow flex-row bg-gray-700',
        showStatic && 'fixed w-full',
        !showStatic && 'h-full'
      ]"
      :style="{ height: `${height}px` }"
    >
      <div class="flex-initial">pikax</div>

      <ul class="flex flex-grow flex-row justify-center">
        <li>test</li>
        <li>add</li>
        <li>ddd</li>
      </ul>

      <div class="flex-initial">
        contact
      </div>
    </div>
  </div>
</template>

<script>
import { useOnScroll, isClient } from 'vue-composable';
import { computed, ref, watch, onMounted } from '@vue/composition-api';
export default {
  name: 'Header',

  setup() {
    const height = 40;
    const { scrollTop } = useOnScroll(isClient && window);
    const showStatic = ref(false);

    // NOTE: Hacky because showStatic as computed wouldn't update if refreshed
    onMounted(() => watch(scrollTop, s => (showStatic.value = s >= height)));

    return { showStatic, height };
  }
};
</script>
