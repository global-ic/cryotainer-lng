<script setup lang="ts"></script>

<template>
  <header class="fixed inset-x-0 top-0 flex items-center justify-between py-4 px-8">
    <NuxtLink :to="{ name: 'index' }" class="font-headline text-2xl font-bold uppercase text-white"
      >Cryotainer LNG</NuxtLink
    >

    <nav class="flex space-x-10">
      <NuxtLink :to="{ name: 'index' }" active-class="underline" class="nav-link">Inicio</NuxtLink>
      <NuxtLink :to="{ name: 'nosotros' }" active-class="underline" class="nav-link">Nosotros</NuxtLink>
      <NuxtLink :to="{ name: 'gnl' }" active-class="underline" class="nav-link">GNL</NuxtLink>
      <NuxtLink :to="{ name: 'servicios' }" active-class="underline" class="nav-link">Servicios</NuxtLink>
      <NuxtLink :to="{ name: 'contacto' }" active-class="underline" class="nav-link">Contacto</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.nav-link {
  @apply font-light uppercase text-white;
}
</style>
