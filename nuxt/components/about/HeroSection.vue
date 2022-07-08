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

  tl.from(
    [line1.value, line2.value],
    {
      y: 500,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power2',
    },
    '-=0.75'
  );
});
</script>

<template>
  <section
    ref="heroSection"
    aria-label="Portada"
    style="background-image: url(/img/cryotainer-hero.jpg)"
    class="flex h-screen w-full transform items-center justify-center bg-zinc-900/50 bg-cover bg-center opacity-0"
  >
    <div class="px-4 lg:px-8">
      <h1 class="text-center font-headline text-4xl font-light uppercase text-white md:text-5xl lg:text-6xl">
        <div class="overflow-hidden">
          <span ref="line1" class="block">Impulsamos el uso de</span>
        </div>
        <div class="overflow-hidden">
          <span ref="line2" class="block font-bold">combustibles alternativos</span>
        </div>
      </h1>
    </div>
  </section>
</template>
