<script setup lang="ts">
import { gsap } from 'gsap';

const imgCover = ref<HTMLElement | null>(null);
const textWrapper = ref<HTMLElement | null>(null);
const mainImg = ref<HTMLImageElement | null>(null);
const sectionWrapper = ref<HTMLElement | null>(null);

let tl: gsap.core.Timeline | null = null;

function createReveal() {
  // Only create the timeline once
  if (!!tl) return;

  gsap.from(textWrapper.value, {
    y: 100,
    opacity: 0,
    duration: 2,
    ease: 'expo',
    scrollTrigger: { trigger: sectionWrapper.value, start: 'top 70%' },
  });

  tl = gsap.timeline({ scrollTrigger: { trigger: mainImg.value, start: 'top 90%' } });
  tl.to(imgCover.value, { width: 0, duration: 1.5, ease: 'expo.inOut' });
  tl.from(mainImg.value, { scale: 1.5, duration: 2, opacity: 0, ease: 'expo' }, '<0.5');
}

const isVisible = useElementVisibility(sectionWrapper);
watchOnce(isVisible, (value) => value && createReveal());

onBeforeUnmount(() => {
  tl?.kill();
});
</script>

<template>
  <section ref="sectionWrapper" class="py-24">
    <UiContainer>
      <div ref="textWrapper" class="flex transform flex-col gap-8 md:flex-row lg:gap-16">
        <div class="w-full md:max-w-3xl lg:max-w-5xl">
          <span class="mini-title">Sobre Cryotainer LNG</span>
          <h2 class="mt-3 font-headline text-4xl font-semibold uppercase text-zinc-900 lg:text-5xl">
            Proveedores de Equipo Criogénico para GNL y Gases del Aire
          </h2>

          <div class="mt-8 flex gap-2">
            <NuxtLink class="btn btn-primary" to="/contacto">Contáctenos</NuxtLink>
            <NuxtLink class="btn btn-outlined" to="/nosotros">Más información</NuxtLink>
          </div>
        </div>
      </div>

      <div class="relative mt-16 overflow-hidden rounded-xl">
        <picture>
          <source srcset="/img/webp/cryotainer-img-25.webp" type="image/webp" />
          <source srcset="/img/cryotainer-img-25.jpg" type="image/jpeg" />
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
