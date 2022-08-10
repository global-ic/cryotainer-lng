<script setup lang="ts">
import { gsap } from 'gsap';
import MoneyIcon from '~icons/ph/money';
import ShieldCheckIcon from '~icons/ph/shield-check';
import TreeIcon from '~icons/ph/tree';

const features = [
  {
    icon: MoneyIcon,
    title: 'Económico',
    body: 'El proceso de licuefacción condensa el volumen de gas hasta 600 veces, lo que permite un transporte más fácil a áreas donde no existen gasoductos de gas natural.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Seguro',
    body: 'El GNL es un gas natural no tóxico, no corrosivo e inodoro, lo que reduce los riesgos de su manipulación y lo vuelve en una alternativa más segura.',
  },
  {
    icon: TreeIcon,
    title: 'Ecológico',
    body: 'Distinguido como uno de los combustibles fósiles más limpios disponibles, el GNL es una alternativa confiable y respetuosa con el medio ambiente al gas natural.',
  },
];

const imgCover = ref<HTMLElement>();
const mainImg = ref<HTMLImageElement>();
const cards = ref<HTMLElement[]>([]);
const cardsWrapper = ref<HTMLElement>();

onMounted(() => {
  gsap.from(cards.value, {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: 'expo',
    scrollTrigger: { trigger: cardsWrapper.value, start: 'top 70%' },
    stagger: 0.3,
  });

  const tl = gsap.timeline({ scrollTrigger: { trigger: mainImg.value, start: 'top 90%' } });
  tl.to(imgCover.value, {
    scaleX: 0,
    duration: 2,
    ease: 'expo.inOut',
  });

  tl.from(mainImg.value, { scale: 1.5, duration: 2, opacity: 0, ease: 'expo' }, '<0.5');
});
</script>

<template>
  <section class="overflow-x-hidden py-24">
    <UiContainer>
      <div class="max-w-3xl">
        <h2 class="mini-title">Gas Natural Licuado (GNL)</h2>
        <span class="mt-3 font-headline text-4xl font-semibold uppercase text-zinc-900"
          >Contamos con la mejor alternativa al GNC y Diesel</span
        >
        <p class="mt-5 text-lg text-zinc-500 md:text-xl">
          El gas natural licuado, o GNL, es un tipo de gas natural no tóxico, no corrosivo e inodoro. Durante
          la licuefacción, el GNL se obtiene enfriando el gas a -162° (-260°F).
        </p>

        <NuxtLink class="btn btn-primary mt-8" :to="{ name: 'gnl' }">Más información</NuxtLink>
      </div>

      <div ref="cardsWrapper" class="mt-6 grid items-center gap-x-16 gap-y-8 md:mt-8 md:grid-cols-2">
        <ul class="flex flex-col space-y-6 md:space-y-12">
          <li ref="cards" v-for="feature in features" class="flex flex-col xs:flex-row xs:space-x-4">
            <div
              aria-hidden="true"
              class="flex h-12 w-12 items-center justify-center rounded-full border-8 border-primary-50 bg-primary-100 text-primary-600"
            >
              <component :is="feature.icon" class="h-6 w-6" />
            </div>

            <div class="mt-2 flex-1 space-y-2">
              <h4 class="font-headline text-xl font-semibold text-zinc-900">{{ feature.title }}</h4>
              <p class="mt-2 text-zinc-500">{{ feature.body }}</p>
            </div>
          </li>
        </ul>

        <div class="relative h-80 md:h-[35rem] lg:h-[80vh]">
          <div class="absolute h-full w-full overflow-hidden rounded-xl md:left-[10%] lg:w-[50vw]">
            <picture>
              <source srcset="/img/webp/cryotainer-img-14.webp" type="image/webp" />
              <source srcset="/img/cryotainer-img-14.jpg" type="image/jpeg" />
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
            class="absolute top-0 left-0 h-full w-full origin-right bg-gray-50 md:left-[10%] lg:w-[50vw]"
          ></div>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
