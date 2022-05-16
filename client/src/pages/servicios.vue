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
      'https://images.pexels.com/photos/3634730/pexels-photo-3634730.jpeg?auto=compress&cs=tinysrgb&w=1000&dpr=1',
  },
  {
    title: 'Estaciones móviles',
    description: 'Este es el espacio para la descipción',
    image:
      'https://images.pexels.com/photos/799096/pexels-photo-799096.jpeg?auto=compress&cs=tinysrgb&w=1000&dpr=1',
  },
  {
    title: 'Terminales en puerto',
    description: 'Este es el espacio para la descipción',
    image:
      'https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=1000&dpr=1',
  },
];
</script>

<template>
  <main>
    <section aria-label="Portada" class="flex min-h-[90vh] w-full items-center justify-center">
      <div class="w-full max-w-3xl px-4 py-24 text-center text-zinc-700 lg:px-8">
        <h1 class="font-headline text-3xl font-bold uppercase sm:text-5xl lg:text-6xl">
          Soluciones diseñadas para la industria mexicana
        </h1>

        <span class="mx-auto mt-4 block max-w-xs text-sm sm:mt-6 lg:mt-8"
          >Estamos para servirte en tus necesidades. Llevamos el Gas Natural a donde lo necesites.</span
        >
      </div>
    </section>

    <section aria-label="Lista de servicios" class="mb-8">
      <ul class="grid w-full gap-4 px-4 md:grid-cols-2 lg:gap-8 lg:px-8">
        <li
          v-for="service in services"
          :key="`s-${service.title}`"
          :style="{ backgroundImage: `url(${service.image})` }"
          class="relative z-0 flex min-h-[50vh] flex-col justify-center overflow-hidden rounded-xl bg-cover bg-center p-4 text-white lg:p-8"
        >
          <div
            aria-hidden="true"
            class="pointer-events-none absolute inset-0 -z-10 bg-zinc-900 opacity-60"
          ></div>

          <h2 class="mb-4 font-headline text-2xl font-bold uppercase md:text-3xl lg:text-4xl">
            {{ service.title }}
          </h2>
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
