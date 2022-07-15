<script setup lang="ts">
import { gsap } from 'gsap';

const line1 = ref<HTMLSpanElement>();
const line2 = ref<HTMLSpanElement>();
const heroSection = ref<HTMLElement>();

onMounted(() => {
  const tl = gsap.timeline();

  tl.from(heroSection.value!, {
    opacity: 0,
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
    class="relative flex h-[80vh] w-full transform items-center justify-center bg-cover bg-center md:h-screen"
    style="
      background-image: url(https://images.pexels.com/photos/785529/pexels-photo-785529.jpeg?auto=compress&cs=tinysrgb&w=1000&dpr=2);
    "
  >
    <div class="absolute inset-0 bg-zinc-900/50" aria-hidden="true" />

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
