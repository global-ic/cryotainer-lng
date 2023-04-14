<script setup lang="ts">
import { gsap } from 'gsap';

const values = [
  {
    icon: 'ph:star',
    title: 'Estándares de calidad',
    desc: 'Nuestros equipos cumplen códigos ASME, GB y otros estándares internacionales.',
  },
  {
    icon: 'ph:hourglass-medium',
    title: 'Tiempos de entrega',
    desc: 'Proveemos soluciones con los tiempos de entrega mas cortos del mercado.',
  },
  {
    icon: 'ph:users',
    title: 'Consultorías',
    desc: 'Asesoramos y acompañamos en todo momento del desarrollo del proyecto.',
  },
  {
    icon: 'ph:bookmark',
    title: 'Todo en un solo lugar',
    desc: 'Proveemos los equipos necesarios para el excelente funcionamiento y operación.',
  },
];

const wrapperEl = ref<HTMLElement | null>(null);
const cards = ref<HTMLElement[]>([]);
const cardsWrapper = ref<HTMLElement | null>(null);

let tl: gsap.core.Timeline | null = null;

function createReveal() {
  // Only create the timeline once
  if (!!tl) return;

  gsap.from(cards.value, {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: 'expo',
    scrollTrigger: { trigger: cardsWrapper.value, start: 'top 70%' },
    stagger: 0.1,
  });
}

const isVisible = useElementVisibility(wrapperEl);
watchOnce(isVisible, (value) => value && createReveal());

onBeforeUnmount(() => {
  tl?.kill();
});
</script>

<template>
  <section ref="wrapperEl" class="overflow-x-hidden py-12 md:py-24">
    <UiContainer>
      <div class="max-w-3xl">
        <span class="font-semibold text-primary-700">Valores y compromiso</span>
        <h2 class="mt-3 font-headline text-3xl font-semibold uppercase text-zinc-900 md:text-4xl">
          Buscamos eficiencia y satisfacción en todo momento
        </h2>
        <p class="mt-5 text-lg text-zinc-500 md:text-xl">
          En Cryotainer LNG tomamos la eficiencia de nuestros servicios y la satisfacción de nuestros clientes
          seriamente y trabajamos por cumplir con todos sus requerimientos y especificaciones.
        </p>
      </div>

      <ul ref="cardsWrapper" class="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <li ref="cards" v-for="value in values" class="rounded-xl bg-zinc-100 p-6">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500">
            <Icon :name="value.icon" class="h-6 w-6 text-white" />
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
