<script setup lang="ts"></script>

<template>
  <section aria-label="Gas Natural Licuado" class="h-[70vh] p-4 md:h-screen lg:p-8">
    <div
      style="background-image: url(/img/cryotainer-gnl-ship.jpg)"
      class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-cover bg-center p-4 lg:p-8"
    >
      <div class="pointer-events-none absolute inset-0 z-0 bg-zinc-900 opacity-50"></div>

      <div class="z-10 w-full max-w-xl space-y-6 text-center md:space-y-8">
        <h2 class="font-headline text-2xl font-bold uppercase text-white md:text-4xl lg:text-5xl">
          Gas Natural Licuado (GNL)
        </h2>
        <p class="text-lg text-zinc-100">
          Le demanda de gas natural está creciendo constantemente, dando oportunidad a un cambio ecológico
          para las energías en México… El Gas Natural Licuado (GNL).
        </p>
        <NuxtLink class="btn btn-outlined-white" :to="{ name: 'gnl' }">Aprende más</NuxtLink>
      </div>
    </div>
  </section>
</template>
