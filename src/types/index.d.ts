import { RouteLocationRaw } from 'vue-router';

export type NavigationItem = {
  name: string;
  icon?: string;
  href?: string;
  isVisible?: boolean;
  route?: RouteLocationRaw;
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
