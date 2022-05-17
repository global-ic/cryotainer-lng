<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';
import { NavigationItem } from '~/types';

const nav = computed<NavigationItem[]>(() => [
  { name: 'Inicio', route: { name: 'home' } },
  { name: 'Nosotros', route: { name: 'about' } },
  { name: 'GNL', route: { name: 'gnl' } },
  { name: 'Servicios', route: { name: 'services' } },
  { name: 'Contacto', route: { name: 'contact' } },
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
    <div
      id="transition-bar"
      :class="[
        'fixed top-0 right-0 z-30 h-screen w-screen transform bg-zinc-800 transition-transform duration-300',
        transitionStyles,
      ]"
    ></div>

    <TheHeader :navigation="nav" @open-mobile-menu="mobileMenuOpen = true" />

    <TheSlideover v-if="showMobileMenu" :is-open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <TheMobileNavigation class="flex-1" :navigation="nav" @close="mobileMenuOpen = false" />
    </TheSlideover>

    <RouterView v-slot="{ Component }">
      <Transition mode="out-in" :duration="300" @before-leave="transitionBL" @after-enter="transitionAE">
        <component :is="Component" />
      </Transition>
    </RouterView>

    <TheFooter />
  </div>
</template>
