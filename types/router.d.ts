import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    header?: {
      color?: 'dark' | 'light';
    };
  }
}
