<script setup lang="ts">
import { gsap } from 'gsap';

defineProps<{ scrolled?: boolean }>();

const globals = useGlobalStore();

// Animation
const isOpen = useState('mobile-menu:show', () => false);
const menuRef = useState<HTMLElement | null>('mobile-menu:wrapper', () => null);
let tl: gsap.core.Timeline | null = null;

function playReveal() {
  if (!menuRef) return;
  isOpen.value = true;

  if (tl) tl.revert();

  tl = gsap.timeline({
    onComplete() {
      tl?.revert();
    },
  });

  tl.set(menuRef.value, { pointerEvents: 'auto' });
  tl.fromTo(menuRef.value, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'expo.out' });
  tl.fromTo(
    '.reveal',
    { y: '-20px', opacity: 0 },
    { y: 0, opacity: 1, duration: 0.3, stagger: 0.02, ease: 'back.out(1)' },
  );
}

function hideMenu() {
  if (!menuRef) return;

  if (tl) tl.revert();

  tl = gsap.timeline({
    onComplete() {
      tl?.revert();
      isOpen.value = false;
    },
  });

  tl.set(menuRef.value, { pointerEvents: 'none' });
  tl.to('.reveal', { y: '-20px', opacity: 0, duration: 0.8, ease: 'expo.out' });
  tl.to(menuRef.value, { opacity: 0, duration: 1.6, ease: 'expo.out' }, '<');
}

onBeforeUnmount(() => {
  tl = null;
});
</script>

<template>
  <div class="relative md:hidden">
    <UiButton
      size="icon"
      aria-label="Abrir menú"
      :variant="scrolled ? 'black-ghost' : 'white-ghost'"
      @click="playReveal"
    >
      <UiIcon name="i-ph-list-bold" class="h-5 w-5" />
    </UiButton>

    <ClientOnly>
      <Teleport to="body">
        <div
          ref="menuRef"
          v-show="isOpen"
          class="fixed inset-0 z-40 h-full w-full overflow-y-auto bg-primary-950/90 backdrop-blur backdrop-saturate-150 backdrop-filter"
        >
          <UiContainer class="relative">
            <UiButton
              size="icon"
              variant="white-ghost"
              aria-label="Cerrar menú"
              class="absolute right-4 top-4"
              @click="hideMenu"
            >
              <UiIcon name="i-ph-x-bold" class="h-5 w-5" />
            </UiButton>

            <nav class="flex flex-col gap-y-4 pt-20 sm:gap-y-6">
              <UiLink
                v-for="(item, idx) in globals.mainNav"
                :key="`item:${idx}`"
                :to="item.route"
                @click="hideMenu"
                active-class="underline text-primary-200"
                inactive-class="text-white hover:underline"
                class="reveal block text-left font-headline text-3xl uppercase hover:opacity-70"
                >{{ item.name }}</UiLink
              >
            </nav>
          </UiContainer>
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>
