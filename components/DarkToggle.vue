<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  var isDark = color.preference === 'dark'
  color.value = isDark ? 'light' : 'dark'
  color.preference = isDark ? 'light' : 'dark'
}
</script>

<template>
  <button class="!outline-none" @click="toggleDark">
    <div class="dark:i-carbon-moon i-carbon-sun" />
  </button>
</template>
