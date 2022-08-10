<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { NavigationItem } from '~/types';

gsap.registerPlugin(ScrollTrigger);

const nav = computed<NavigationItem[]>(() => [
  { name: 'Inicio', route: '/' },
  { name: 'Nosotros', route: { name: 'nosotros' } },
  { name: 'GNL', route: { name: 'gnl' } },
  { name: 'Contacto', route: { name: 'contacto' } },
]);

const mobileMenuOpen = ref(false);
const breakpoints = useBreakpoints(breakpointsTailwind);
const showMobileMenu = breakpoints.smaller('lg');

const transitionStyles = ref('translate-y-full  md:translate-y-0 md:translate-x-full');
function transitionBL() {
  transitionStyles.value = 'translate-y-0 md:translate-x-0';
}

function transitionAE() {
  transitionStyles.value = 'translate-y-full md:translate-y-0 md:translate-x-full';
}
</script>

<template>
  <div>
    <Body class="bg-zinc-50 antialiased" />

    <Teleport to="body">
      <div
        id="transition-bar"
        :class="[
          'fixed top-0 right-0 z-30 h-screen w-screen transform bg-zinc-800 transition-transform duration-300',
          transitionStyles,
        ]"
      ></div>
    </Teleport>

    <BaseHeader :navigation="nav" @open-mobile-menu="mobileMenuOpen = true" />

    <UiSlideover v-if="showMobileMenu" :is-open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <BaseMobileNavigation class="flex-1" :navigation="nav" @close="mobileMenuOpen = false" />
    </UiSlideover>

    <RouterView v-slot="{ Component }">
      <Transition mode="out-in" :duration="300" @before-leave="transitionBL" @after-enter="transitionAE">
        <component :is="Component" />
      </Transition>
    </RouterView>

    <BaseFooter :navigation="nav" />
  </div>
</template>
