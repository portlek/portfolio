<script setup lang="ts">
const route = useRoute()
const user = useUserStore()

watchEffect(() => {
  user.setNewName(route.params.id as string)
})
</script>

<template v-if="user.otherNames.length">
  <p text-sm my-4>
    <span op-50>Also as known as:</span>
    <ul>
      <li v-for="otherName in user.otherNames" :key="otherName">
        <router-link :to="`/hi/${otherName}`" replace>
          {{ otherName }}
        </router-link>
      </li>
    </ul>
  </p>
</template>