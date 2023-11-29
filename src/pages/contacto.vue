<script setup lang="ts">
import { gsap } from 'gsap';

useHead({ title: 'Contáctanos' });

const header = useHeaderVariant();
header.value = 'dark';

const coverTop = ref<HTMLElement | null>(null);
const imgTop = ref<HTMLImageElement | null>(null);
const coverBottom = ref<HTMLElement | null>(null);
const imgBottom = ref<HTMLImageElement | null>(null);

const app = useNuxtApp();
const transition = useTransitionStore();

function createRevealAnimation() {
  const tl = gsap.timeline({
    onComplete() {
      tl.revert();
    },
  });

  tl.from(coverTop.value, { scaleY: 1, duration: 1.5, ease: 'expo.inOut' }, 'start');
  tl.from(imgTop.value, { scale: 1.5, duration: 2, opacity: 0, ease: 'expo' }, '<0.5');
  tl.from(coverBottom.value, { scaleX: 1, duration: 1.5, ease: 'expo.inOut' }, '<');
  tl.from(imgBottom.value, { scale: 1.5, duration: 2, opacity: 0, ease: 'expo' }, '<0.5');

  return tl;
}

app.hooks.hookOnce('page:reveal', () => {
  if (!process.client) return;
  const tl = createRevealAnimation();
  if (!!transition.timeline) transition.timeline.add(tl, '>-1');
});
</script>

<template>
  <div v-once class="flex min-h-screen w-full flex-col-reverse gap-8 px-4 pb-8 pt-24 md:flex-row lg:px-8">
    <div class="flex max-h-[80vh] w-full flex-col justify-center gap-8 overflow-hidden md:w-1/2">
      <div class="relative h-2/5 overflow-hidden rounded-xl">
        <picture>
          <source srcset="/img/webp/cryotainer-img-2.webp" type="image/webp" />
          <source srcset="/img/cryotainer-img-2.jpg" type="image/jpeg" />
          <img ref="imgTop" class="block h-full w-full origin-center transform object-cover" src="" />
        </picture>

        <div
          ref="coverTop"
          style="transform: scaleY(0)"
          class="absolute left-0 top-0 h-full w-full origin-top bg-gray-50"
        ></div>
      </div>

      <div class="relative h-2/5 overflow-hidden rounded-xl">
        <picture>
          <source srcset="/img/webp/cryotainer-img-3.webp" type="image/webp" />
          <source srcset="/img/cryotainer-img-3.jpg" type="image/jpeg" />
          <img ref="imgBottom" class="block h-full w-full origin-center transform object-cover" src="" />
        </picture>

        <div
          ref="coverBottom"
          style="transform: scaleX(0)"
          class="absolute left-0 top-0 h-full w-full origin-left bg-gray-50"
        ></div>
      </div>
    </div>

    <div class="flex flex-1 flex-col items-center justify-center">
      <div class="max-w-sm text-center text-zinc-700">
        <h1 class="font-headline text-4xl font-bold uppercase md:text-6xl">Contacto</h1>
      </div>

      <ul aria-label="Medios de contacto" class="mt-12 flex w-full max-w-sm flex-col space-y-4 md:mt-20">
        <li class="method-container">
          <span class="method-name">Ubicación</span>
          <span class="method-value">Guadalajara, Jalisco, México</span>
        </li>
        <li class="method-container">
          <span class="method-name">Correo</span>
          <a href="#" class="method-value">contacto@cryotainerlng.com</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.method-container {
  @apply flex justify-between gap-2;
}

.method-name {
  @apply text-sm font-medium uppercase tracking-wider text-zinc-800;
}

.method-value {
  @apply text-right text-zinc-700;
}

a.method-value {
  @apply hover:text-zinc-500;
}
</style>
