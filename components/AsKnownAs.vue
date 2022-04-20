<script setup lang="ts">
const route = useRoute()
const user = useUserStore()

watchEffect(() => {
  user.setNewName(route.params.id as string)
})
</script>

<template v-if="user.otherNames.length">
  <div>
    <p text-sm my-4>
      <span op-50>Also as known as:</span>
      <ul>
        <li v-for="otherName in user.otherNames" :key="otherName">
          <router-link :to="`/hi/${otherName}`" replace>
            <span class="aka-li">
              {{ otherName }}
            </span>
          </router-link>
        </li>
      </ul>
    </p>
  </div>
</template>

<style>
.aka-li {
  color: black;
}

.dark .aka-li {
  color: white;
}
</style>
