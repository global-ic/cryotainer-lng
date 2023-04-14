<script setup lang="ts">
import { gsap } from 'gsap';

const features = [
  'Servicios y repuestos',
  'Válvulas en inventario rápido',
  'Presencia y asesoramiento a personal',
];

const wrapperEl = ref<HTMLElement | null>(null);
const imgCover = ref<HTMLElement | null>(null);
const mainImg = ref<HTMLImageElement | null>(null);

let tl: gsap.core.Timeline | null = null;

function createReveal() {
  // Only create the timeline once
  if (!!tl) return;

  tl = gsap.timeline({ scrollTrigger: { trigger: wrapperEl.value, start: 'top center' } });
  tl.to(imgCover.value, { scaleX: 0, duration: 2, ease: 'expo.inOut' });
  tl.from(mainImg.value, { scale: 1.5, duration: 2, opacity: 0, ease: 'expo' }, '<0.5');
}

const isVisible = useElementVisibility(wrapperEl);
watchOnce(isVisible, (value) => value && createReveal());

onBeforeUnmount(() => {
  tl?.kill();
});
</script>

<template>
  <section ref="wrapperEl" class="overflow-hidden py-8 md:py-0">
    <UiContainer class="grid items-center gap-8 md:grid-cols-2 md:gap-0">
      <div>
        <h2 class="font-headline text-3xl font-bold uppercase text-zinc-900 sm:text-4xl">
          Nuestros servicios
        </h2>

        <ul class="mt-8 grid gap-5">
          <li v-for="feature in features" class="flex items-center">
            <div
              aria-hidden="true"
              class="grid h-5 w-5 place-items-center rounded-full bg-primary-100 text-primary-500 sm:h-7 sm:w-7"
            >
              <IconsUiCheck class="h-5 w-5 sm:h-7 sm:w-7" />
            </div>
            <span class="ml-3 text-zinc-500 sm:text-lg">{{ feature }}</span>
          </li>
        </ul>

        <p class="mt-6 text-zinc-500 sm:text-lg">Todo en un solo lugar.</p>

        <div class="mt-8 flex gap-2">
          <NuxtLink to="/contacto" class="btn btn-primary">Contáctanos</NuxtLink>
          <NuxtLink to="/gnl" class="btn btn-outlined">Más información</NuxtLink>
        </div>
      </div>

      <div class="relative h-80 md:h-[35rem] lg:h-[80vh]">
        <div
          class="absolute h-full w-full overflow-hidden rounded-xl md:left-[10%] md:rounded-b-none lg:w-[50vw]"
        >
          <picture>
            <source srcset="/img/webp/cryotainer-img-28.webp" type="image/webp" />
            <source srcset="/img/cryotainer-img-28.jpg" type="image/jpeg" />
            <img
              src=""
              ref="mainImg"
              alt="Tanque de GNL por Cryotainer"
              class="h-full w-full origin-center transform object-cover lg:max-w-none"
            />
          </picture>
        </div>

        <div
          ref="imgCover"
          class="absolute top-0 left-0 h-full w-full origin-right bg-gray-50 md:left-[10%] lg:w-[50vw]"
        ></div>
      </div>
    </UiContainer>
  </section>
</template>
