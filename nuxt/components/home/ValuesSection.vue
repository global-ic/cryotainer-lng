<script setup lang="ts">
import BookmarkIcon from '~icons/ph/bookmark';
import HourglassIcon from '~icons/ph/hourglass-medium';
import StarIcon from '~icons/ph/star';
import UsersIcon from '~icons/ph/users';

const values = [
  {
    icon: StarIcon,
    title: 'Estándares de calidad',
    desc: 'Diseñamos instalaciones de seguridad que cumplen con las regulaciones gubernamentales y los códigos NFPA.',
  },
  {
    icon: HourglassIcon,
    title: 'Tiempos de entrega',
    desc: 'Desarrollamos la ingeniería y construcción de nuestros proyectos en períodos de tiempo cortos.',
  },
  {
    icon: UsersIcon,
    title: 'Presencia y asesorías',
    desc: 'No todos nuestros clientes son expertos, en algunos casos podemos sugerir opciones y ayudar a desarrollar sus proyectos.',
  },
  {
    icon: BookmarkIcon,
    title: 'Todo en un solo lugar',
    desc: 'Proveemos todos los equipos y accesorios necesarios como tanques de  almacenamiento, vaporizadores, válvulas, bombas.',
  },
];
</script>

<template>
  <section class="overflow-x-hidden py-12 md:py-24">
    <UiContainer>
      <div class="max-w-3xl">
        <span class="font-semibold text-primary-700">Valores y compromiso</span>
        <h2 class="mt-3 font-headline text-3xl font-semibold uppercase text-zinc-900 md:text-4xl">
          Buscamos eficiencia y satisfacción en todo momento
        </h2>
        <p class="mt-5 text-lg text-zinc-500 md:text-xl">
          En Cryotianer LNG tomamos la eficiencia de nuestros servicios y la satisfacción de nuestros clientes
          seriamente y trabajamos por cumplir con todos sus requerimientos y especificaciones.
        </p>
      </div>

      <ul class="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <li v-for="value in values" class="rounded-xl bg-zinc-100 p-6">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500">
            <component :is="value.icon" class="h-6 w-6 text-white" />
          </div>

          <div class="mt-24">
            <h4 class="font-headline text-lg font-semibold text-zinc-900 md:text-xl">
              {{ value.title }}
            </h4>
            <p class="mt-2 text-zinc-500">{{ value.desc }}</p>
          </div>
        </li>
      </ul>
    </UiContainer>
  </section>
</template>
