<script setup lang="ts">
import type { WhoAreWeFeature } from '~/types';
import WrenchIcon from '~/components/icons/PhWrench.vue';
import StackIcon from '~/components/icons/PhStack.vue';
import SnowflakeIcon from '~/components/icons/PhSnowflake.vue';
import TruckIcon from '~/components/icons/PhTruck.vue';

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
  <section class="overflow-x-hidden py-24">
    <UiContainer>
      <div class="max-w-3xl">
        <span class="font-semibold text-primary-700">¿Quiénes somos?</span>
        <h2 class="mt-3 font-headline text-4xl font-semibold uppercase text-zinc-900">
          Proveedores de equipos y servicios de primer nivel
        </h2>
        <p class="mt-5 text-xl text-zinc-500">
          Somos una empresa dedicada a la renta y venta de equipo nuevo y seminuevo para almacenamiento,
          transporte y vaporización de líquidos criogénicos como Nitrógeno, oxígeno y Gas Natural Licuado.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-2 items-center gap-16">
        <ul class="grid grid-cols-2 gap-x-8 gap-y-12">
          <AboutWhoAreWeFeatureListing v-for="feature in features" :feature="feature" />
        </ul>

        <div class="relative h-[35rem]">
          <picture>
            <source srcset="/img/webp/cryotainer-img-15.webp" type="image/webp" />
            <source srcset="/img/cryotainer-img-15.jpg" type="image/jpeg" />
            <img src="" alt="Camión con tanque GNL" class="absolute h-full max-w-none rounded-xl" />
          </picture>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
