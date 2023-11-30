<script setup lang="ts">
import { gsap } from 'gsap';

const logoEl = ref<HTMLElement | null>(null);
const imgCover = ref<HTMLElement | null>(null);
const headline = ref<HTMLElement | null>(null);
const supporting = ref<HTMLElement | null>(null);
const mainImg = ref<HTMLImageElement | null>(null);

const app = useNuxtApp();
const transition = useTransitionStore();

function createRevealAnimation() {
  const tl = gsap.timeline({
    onComplete() {
      tl.revert();
    },
  });

  tl.from([logoEl.value, headline.value, supporting.value], {
    y: 10,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    ease: 'back(4)',
  });

  tl.from(imgCover.value, { scaleY: 1, duration: 1.5, ease: 'expo.inOut' }, '>-1');
  tl.from(mainImg.value, { scale: 1.5, duration: 2, opacity: 0, ease: 'expo' }, '<0.5');

  return tl;
}

app.hooks.hookOnce('page:reveal', () => {
  if (!process.client) return;
  const tl = createRevealAnimation();
  if (!!transition.timeline) transition.timeline.add(tl, '>-0.5');
});
</script>

<template>
  <section class="pt-32">
    <UiContainer>
      <div class="mx-auto flex max-w-5xl flex-col items-center">
        <picture>
          <source srcset="/img/webp/cryotainer-logo.webp" type="image/webp" />
          <source srcset="/img/cryotainer-logo.png" type="image/png" />
          <img ref="logoEl" class="h-8 sm:h-10" src="" alt="Logo Cryotainer LNG" />
        </picture>

        <h1
          ref="headline"
          class="mt-4 text-center font-headline text-4xl font-semibold uppercase text-zinc-900 md:text-6xl"
        >
          Gas Natural Licuado
        </h1>
        <p ref="supporting" class="mt-6 max-w-3xl text-center text-lg text-zinc-500 md:text-xl">
          El mejor combustible para recorrer largas distancias siendo mas económico, seguro y ecológico.
        </p>
      </div>

      <div class="relative mt-16 overflow-hidden rounded-xl">
        <picture>
          <source srcset="/img/webp/cryotainer-img-14.webp" type="image/webp" />
          <source srcset="/img/cryotainer-img-14.jpg" type="image/jpeg" />
          <img
            src=""
            ref="mainImg"
            alt="Camiones siendo cargados con GNL"
            class="max-h-[25rem] w-full origin-center transform object-cover sm:h-[50vh]"
          />
        </picture>

        <div
          ref="imgCover"
          style="transform: scaleY(0)"
          class="absolute left-0 top-0 h-full w-full origin-top bg-gray-50"
        ></div>
      </div>
    </UiContainer>
  </section>
</template>
