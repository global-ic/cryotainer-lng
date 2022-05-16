<script setup lang="ts">
const route = useRoute();

const useDarkMode = computed(() => !!route.meta?.headerMode && route.meta.headerMode === 'dark');
</script>

<template>
  <header class="fixed inset-x-0 top-0 flex items-center justify-between py-4 px-8">
    <RouterLink
      :to="{ name: 'home' }"
      :class="['font-headline text-2xl font-bold uppercase', useDarkMode ? 'text-zinc-800' : 'text-white']"
      >Cryotainer LNG</RouterLink
    >

    <nav class="flex space-x-10">
      <RouterLink
        :to="{ name: 'home' }"
        active-class="underline"
        :class="['nav-link', useDarkMode ? 'text-zinc-800' : 'text-white']"
        >Inicio</RouterLink
      >
      <RouterLink
        :to="{ name: 'about' }"
        active-class="underline"
        :class="['nav-link', useDarkMode ? 'text-zinc-800' : 'text-white']"
        >Nosotros</RouterLink
      >
      <RouterLink
        :to="{ name: 'gnl' }"
        active-class="underline"
        :class="['nav-link', useDarkMode ? 'text-zinc-800' : 'text-white']"
        >GNL</RouterLink
      >
      <RouterLink
        :to="{ name: 'services' }"
        active-class="underline"
        :class="['nav-link', useDarkMode ? 'text-zinc-800' : 'text-white']"
        >Servicios</RouterLink
      >
      <RouterLink
        :to="{ name: 'contact' }"
        active-class="underline"
        :class="['nav-link', useDarkMode ? 'text-zinc-800' : 'text-white']"
        >Contacto</RouterLink
      >
    </nav>
  </header>
</template>

<style scoped>
.nav-link {
  @apply font-light uppercase;
}
</style>
