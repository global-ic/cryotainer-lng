<script setup lang="ts">
import { gsap } from 'gsap';

const imgCover = ref<HTMLElement | null>(null);
const wrapperEl = ref<HTMLElement | null>(null);
const mainImg = ref<HTMLImageElement | null>(null);

let tl: gsap.core.Timeline | null = null;

function createReveal() {
  // Only create the timeline once
  if (!!tl) return;

  tl = gsap.timeline({ scrollTrigger: { trigger: mainImg.value, start: 'top center' } });
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
        <div
          aria-hidden="true"
          class="flex h-12 w-12 items-center justify-center rounded-full border-8 border-primary-50 bg-primary-100 text-primary-600"
        >
          <UiIcon name="i-ph-gas-pump" class="h-6 w-6" />
        </div>

        <h2 class="mt-6 font-headline text-3xl font-semibold uppercase text-zinc-900 sm:text-4xl">
          Estación de regasificación
        </h2>

        <p class="mt-4 text-lg text-zinc-500 md:mt-8">
          En Cryotainer LNG ofrecemos las soluciones de almacenamiento y regasificación de gas natural más
          completas en México para clientes comerciales o industriales, incluidas las plantas de generación
          eléctrica.<br /><br />
          En comparación con los servicios de tubería tradicionales o gasoductos, nuestras aplicaciones fuera
          de la red brindan un acceso inigualable.
        </p>

        <NuxtLink to="/contacto" class="btn btn-primary mt-8">Contáctanos</NuxtLink>
      </div>

      <div class="relative h-80 md:h-[35rem] lg:h-[80vh]">
        <div
          class="absolute h-full w-full overflow-hidden rounded-xl md:left-[10%] md:rounded-b-none lg:w-[50vw]"
        >
          <picture>
            <source srcset="/img/webp/cryotainer-img-18.webp" type="image/webp" />
            <source srcset="/img/cryotainer-img-18.jpg" type="image/jpeg" />
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
          class="absolute left-0 top-0 h-full w-full origin-right bg-gray-50 md:left-[10%] lg:w-[50vw]"
        ></div>
      </div>
    </UiContainer>
  </section>
</template>
