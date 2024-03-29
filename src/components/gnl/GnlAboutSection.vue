<script setup lang="ts">
import { gsap } from 'gsap';

const features = [
  {
    icon: 'i-ph-money',
    title: 'Económico',
    body: 'Dentro de los combustibles fósiles está un 30% por debajo del precio promedio del diésel.',
  },
  {
    icon: 'i-ph-shield-check',
    title: 'Seguro',
    body: 'Al ser mas ligero que el aire en casi de fuga se disipará mas rápido, no contamina los mantos freáticos.',
  },
  {
    icon: 'i-ph-tree',
    title: 'Ecológico',
    body: 'Distinguido como uno de los combustibles fósiles más limpios disponibles, el GNL es una alternativa confiable y respetuosa con el medio ambiente al gas natural.',
  },
];

const cards = ref<HTMLElement[]>([]);
const wrapperEl = ref<HTMLElement | null>(null);
const cardsWrapper = ref<HTMLElement | null>(null);

const hasPlayed = ref(false);

function createReveal() {
  // Only create the timeline once
  if (hasPlayed.value) return;
  hasPlayed.value = true;

  gsap.from(cards.value, {
    x: -50,
    opacity: 0,
    ease: 'expo',
    stagger: 0.2,
    duration: 1.5,
    scrollTrigger: { trigger: cardsWrapper.value, start: 'top 70%' },
  });
}

const isVisible = useElementVisibility(wrapperEl);
watchOnce(isVisible, (value) => value && createReveal());
</script>

<template>
  <section ref="wrapperEl" class="py-24">
    <UiContainer>
      <div class="max-w-3xl">
        <h2 class="mini-title">¿Qué es el GNL?</h2>
        <span class="mt-3 font-headline text-4xl font-semibold uppercase text-zinc-900"
          >La mejor alternativa al GNC y Diesel</span
        >
        <p class="mt-5 text-lg text-zinc-500 md:text-xl">
          El gas natural licuado, o GNL, es un combustible no tóxico, no corrosivo e inodoro. Durante la
          licuefacción, el GNL se enfría hasta -162° (-260°F).
        </p>
      </div>

      <div ref="cardsWrapper" class="mt-8 grid items-center gap-x-16 gap-y-8 md:mt-16 md:grid-cols-2">
        <ul class="flex flex-col space-y-6 md:space-y-12">
          <li ref="cards" v-for="feature in features" class="flex flex-col xs:flex-row xs:space-x-4">
            <div
              aria-hidden="true"
              class="flex h-12 w-12 items-center justify-center rounded-full border-8 border-primary-50 bg-primary-100 text-primary-600"
            >
              <UiIcon :name="feature.icon" class="h-6 w-6" />
            </div>

            <div class="mt-2 flex-1 space-y-2">
              <h4 class="font-headline text-xl font-semibold text-zinc-900">{{ feature.title }}</h4>
              <p class="mt-2 text-zinc-500">{{ feature.body }}</p>
            </div>
          </li>
        </ul>

        <div>
          <picture>
            <source srcset="/img/webp/cryotainer-gnl-chart.webp" type="image/webp" />
            <source srcset="/img/cryotainer-gnl-chart.png" type="image/png" />
            <img
              src=""
              alt="Características del GNL"
              aria-hidden="true"
              class="mx-auto w-full max-w-md md:max-w-full"
            />
          </picture>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
