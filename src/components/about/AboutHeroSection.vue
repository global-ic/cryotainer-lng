<script setup lang="ts">
import { gsap } from 'gsap';

const line1 = ref<HTMLSpanElement | null>(null);
const line2 = ref<HTMLSpanElement | null>(null);
const heroSection = ref<HTMLElement | null>(null);

const app = useNuxtApp();
const transition = useTransitionStore();

function createRevealAnimation() {
  const tl = gsap.timeline({
    onComplete() {
      tl.revert();
    },
  });

  tl.from([line1.value, line2.value], { y: 10, opacity: 0, duration: 1, stagger: 0.1, ease: 'back(4)' });

  return tl;
}

app.hooks.hookOnce('page:reveal', () => {
  if (!process.client) return;
  const tl = createRevealAnimation();
  if (!!transition.timeline) transition.timeline.add(tl, '>-0.7');
});
</script>

<template>
  <section
    ref="heroSection"
    aria-label="Portada"
    class="relative flex h-[80vh] w-full items-center justify-center md:h-screen"
  >
    <div aria-hidden="true" class="absolute inset-0 -z-10">
      <div class="relative h-full w-full overflow-hidden">
        <div class="absolute inset-0 bg-zinc-900 bg-opacity-60" />

        <picture>
          <source srcset="/img/webp/cryotainer-img-12.webp" type="image/webp" />
          <source srcset="/img/cryotainer-img-12.jpg" type="image/jpeg" />
          <img src="" alt="" class="h-full w-full object-cover object-center" />
        </picture>
      </div>
    </div>

    <div class="px-4 lg:px-8">
      <h1 class="text-center font-headline text-4xl font-light uppercase text-white md:text-5xl lg:text-6xl">
        <span ref="line1" class="block">Impulsamos el uso de</span>
        <span ref="line2" class="block font-bold">combustibles alternativos</span>
      </h1>
    </div>
  </section>
</template>
