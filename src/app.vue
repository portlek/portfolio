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

<style>
html,
body,
#app {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background-color: #222;
  color: white;
}
</style>
