import { defineNuxtConfig } from 'nuxt'
import {} from '@nuxtjs/tailwindcss'

export default defineNuxtConfig({
  components: true,
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@unocss/nuxt',
  ],
  experimental: {
    reactivityTransform: true,
  },
  vueuse: {
    ssrHandlers: true,
  },
  colorMode: {
    classSuffix: '',
  },
  tailwindcss: {
    jit: true,
    cssPath: '~/styles/tailwind.css',
    viewer: false,
  },
  unocss: {
    icons: {
      scale: 1.2,
    },
  },
  css: [
    '~/styles/main.css',
  ],
})
