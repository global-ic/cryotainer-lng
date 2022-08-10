<script setup lang="ts">
import type { WhoAreWeFeature } from '~/types';
import WrenchIcon from '~icons/ph/wrench';
import StackIcon from '~icons/ph/stack';
import SnowflakeIcon from '~icons/ph/snowflake';
import TruckIcon from '~icons/ph/truck';

const features: WhoAreWeFeature[] = [
  {
    icon: WrenchIcon,
    title: 'Mantenimiento de equipo',
    description: `<p>Proporcionamos mantenimiento de equipo criogénico.</p>

    <ul class="mt-2 list-inside list-disc">
      <li>Bombas externas y sumergibles</li>
      <li>Pipas</li>
      <li>Autotanques</li>
    </ul>`,
  },
  {
    icon: StackIcon,
    title: 'Diseño de estaciones',
    description: `<p>Contamos con el servicio de diseño de Estaciones de Regasificación para Gas Natural y gases del Aire</p>`,
  },
  {
    icon: SnowflakeIcon,
    title: 'Venta de equipo criogénico',
    description: `<ul class="list-inside list-disc">
      <li>Isocontenedores</li>
      <li>Vaporizadores</li>
      <li>Válvulas</li>
    </ul>`,
  },
  {
    icon: TruckIcon,
    title: 'Renta de equipo criogénico',
    description: `<ul class="list-inside list-disc">
      <li>Isocontenedores</li>
      <li>Vaporizadores</li>
      <li>Pipas</li>
    </ul>`,
  },
];
</script>

<template>
  <section class="overflow-x-hidden py-12 md:py-24">
    <UiContainer>
      <div class="max-w-3xl">
        <span class="font-semibold text-primary-700">¿Quiénes somos?</span>
        <h2 class="mt-3 font-headline text-3xl font-semibold uppercase text-zinc-900 sm:text-4xl">
          Proveedores de equipos y servicios de primer nivel
        </h2>
        <p class="mt-5 text-lg text-zinc-500 sm:text-xl">
          Somos una empresa dedicada a la renta y venta de equipo nuevo y seminuevo para almacenamiento,
          transporte y vaporización de líquidos criogénicos como Nitrógeno, oxígeno y Gas Natural Licuado.
        </p>
      </div>

      <div class="mt-12 grid items-center gap-16 md:mt-16 lg:grid-cols-2 lg:gap-0">
        <ul class="grid gap-x-8 gap-y-8 md:grid-cols-2 md:gap-y-12">
          <AboutWhoAreWeFeatureListing v-for="feature in features" :feature="feature" />
        </ul>

        <div class="relative h-80 md:h-[35rem] lg:h-[80vh]">
          <picture>
            <source srcset="/img/webp/cryotainer-img-15.webp" type="image/webp" />
            <source srcset="/img/cryotainer-img-15.jpg" type="image/jpeg" />
            <img
              src=""
              alt="Camión con tanque GNL"
              class="absolute h-full w-full rounded-xl object-cover md:left-[10%] lg:w-[50vw] lg:max-w-none"
            />
          </picture>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
