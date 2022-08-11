<script setup lang="ts">
import { gsap } from 'gsap';
import type { WhoAreWeFeature } from '~/types';
import SnowflakeIcon from '~icons/ph/snowflake';
import StackIcon from '~icons/ph/stack';
import TruckIcon from '~icons/ph/truck';
import WrenchIcon from '~icons/ph/wrench';

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

const imgCover = ref<HTMLElement>();
const mainImg = ref<HTMLImageElement>();

onMounted(() => {
  const tl = gsap.timeline({ scrollTrigger: { trigger: mainImg.value, start: 'top 90%' } });
  tl.to(imgCover.value, {
    width: 0,
    duration: 2,
    ease: 'expo.inOut',
  });

  tl.from(mainImg.value, { scale: 1.5, duration: 2, opacity: 0, ease: 'expo' }, '<0.5');
});
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
          <div class="absolute h-full w-full overflow-hidden rounded-xl md:left-[10%] lg:w-[50vw]">
            <picture>
              <source srcset="/img/webp/cryotainer-img-15.webp" type="image/webp" />
              <source srcset="/img/cryotainer-img-15.jpg" type="image/jpeg" />
              <img
                src=""
                ref="mainImg"
                alt="Camión con tanque GNL"
                class="h-full w-full origin-center transform object-cover lg:max-w-none"
              />
            </picture>
          </div>

          <div
            ref="imgCover"
            class="absolute top-0 left-0 h-full w-full origin-left bg-gray-50 md:left-[10%] lg:w-[50vw]"
          ></div>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
