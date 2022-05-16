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
</script>

<template>
  <div>
    <TheHeader :navigation="nav" @open-mobile-menu="mobileMenuOpen = true" />

    <TheSlideover v-if="showMobileMenu" :is-open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <TheMobileNavigation class="flex-1" :navigation="nav" @close="mobileMenuOpen = false" />
    </TheSlideover>

    <RouterView />
    <TheFooter />
  </div>
</template>
