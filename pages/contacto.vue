<script setup lang="ts">
import { gsap } from 'gsap';

useHead({ title: 'Contáctanos' });
definePageMeta({
  header: {
    color: 'dark',
  },
});

const coverTop = ref<HTMLElement | null>(null);
const imgTop = ref<HTMLImageElement | null>(null);
const coverBottom = ref<HTMLElement | null>(null);
const imgBottom = ref<HTMLImageElement | null>(null);

const getTransition = inject(transitionsKey, undefined, false);

let tl: gsap.core.Timeline | null = null;

function createReveal() {
  if (!!tl) return;

  tl = gsap.timeline();

  tl.to(coverTop.value, { height: 0, duration: 1.5, ease: 'expo.inOut' }, 'start');
  tl.from(imgTop.value, { scale: 1.5, duration: 2, opacity: 0, ease: 'expo' }, '<0.5');
  tl.to(coverBottom.value, { width: 0, duration: 1.5, ease: 'expo.inOut' }, '<');
  tl.from(imgBottom.value, { scale: 1.5, duration: 2, opacity: 0, ease: 'expo' }, '<0.5');
}

onMounted(async () => {
  if (process.server) return;

  await nextTick();
  await nextTick();
  const tl = createReveal();

  if (getTransition) {
    const transition = getTransition();
    if (transition.timeline && transition.isAnimating.value) transition.timeline.add(tl, '-=0.8');
  }
});

onBeforeUnmount(() => {
  tl?.revert();
  tl?.kill();
});
</script>

<template>
  <div v-once class="flex min-h-screen w-full flex-col-reverse gap-8 px-4 pt-24 pb-8 md:flex-row lg:px-8">
    <div class="flex max-h-[80vh] w-full flex-col justify-center gap-8 overflow-hidden md:w-1/2">
      <div class="relative h-2/5 overflow-hidden rounded-xl">
        <picture>
          <source srcset="/img/webp/cryotainer-img-2.webp" type="image/webp" />
          <source srcset="/img/cryotainer-img-2.jpg" type="image/jpeg" />
          <img ref="imgTop" class="block h-full w-full origin-center transform object-cover" src="" />
        </picture>

        <div ref="coverTop" class="absolute top-0 left-0 h-full w-full origin-left bg-gray-50"></div>
      </div>

      <div class="relative h-2/5 overflow-hidden rounded-xl">
        <picture>
          <source srcset="/img/webp/cryotainer-img-3.webp" type="image/webp" />
          <source srcset="/img/cryotainer-img-3.jpg" type="image/jpeg" />
          <img ref="imgBottom" class="block h-full w-full origin-center transform object-cover" src="" />
        </picture>

        <div ref="coverBottom" class="absolute top-0 left-0 h-full w-full origin-left bg-gray-50"></div>
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
