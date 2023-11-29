export default defineNuxtConfig({
  modules: ['@cgvweb/ui', '@vueuse/nuxt'],
  devtools: { enabled: true },

  app: {
    head: {
      titleTemplate: '%s - Cryotainer LNG',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    },
  },

  tailwindcss: { viewer: false },

  build: { transpile: ['gsap'] },

  ui: { icons: ['ph'] },

  typescript: { strict: true },
});
