<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';
import { gsap, ScrollTrigger } from 'gsap/all';
import type { NavigationItem } from '~/types';

useHead({
  titleTemplate: formatPageTitle,
  link: [{ rel: 'icon', type: 'image/png', href: 'favicon.png' }],
});

useSeoMeta({
  ogType: 'website',
  ogUrl: 'https://cryotainerlng.com',

  title: 'Especialistas en Equipo Criogénico - Cryotainer LNG',
  ogTitle: 'Especialistas en Equipo Criogénico - Cryotainer LNG',

  description:
    'Somos proveedores de equipos y servicios de primer nivel en la industria de gasoductos virtuales. Con décadas de experiencia brindando soluciones innovadoras de gas natural y gases de aire.',
  ogDescription:
    'Somos proveedores de equipos y servicios de primer nivel en la industria de gasoductos virtuales. Con décadas de experiencia brindando soluciones innovadoras de gas natural y gases de aire.',
});

if (process.client) gsap.registerPlugin(ScrollTrigger);

const nav = computed<NavigationItem[]>(() => [
  { name: 'Inicio', route: '/' },
  { name: 'Nosotros', route: '/nosotros' },
  { name: 'GNL', route: '/gnl' },
  { name: 'Contacto', route: '/contacto' },
]);

const mobileMenuOpen = ref(false);
const breakpoints = useBreakpoints(breakpointsTailwind);
const showMobileMenu = breakpoints.smaller('lg');

/** ANIMATION */
let transitionTimeline: gsap.core.Timeline | null = null;
const animationMode = ref<'landing' | 'transition'>('landing');
const isAnimatingTransition = ref(false);
const lockScroll = ref(true);
const app = useNuxtApp();

function createLandingReveal() {
  lockScroll.value = true;
  animationMode.value = 'landing';
  isAnimatingTransition.value = true;

  transitionTimeline = gsap.timeline({
    paused: true,
    onComplete() {
      transitionTimeline?.kill();
      transitionTimeline = null;
      isAnimatingTransition.value = false;
    },
  });

  transitionTimeline.to('#courtain', {
    x: '100%',
    delay: 0.2,
    ease: 'expo.out',
    duration: 1,
    onComplete() {
      lockScroll.value = false;
    },
  });
}

onMounted(() => {
  if (process.server) return;
  createLandingReveal();
});

app.hook('page:finish', () => {
  if (process.client && transitionTimeline) transitionTimeline.play();
});

provide(transitionsKey, () => ({
  mode: animationMode,
  timeline: transitionTimeline,
  isAnimating: isAnimatingTransition,
}));

function startTransition(_: any, done: Function) {
  animationMode.value = 'transition';
  isAnimatingTransition.value = true;

  if (transitionTimeline) {
    transitionTimeline.kill();
    transitionTimeline = null;
  }

  transitionTimeline = gsap.timeline({
    onComplete() {
      transitionTimeline?.revert();
      transitionTimeline = null;
      isAnimatingTransition.value = false;
    },
  });

  // Move courtain into view and lock scroll
  transitionTimeline.to('#courtain', {
    x: 0,
    ease: 'expo.out',
    duration: 0.6,
    onStart() {
      lockScroll.value = true;
    },
    onComplete() {
      transitionTimeline?.pause();
      done();
    },
  });

  // Get courtain out of view and unlock scroll
  transitionTimeline.to('#courtain', {
    x: '100%',
    ease: 'expo.out',
    duration: 1,
    onComplete() {
      lockScroll.value = false;
    },
  });
}

function endTransition(_: any, done: Function) {
  transitionTimeline?.play();
  done();
}
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Html lang="es" />
    <Body
      :class="[
        lockScroll && 'h-screen w-screen overflow-hidden',
        'bg-zinc-50 antialiased selection:bg-primary-400/20 selection:text-primary-600',
      ]"
    />
    <NuxtLoadingIndicator color="#2563eb" />

    <Teleport to="body">
      <div
        id="courtain"
        style="top: 0; right: 0"
        class="fixed z-30 flex h-screen w-screen items-center justify-center bg-zinc-800"
      >
        <span class="font-headline text-2xl font-bold uppercase text-white sm:text-4xl">Cryotainer LNG</span>
      </div>
    </Teleport>

    <BaseHeader :navigation="nav" @open-mobile-menu="mobileMenuOpen = true" />

    <UiSlideover v-if="showMobileMenu" :is-open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <BaseMobileNavigation class="flex-1" :navigation="nav" @close="mobileMenuOpen = false" />
    </UiSlideover>

    <NuxtPage
      :transition="{
        css: false,
        mode: 'out-in',
        onLeave: startTransition,
        onEnter: endTransition,
      }"
    />

    <BaseFooter :navigation="nav" />
  </div>
</template>
