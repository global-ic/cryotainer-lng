<script setup lang="ts">
import { gsap } from 'gsap';

const line1 = ref<HTMLSpanElement>();
const line2 = ref<HTMLSpanElement>();

onMounted(() => {
  const tl = gsap.timeline();

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
    }
  );

  tl.from('.hero-link', { opacity: 0, duration: 0.5, ease: 'power2' });
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
          <div class="overflow-hidden">
            <span ref="line1" class="block">Especialistas en</span>
          </div>
          <div class="overflow-hidden">
            <span ref="line2" class="block font-bold">equipo criogénico</span>
          </div>
        </h1>
      </div>

      <NuxtLink class="hero-link btn btn-primary mt-8" :to="{ name: 'nosotros' }">Sobre nosotros</NuxtLink>
    </div>
  </section>
</template>
