<script setup lang="ts">
useHead({ title: 'Cryotainer LNG - Nuestros Servicios' });

const services = [
  {
    title: 'Estaciones fijas',
    description: 'Este es el espacio para la descipción',
    image:
      'https://images.pexels.com/photos/785529/pexels-photo-785529.jpeg?auto=compress&cs=tinysrgb&w=1000&dpr=1',
  },
  {
    title: 'Sistemas de ingeniería',
    description: 'Este es el espacio para la descipción',
    image:
      'https://images.pexels.com/photos/785529/pexels-photo-785529.jpeg?auto=compress&cs=tinysrgb&w=1000&dpr=1',
  },
  {
    title: 'Estaciones móviles',
    description: 'Este es el espacio para la descipción',
    image:
      'https://images.pexels.com/photos/785529/pexels-photo-785529.jpeg?auto=compress&cs=tinysrgb&w=1000&dpr=1',
  },
  {
    title: 'Terminales en puerto',
    description: 'Este es el espacio para la descipción',
    image:
      'https://images.pexels.com/photos/785529/pexels-photo-785529.jpeg?auto=compress&cs=tinysrgb&w=1000&dpr=1',
  },
];
</script>

<template>
  <main>
    <section aria-label="Portada" class="flex h-[90vh] w-full items-center justify-center">
      <div class="w-full max-w-3xl text-center text-zinc-700">
        <h1 class="font-headline text-6xl font-bold uppercase">
          Soluciones diseñadas para la industria mexicana
        </h1>

        <span class="mx-auto mt-8 block max-w-xs text-sm"
          >Estamos para servirte en tus necesidades. Llevamos el Gas Natural a donde lo necesites.</span
        >
      </div>
    </section>

    <section aria-label="Lista de servicios" class="mb-8">
      <ul class="grid w-full grid-cols-2 gap-8 px-8">
        <li
          v-for="service in services"
          :key="`s-${service.title}`"
          :style="{ backgroundImage: `url(${service.image})` }"
          class="relative z-0 flex min-h-[50vh] flex-col justify-center overflow-hidden rounded-xl p-8 text-white"
        >
          <div
            aria-hidden="true"
            class="pointer-events-none absolute inset-0 -z-10 bg-zinc-900 opacity-60"
          ></div>

          <h2 class="mb-4 font-headline text-4xl font-bold uppercase">{{ service.title }}</h2>
          <div v-html="service.description"></div>
        </li>
      </ul>
    </section>
  </main>
</template>

<route lang="yaml">
name: services
meta:
  header:
    color: dark
</route>
