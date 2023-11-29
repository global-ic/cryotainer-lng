<script setup lang="ts">
import type { NavigationItem } from '~/types';

defineEmits(['openMobileMenu']);
defineProps({ navigation: { type: Array as PropType<NavigationItem[]>, required: true } });

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
        scrollPos > SCROLL_ACTIVE && 'border-gray-200 bg-zinc-50 bg-opacity-60 backdrop-blur backdrop-filter',
        'fixed inset-x-0 top-0 z-20 flex items-center justify-between border-b border-transparent px-4 py-4 transition-all duration-300 lg:px-8',
      ]"
    >
      <NuxtLink
        to="/"
        :class="[
          'font-headline text-xl font-bold uppercase md:text-2xl',
          displayMode === 'dark' ? 'text-zinc-800' : 'text-white',
        ]"
        >Cryotainer LNG</NuxtLink
      >

      <nav class="hidden space-x-10 lg:flex">
        <NuxtLink
          v-for="item in navigation"
          :key="`ni-${item.name}`"
          :to="item.route || '/'"
          active-class="underline"
          :class="['nav-link', displayMode === 'dark' ? 'text-zinc-800' : 'text-white']"
          >{{ item.name }}</NuxtLink
        >
      </nav>

      <button
        type="button"
        @click="$emit('openMobileMenu')"
        :class="[
          'relative ml-3 rounded p-1 transition-colors hover:bg-primary-800 hover:text-white lg:hidden',
          displayMode === 'dark' ? 'text-zinc-800' : 'text-white',
        ]"
      >
        <UiIcon name="i-ph-list-bold" class="h-6 w-6" />
      </button>
    </header>
  </ClientOnly>
</template>

<style scoped>
.nav-link {
  @apply font-light uppercase;
}
</style>
