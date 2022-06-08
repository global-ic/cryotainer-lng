import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { setupLayouts } from 'virtual:generated-layouts';
import { ViteSSG } from 'vite-ssg';
import '~/assets/css/tailwind.css'; // Tailwind CSS Styles
import generatedRoutes from '~pages';
import App from './App.vue';

const routes = setupLayouts(generatedRoutes);
gsap.registerPlugin(ScrollTrigger);

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
    scrollBehavior(to, __, savedPos) {
      if (savedPos) return savedPos;
      if (to.hash) return { el: to.hash, behavior: 'smooth', top: 120 };
      return { behavior: 'smooth', top: 0 };
    },
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach((i) => i.install?.(ctx));
  }
);
