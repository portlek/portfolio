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
@import './styles/tailwind.css';

*, ::after, ::before {
  box-sizing: border-box;
}

html {
  line-height: 1.7;
  display: block;
}

body {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.25px;
  background: #191923;
  color: white;
}

.dark body {
  background: white;
  color: #191923;
}

@layer utilities {
  .custom-shadow {
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%)
  }

  .webkit-box-pack-start {
    -webkit-box-pack: start
  }

  .webkit-box-align-center {
    -webkit-box-align: center
  }

  .webkit-font-antialiased {
    -webkit-font-smoothing: antialiased
  }

  .pointer-events-all {
    pointer-events: all
  }

  .topbottom {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 15px;
    background: #191923;
    z-index: 9999;
  }
}
</style>
