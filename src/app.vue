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
const app = useNuxtApp();
const transition = useTransitionStore();
const lockScroll = ref(true);

const courtainRef = ref<HTMLElement | null>(null);

async function createLandingReveal() {
  lockScroll.value = true;
  transition.mode = 'landing';
  transition.createTimeline(false);

  // Wait for the render to happen
  if (!courtainRef.value) await nextTick();

  transition.timeline!.to(courtainRef.value, {
    x: '100%',
    delay: 0.2,
    ease: 'expo.out',
    duration: 1,
    onComplete() {
      lockScroll.value = false;
    },
  });
}

/**
 * Play the website reveal animation
 */
app.hooks.hookOnce('page:finish', async () => {
  if (!process.client) return;
  await createLandingReveal();
  app.callHook('page:reveal');
});

/* PAGE TRANSITIONS */

async function onLeave(_: unknown, done: Function) {
  /**
   * We consider onLeave as completed ONLY once the "page:finish" hook
   * is called and the transition courtain was placed
   */

  await Promise.all([
    new Promise((resolve) => app.hooks.hookOnce('page:finish', () => resolve(true))),
    new Promise((resolve) => {
      transition.mode = 'transition';
      transition.createTimeline(false);

      // Move courtain into view and lock scroll
      transition.timeline!.to(courtainRef.value, {
        x: 0,
        ease: 'expo.out',
        duration: 0.6,
        onStart() {
          lockScroll.value = true;
        },
        onComplete() {
          transition.timeline?.pause();
          resolve(true);
        },
      });

      // Get courtain out of view and unlock scroll
      transition.timeline!.to(courtainRef.value, {
        x: '100%',
        ease: 'expo.out',
        duration: 1,
        onComplete() {
          lockScroll.value = false;
        },
      });
    }),
  ]);

  done();
}

function onEnter(_: unknown, done: Function) {
  app.callHook('page:reveal');
  transition.timeline?.play();
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

    <DevOnly>
      <ClientOnly>
        <UiBreakpointViewer />
      </ClientOnly>
    </DevOnly>

    <Teleport to="body">
      <div
        ref="courtainRef"
        style="top: 0; right: 0"
        class="fixed z-30 flex h-screen w-screen items-center justify-center bg-zinc-800"
      >
        <span class="font-headline text-2xl font-bold uppercase text-white sm:text-4xl">Cryotainer LNG</span>
      </div>
    </Teleport>

    <TheHeader :navigation="nav" @open-mobile-menu="mobileMenuOpen = true" />

    <UiSlideover v-if="showMobileMenu" :is-open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <TheMobileNavigation class="flex-1" :navigation="nav" @close="mobileMenuOpen = false" />
    </UiSlideover>

    <NuxtPage :transition="{ css: false, mode: 'out-in', onLeave, onEnter }" />

    <TheFooter :navigation="nav" />
  </div>
</template>
