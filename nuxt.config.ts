// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          caveat: ["Caveat"]
        }
      }
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@hypernym/nuxt-anime', '@vueuse/motion/nuxt'],
  anime: {
    provide: true,
    composables: true
  }
})
