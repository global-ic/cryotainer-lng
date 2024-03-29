export default defineNuxtConfig({
  srcDir: 'src',

  modules: ['@cgvweb/ui', '@vueuse/nuxt', '@pinia/nuxt'],
  devtools: { enabled: true },

  tailwindcss: { viewer: false },

  build: { transpile: ['gsap'] },
  components: [{ path: '~/components', pathPrefix: false }],

  ui: { icons: ['ph'] },

  typescript: { strict: true, shim: false },
});
