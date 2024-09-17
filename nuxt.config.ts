// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@hypernym/nuxt-anime'],
  anime: {
    provide: true,
    composables: true
  }
})
