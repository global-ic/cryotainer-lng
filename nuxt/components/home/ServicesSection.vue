<script setup lang="ts"></script>

<template>
  <section aria-label="Servicios" class="flex h-screen items-center">
    <div class="flex w-full flex-col items-center gap-8 px-4 lg:flex-row lg:px-8">
      <div class="max-w-xl">
        <h3 class="font-headline text-3xl font-bold uppercase text-zinc-800 md:text-4xl">
          Nuestros Servicios
        </h3>
        <p class="mt-2 font-light text-zinc-600 lg:text-xl">
          Desarrollamos todos nuestros proyectos cuidando cada detalle del mismo para entregar servicios de
          alta calidad que satisfacen las necesidades de nuestros clientes.
        </p>
        <NuxtLink class="btn btn-outlined mt-6" :to="{ name: 'servicios' }">Conoce más</NuxtLink>
      </div>

      <div
        class="flex h-[60vh] w-full items-end justify-center overflow-hidden rounded-xl bg-cover bg-center"
        style="background-image: url(/img/alpha-cs-proyecto-fast-track-destacada.jpg)"
      >
        <div class="safe-zone-bg w-full px-6 pb-6 text-center">
          <span class="font-headline text-2xl font-bold uppercase text-white md:text-4xl lg:text-5xl"
            >Instalación</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
