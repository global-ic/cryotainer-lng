<script setup lang="ts">
defineEmits(['openMobileMenu']);

const globals = useGlobalStore();

const SCROLL_ACTIVE = 50;
const { y: scrollPos } = useWindowScroll();

const headerVariant = useHeaderVariant();

const displayMode = computed(() => {
  if (headerVariant.value === 'dark') return 'dark';
  return scrollPos.value >= SCROLL_ACTIVE ? 'dark' : 'light';
});
</script>

<template>
  <ClientOnly>
    <header
      :class="[
        scrollPos > SCROLL_ACTIVE && 'bg-zinc-50 bg-opacity-60 backdrop-blur backdrop-filter',
        'fixed inset-x-0 top-0 z-20 transition-all duration-300',
      ]"
    >
      <UiContainer class="flex items-center justify-between py-4">
        <NuxtLink
          to="/"
          :class="[
            'font-headline text-xl font-bold uppercase md:text-2xl',
            displayMode === 'dark' ? 'text-zinc-800' : 'text-white',
          ]"
          >Cryotainer LNG</NuxtLink
        >

        <nav class="hidden space-x-10 md:flex">
          <NuxtLink
            v-for="item in globals.mainNav"
            :key="`ni-${item.name}`"
            :to="item.route || '/'"
            active-class="underline"
            :class="['nav-link', displayMode === 'dark' ? 'text-zinc-800' : 'text-white']"
            >{{ item.name }}</NuxtLink
          >
        </nav>

        <TheMobileNavigation :scrolled="displayMode === 'dark'" />
      </UiContainer>
    </header>
  </ClientOnly>
</template>

<style scoped>
.nav-link {
  @apply font-light uppercase;
}
</style>
