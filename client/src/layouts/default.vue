<script setup lang="ts">
import { NavigationItem } from '~/types';

const nav = computed<NavigationItem[]>(() => [
  { name: 'Inicio', route: { name: 'home' } },
  { name: 'Nosotros', route: { name: 'about' } },
  { name: 'GNL', route: { name: 'gnl' } },
  { name: 'Servicios', route: { name: 'services' } },
  { name: 'Contacto', route: { name: 'contact' } },
]);
</script>

<template>
  <div>
    <TheHeader :navigation="nav" />
    <RouterView />
    <TheFooter />
  </div>
</template>
