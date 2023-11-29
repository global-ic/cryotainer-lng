<script setup lang="ts">
useHead({ title: 'Página no encontrada' });

const header = useHeaderVariant();
header.value = 'dark';
</script>

<template>
  <div class="flex w-full flex-1 flex-col items-center justify-center">
    <span class="text-sm font-semibold uppercase tracking-wide text-primary-600">Error 404</span>
    <h1 class="mt-2 font-headline text-4xl font-bold uppercase tracking-tight text-gray-950 sm:text-5xl">
      Página no encontrada
    </h1>
    <span class="mt-2 text-lg text-gray-600">Parece que la página que visitaste no existe o fue movida.</span>

    <UiButton class="hero-link mt-8" to="/" label="Volver al inicio" />
  </div>
</template>
