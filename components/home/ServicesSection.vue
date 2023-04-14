<script setup lang="ts">
import type { WhoAreWeFeature } from '~/types';
import WrenchIcon from '~icons/ph/wrench';
import StackIcon from '~icons/ph/stack';
import SnowflakeIcon from '~icons/ph/snowflake';
import TruckIcon from '~icons/ph/truck';
import { gsap } from 'gsap';

const features: WhoAreWeFeature[] = [
  {
    icon: WrenchIcon,
    title: 'Mantenimiento de equipo',
    description: `<ul class="list-inside list-disc">
      <li>Bombas externas y sumergibles</li>
      <li>Pipas</li>
      <li>Autotanques</li>
    </ul>`,
  },
  {
    icon: StackIcon,
    title: 'Ingeniería',
    description: `
      <p>Diseño de Estaciones de: </p>
      <ul class="mt-2 list-inside list-disc">
        <li>Almacenamiento</li>
        <li>Regasificación </li>
        <li>Despacho de LNG y Gases del Aire</li>
      </ul>`,
  },
  {
    icon: SnowflakeIcon,
    title: 'Venta de equipo criogénico',
    description: `<ul class="list-inside list-disc">
      <li>Isocontenedores</li>
      <li>Vaporizadores</li>
      <li>Válvulas</li>
      <li>Equipos Móviles de regasificación hasta 100,000 GPD</li>
      <li>TIAC (Turbine Inlet Air cooling) Enfriamiento de Aire de entrada a turbinas</li>
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
const featSection = ref<HTMLElement>();
const featuresWrapper = ref<HTMLElement>();

onMounted(() => {
  gsap.from(featuresWrapper.value, {
    y: 100,
    opacity: 0,
    duration: 2,
    ease: 'expo',
    scrollTrigger: { trigger: featSection.value, start: 'top 70%' },
  });

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
        <h2 class="font-headline text-3xl font-semibold uppercase text-zinc-900 sm:text-4xl">
          Proveedor confiable en la cadena de valor de gasoductos virtuales
        </h2>
        <p class="mt-5 text-lg text-zinc-500 sm:text-xl">
          Somos proveedores de equipos y servicios de primer nivel en la industria de gasoductos virtuales.
          Con décadas de experiencia brindando soluciones innovadoras de gas natural y gases de aire, nuestro
          equipo está listo para satisfacer sus necesidades y brindarle los mejores resultados posibles.
        </p>
      </div>

      <div class="mt-12 grid items-center gap-16 md:mt-16 lg:grid-cols-2 lg:gap-0">
        <div ref="featSection">
          <span class="font-semibold text-primary-700">Nuestros servicios</span>

          <ul ref="featuresWrapper" class="mt-8 grid gap-x-8 gap-y-8 md:grid-cols-2 md:gap-y-12">
            <AboutWhoAreWeFeatureListing v-for="feature in features" :feature="feature" />
          </ul>
        </div>

        <div class="relative h-80 md:h-[35rem] lg:h-[80vh]">
          <div class="absolute h-full w-full overflow-hidden rounded-xl md:left-[10%] lg:w-[50vw]">
            <picture>
              <source srcset="/img/webp/cryotainer-img-33.webp" type="image/webp" />
              <source srcset="/img/cryotainer-img-33.jpg" type="image/jpeg" />
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
