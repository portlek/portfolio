<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  var mode = color.preference === 'dark' ? 'light' : 'dark'
  color.value = mode
  color.preference = mode
}
</script>

<template>
  <button class="!outline-none" @click="toggleDark">
    <div class="dark:i-carbon-moon i-carbon-sun" />
  </button>
</template>
