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
@import 'bootstrap/scss/bootstrap.scss';
@import 'bootstrap-vue/src/index.scss';

.case {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  @extend .case
}

html.dark {
  background-color: #222;
  color: white;
  body,
  #app {
    background-color: #222;
    color: white;
  }
}
</style>
