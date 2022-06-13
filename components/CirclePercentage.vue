<script setup lang="ts">
const props = defineProps<{
  lang: String
}>()
</script>

<template>
  <div
    relative
    text-center
    w-75px
    h-80px
    class="
    text-#8c8c83"
  >
    <div
      absolute
      h-50px
      mb-15px
      text-center
      top-0
      class="
      w-100%
      text-#cacace"
    />
    <h6
      absolute
      h-15px
      text-center
      text-13px
      font-400
      bottom-0
      right-0
      left-0
      class="
      w-100%
      text-#ffffff"
    >
      {{ lang }}
    </h6>
  </div>
</template>

<style>
.transform-half {
  transform: translate(-50%, -50%);
}
</style>
