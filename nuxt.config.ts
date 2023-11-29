export default defineNuxtConfig({
  srcDir: 'src',

  modules: ['@cgvweb/ui', '@vueuse/nuxt'],
  devtools: { enabled: true },

  tailwindcss: { viewer: false },

  build: { transpile: ['gsap'] },

  ui: { icons: ['ph'] },

  typescript: { strict: true },
});
