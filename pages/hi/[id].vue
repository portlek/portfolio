<script setup lang="ts">
const route = useRoute()
const name = route.params.id

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div>
    <div
      i-twemoji:waving-hand
      text-4xl
      inline-block
      animate-shake-x
      animate-duration-5000
    />
    <h3 text-2xl font-500>
      Hi,
    </h3>
    <div text-xl>
      {{ name }}!
    </div>
    <AsKnownAs />
    <Counter />
    <HomeButton />
  </div>
</template>
