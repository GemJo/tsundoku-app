<template>
  <component :is="layoutToShow">
    <RouterView />
  </component>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { type Component, computed } from 'vue';
import AnonLayout from '@/Infrastructure/Component/Misc/Layout/AnonLayout.vue';

const layouts: {[key: string]: Component} = {
  anon: AnonLayout,
};

const layoutToShow = computed<Component>(() => {
  console.log(useRoute().meta.layout);
  return layouts[useRoute().meta.layout as string];
})
</script>