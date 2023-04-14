<script setup lang="ts">
import { gsap } from 'gsap';

const line1 = ref<HTMLSpanElement | null>(null);
const line2 = ref<HTMLSpanElement | null>(null);

const getTransition = inject(transitionsKey, undefined, false);

function createReveal() {
  const tl = gsap.timeline({
    onComplete() {
      tl.revert();
    },
  });

  tl.from([line1.value, line2.value], { y: 10, opacity: 0, duration: 1, stagger: 0.1, ease: 'back(4)' });
  tl.from('.hero-link', { opacity: 0, duration: 0.5, ease: 'power2' });

  return tl;
}

onMounted(() => {
  if (process.server) return;

  const tl = createReveal();

  if (getTransition) {
    const transition = getTransition();
    if (transition.timeline && transition.isAnimating.value) transition.timeline.add(tl, '-=0.8');
  }
});
</script>

<template>
  <section aria-label="Portada" class="relative flex h-screen w-full items-center justify-center">
    <div aria-hidden="true" class="absolute inset-0 -z-10">
      <div class="relative h-full w-full overflow-hidden">
        <div class="absolute inset-0 bg-zinc-900 bg-opacity-50" />

        <picture>
          <source srcset="/img/webp/cryotainer-img-34.webp" type="image/webp" />
          <source srcset="/img/cryotainer-img-34.jpg" type="image/jpeg" />
          <img src="" alt="" class="h-full w-full object-cover object-bottom" />
        </picture>
      </div>
    </div>

    <div class="flex flex-col items-center px-4 lg:px-8">
      <div class="max-w-4xl">
        <h1
          class="text-center font-headline text-4xl font-light uppercase text-white md:text-5xl lg:text-6xl"
        >
          <span ref="line1" class="block">Especialistas en</span>
          <span ref="line2" class="block font-bold">equipo criogénico</span>
        </h1>
      </div>

      <NuxtLink class="hero-link btn btn-primary mt-8" to="/nosotros">Sobre nosotros</NuxtLink>
    </div>
  </section>
</template>
