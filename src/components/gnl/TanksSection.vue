<script setup lang="ts">
import { gsap } from 'gsap';

const features = [
  {
    icon: 'i-ph-columns',
    title: 'Construcción de doble pared',
    body: 'Un tanque dentro de otro tanque garantizando la menor tasa de vaporización.',
  },
  {
    icon: 'i-ph-placeholder',
    title: 'Materiales de aislamiento al vacío',
    body: 'Diseñados con super aislamiento y con un vacío menor a 10 micrones en caliente, llegando a 1 en estado frío.',
  },
  {
    icon: 'i-ph-shield-checkered',
    title: 'Robusto contra golpes',
    body: 'Nuestros tanques están probados para soportar hasta 30 ft. de caídas del tanque y hasta 10 ft. de caídas sobre el lado de las válvulas.',
  },
  {
    icon: 'i-ph-crosshair',
    title: 'Seguro contra vandalismo',
    body: 'Equipamos nuestros tanques con la mejor protección anti-vandalismo, probados contra disparos de .44 magnum.',
  },
  {
    icon: 'i-ph-flame',
    title: 'Prueba de exposición',
    body: 'Nuestros tanques están probados y sin efecto contra exposición al fuego.',
  },
];

const imgCover = ref<HTMLElement | null>(null);
const mainImg = ref<HTMLImageElement | null>(null);
const cards = ref<HTMLElement[]>([]);
const cardsWrapper = ref<HTMLElement | null>(null);
const wrapperEl = ref<HTMLElement | null>(null);

let tl: gsap.core.Timeline | null = null;

function createReveal() {
  // Only create the timeline once
  if (!!tl) return;

  tl = gsap.timeline({ scrollTrigger: { trigger: mainImg.value, start: 'top 80%' } });

  tl.to(imgCover.value, { scaleX: 0, duration: 1.5, ease: 'expo.inOut' });
  tl.from(mainImg.value, { scale: 1.5, duration: 2, opacity: 0, ease: 'expo' }, '<0.5');
  tl.from(cards.value, { y: 50, opacity: 0, duration: 1.5, ease: 'expo', stagger: 0.1 }, '>-1');
}

const isVisible = useElementVisibility(wrapperEl);
watchOnce(isVisible, (value) => value && createReveal());

onBeforeUnmount(() => {
  tl?.kill();
});
</script>

<template>
  <section ref="wrapperEl" class="py-24">
    <UiContainer>
      <div class="mx-auto flex max-w-3xl flex-col items-center">
        <h2 class="mini-title text-center">Tanques de GNL</h2>
        <span class="mt-3 text-center font-headline text-4xl font-semibold uppercase text-zinc-900"
          >Almacenado para dar confianza</span
        >
        <p class="mt-5 text-center text-lg text-zinc-500 md:text-xl">
          Todos nuestros tanques de GNL están diseñados para brindar la mayor calidad y confianza para
          múltiples usos.
        </p>
      </div>

      <div class="relative mt-16 overflow-hidden rounded-xl">
        <picture>
          <source srcset="/img/webp/cryotainer-img-32.webp" type="image/webp" />
          <source srcset="/img/cryotainer-img-32.jpg" type="image/jpeg" />
          <img
            src=""
            ref="mainImg"
            alt="Camiones siendo cargados con GNL"
            class="max-h-[30rem] w-full origin-top transform object-cover sm:h-[60vh]"
          />
        </picture>

        <div ref="imgCover" class="absolute left-0 top-0 h-full w-full origin-right bg-gray-50"></div>
      </div>

      <ul ref="cardsWrapper" class="mt-16 flex flex-wrap justify-center gap-y-8 md:gap-y-16">
        <li
          ref="cards"
          v-for="feature in features"
          class="flex flex-col items-center sm:w-1/2 sm:px-4 lg:w-1/3"
        >
          <div
            aria-hidden="true"
            class="flex h-12 w-12 items-center justify-center rounded-full border-8 border-primary-50 bg-primary-100 text-primary-600"
          >
            <UiIcon :name="feature.icon" class="h-6 w-6" />
          </div>

          <h4 class="mt-5 text-center font-headline text-xl font-semibold text-zinc-900">
            {{ feature.title }}
          </h4>
          <p class="mt-2 text-center text-zinc-500">{{ feature.body }}</p>
        </li>
      </ul>
    </UiContainer>
  </section>
</template>
