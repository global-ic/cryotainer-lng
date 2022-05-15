import { setupLayouts } from 'virtual:generated-layouts';
import { ViteSSG } from 'vite-ssg';
import '~/assets/css/tailwind.css'; // Tailwind CSS Styles
import generatedRoutes from '~pages';
import App from './App.vue';

const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(App, { routes, base: import.meta.env.BASE_URL }, (ctx) => {
  // install all modules under `modules/`
  Object.values(import.meta.globEager('./modules/*.ts')).forEach((i) => i.install?.(ctx));
});
