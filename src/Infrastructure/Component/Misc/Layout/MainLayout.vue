<template>
  <main-menu />
  <v-main class="main">
    <slot />
  </v-main>
  <main-footer/>
</template>
<script setup lang="ts">
import MainMenu from "@/Infrastructure/Component/Misc/Layout/Main/MainMenu.vue";
import MainFooter from "@/Infrastructure/Component/Misc/Layout/Main/MainFooter.vue";
</script>
