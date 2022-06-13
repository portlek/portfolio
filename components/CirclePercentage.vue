<script setup lang="ts">
const props = defineProps<{
  lang: String
}>()
</script>

<template>
  <div
    class="
    relative
    text-center
    text-#8c8c83
    w-75px
    h-80px"
  >
    <div
      class="
      absolute
      w-100%
      h-50px
      mb-15px
      text-#cacace
      text-center
      top-0"
    />
    <h6
      class="
      absolute
      h-15px
      text-#ffffff
      text-center
      w-100%
      text-13px
      font-400
      bottom-0
      right-0
      left-0"
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
