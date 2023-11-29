import 'nuxt/app';

declare module 'nuxt/app' {
  export interface RuntimeNuxtHooks {
    'page:reveal': () => void;
  }
}
