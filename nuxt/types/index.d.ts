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

export interface HomeIndustry {
  title: string;
  image: string;
  desc: string;
}

export interface WhoAreWeFeature {
  icon: any;
  title: string;
  description: string;
}

declare module '#app' {
  interface PageMeta {
    pageType?: string;
  }
}

export {};
