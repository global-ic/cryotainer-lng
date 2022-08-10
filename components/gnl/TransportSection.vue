<script setup lang="ts">
import { gsap } from 'gsap';

const imgCover = ref<HTMLElement>();
const mainImg = ref<HTMLImageElement>();

onMounted(() => {
  const tl = gsap.timeline({ scrollTrigger: { trigger: mainImg.value, start: 'top 90%' } });
  tl.to(imgCover.value, {
    width: 0,
    duration: 1.5,
    ease: 'expo.inOut',
  });

  tl.from(mainImg.value, { scale: 1.5, duration: 2, opacity: 0, ease: 'expo' }, '<0.5');
});
</script>

<template>
  <section class="py-24">
    <UiContainer>
      <div class="flex flex-col gap-8 md:flex-row lg:gap-16">
        <div class="w-full md:w-1/2 xl:w-full xl:max-w-3xl">
          <span class="mini-title">GNL para transporte</span>
          <h2 class="mt-3 font-headline text-4xl font-semibold uppercase text-zinc-900 lg:text-5xl">
            Ideal para transporte pesado y largas distancias
          </h2>
        </div>

        <p class="flex-1 text-lg text-zinc-500 sm:text-xl">
          Si deseas recorrer largas distancias la solución es GNL. Somos su proveedor de equipo desde el
          suministro de tanques vehiculares hasta la estación de despacho
        </p>
      </div>

      <div class="relative mt-16 overflow-hidden rounded-xl">
        <picture>
          <source srcset="/img/webp/cryotainer-img-16.webp" type="image/webp" />
          <source srcset="/img/cryotainer-img-16.jpg" type="image/jpeg" />
          <img
            src=""
            ref="mainImg"
            alt="Camiones siendo cargados con GNL"
            class="max-h-[30rem] w-full origin-center transform object-cover sm:h-[60vh]"
          />
        </picture>

        <div ref="imgCover" class="absolute top-0 left-0 h-full w-full origin-left bg-gray-50"></div>
      </div>
    </UiContainer>
  </section>
</template>
