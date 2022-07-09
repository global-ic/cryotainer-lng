import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, __, savedPos) {
    if (savedPos) return savedPos;
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 120 };
    return { behavior: 'smooth', top: 0 };
  },
};
