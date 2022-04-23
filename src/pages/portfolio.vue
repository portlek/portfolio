<script setup lang="ts">
const test = ref([
  'Nuxt1',
  'Nuxt2',
  'Nuxt3',
])
</script>

<template>
  <div>
    <DarkToggle />
    <ul role="list" class="p-6 divide-y dark:divide-slate-200 divide-gray-400">
      <li v-for="person in test" :key="person" class="flex py-4 first:pt-0 last:pb-0">
        <img class="h-10 w-10 rounded-full" src="nuxt.png" alt="">
        <div class="ml-3 overflow-hidden">
          <p class="text-sm font-medium dark:text-slate-100 text-slate-900">
            {{ person }}
          </p>
          <p class="text-sm dark:text-slate-300 text-slate-500 truncate">
            {{ person }}@gmail.com
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
