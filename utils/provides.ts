import type { InjectionKey } from 'vue';
import type { gsap } from 'gsap';

export type TransitionEffect = () => {
  isAnimating: Ref<boolean>;
  mode: Ref<'landing' | 'transition'>;
  timeline: gsap.core.Timeline | null;
};

export const transitionsKey = Symbol() as InjectionKey<TransitionEffect>;
