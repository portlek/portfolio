<script setup lang="ts">
useHead({
  title: 'Hasan Demirtaş - portlek',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import "./styles/_tailwind.css";
@import "@left4code/tw-starter/dist/css/_btn.css";

html.dark {
  background-color: #222;
  color: white;
}
</style>
