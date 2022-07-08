import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],

  app: {
    head: {
      titleTemplate: '%s - Cryotainer LNG',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap',
        },
      ],
    },
  },

  autoImports: { dirs: ['composables', 'stores', 'components'] },
});
