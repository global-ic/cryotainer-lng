<script setup lang="ts">
useHead({ title: 'Página no encontrada' });

const header = useHeaderVariant();
header.value = 'light';
</script>

<template>
  <div
    style="background-image: url(/img/cryotainer-hero.jpg)"
    class="flex h-screen w-full flex-col items-center justify-center"
  >
    <span class="text-sm font-semibold uppercase tracking-wide text-zinc-200">Error 404</span>
    <h1 class="mt-2 font-headline text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
      Página no encontrada
    </h1>
    <span class="mt-2 text-lg font-medium text-zinc-200"
      >Parece que la página que visitaste ya no existe.</span
    >

    <NuxtLink class="hero-link btn btn-primary mt-8" to="/">Volver al inicio</NuxtLink>
  </div>
</template>
