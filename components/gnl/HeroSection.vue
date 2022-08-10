<script setup lang="ts">
import { gsap } from 'gsap';

const imgCover = ref<HTMLElement>();
const headline = ref<HTMLElement>();
const supporting = ref<HTMLElement>();
const mainImg = ref<HTMLImageElement>();

onMounted(() => {
  const tl = gsap.timeline();

  tl.from([headline.value, supporting.value], {
    y: 50,
    opacity: 0,
    duration: 1.75,
    ease: 'expo.inOut',
    stagger: 0.1,
  });

  tl.to(
    imgCover.value,
    {
      height: 0,
      duration: 1.5,
      ease: 'expo.inOut',
    },
    '>-1'
  );

  tl.from(mainImg.value, { scale: 1.5, duration: 2, opacity: 0, ease: 'expo' }, '<0.5');
});
</script>

<template>
  <section class="pt-32">
    <UiContainer>
      <div class="mx-auto flex max-w-5xl flex-col items-center">
        <picture>
          <source srcset="/img/webp/cryotainer-logo.webp" type="image/webp" />
          <source srcset="/img/cryotainer-logo.png" type="image/png" />
          <img class="h-8 sm:h-10" src="" alt="Logo Cryotainer LNG" />
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

        <div ref="imgCover" class="absolute top-0 left-0 h-full w-full origin-left bg-gray-50"></div>
      </div>
    </UiContainer>
  </section>
</template>
