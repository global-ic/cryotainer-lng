import { type ViteSSGContext } from 'vite-ssg';
import { FunctionalComponent } from 'vue';
import { RouteLocationRaw } from 'vue-router';

export type UserModule = (ctx: ViteSSGContext) => void;

export type NavigationItem = {
  name: string;
  route?: RouteLocationRaw;
  icon?: FunctionalComponent;
  isVisible?: boolean;
  href?: string;
};
