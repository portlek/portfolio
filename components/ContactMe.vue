<script setup>
import Swal from 'sweetalert2'

const { data } = await useFetch('/api/data')
const info = ref(data)

function copy() {
  navigator.clipboard.writeText(info.value.discordIdentifier)
  Swal.fire(
    'Discord Copied',
    'Discord user \'portlek#5502\' copied',
    'success',
  )
}
</script>

<template>
  <div
    class="
    box-border
    h-45px
    text-12px
    p-[0_35px]
    shadow-none
    decoration-none
    bg-#ffc107
    uppercase
    text-#20202a
    tracking-1.5px
    font-600
    inline-flex
    webkit-box-pack-center
    justify-center
    border-none
    transition-all
    duration-0.4s
    delay-0s
    cursor-pointer
    webkit-box-direction-normal"
    @click="copy"
  >
    <span
      class="
      box-border
      align-self-center
      transition-all
      duration-0.2s
      delay-0s
      text-12px
      text-#20202a
      tracking-1.5px
      font-600
      cursor-pointer"
    >
      Contact Me
    </span>
  </div>
</template>
