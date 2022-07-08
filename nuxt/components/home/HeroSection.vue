<script setup lang="ts">
import { gsap } from 'gsap';

const line1 = ref<HTMLSpanElement>();
const line2 = ref<HTMLSpanElement>();
const heroSection = ref<HTMLElement>();

onMounted(() => {
  const tl = gsap.timeline();

  tl.to(heroSection.value!, {
    opacity: 1,
    delay: 0.5,
    duration: 1,
    ease: 'power2',
  });

  tl.fromTo(
    [line1.value, line2.value],
    {
      y: 500,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'power2',
    },
    '-=0.75'
  );

  tl.to('.hero-link', { opacity: 1, duration: 0.5, ease: 'power2' });
});
</script>

<template>
  <section
    ref="heroSection"
    aria-label="Portada"
    style="background-image: url(/img/cryotainer-hero.jpg)"
    class="flex h-screen w-full transform items-center justify-center bg-zinc-900/50 bg-cover bg-center opacity-0"
  >
    <div class="flex flex-col items-center px-4 lg:px-8">
      <div class="max-w-4xl">
        <h1
          class="text-center font-headline text-4xl font-light uppercase text-white md:text-5xl lg:text-6xl"
        >
          <div class="overflow-hidden">
            <span ref="line1" class="block">Soluciones energéticas en</span>
          </div>
          <div class="overflow-hidden">
            <span ref="line2" class="block font-bold">consumo de combustible</span>
          </div>
        </h1>
      </div>

      <NuxtLink class="hero-link btn btn-primary mt-8 opacity-0" :to="{ name: 'nosotros' }"
        >Sobre nosotros</NuxtLink
      >
    </div>
  </section>
</template>
