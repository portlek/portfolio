import { defineNuxtConfig } from 'nuxt'
import {} from '@unocss/nuxt'

export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
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
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    icons: {
      scale: 1.2,
    },
    autoImport: true,
    wind: true,
    shortcuts: [
      [
      ],
    ],
  },
})
