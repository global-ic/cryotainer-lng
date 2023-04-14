<script setup lang="ts">
import type { NavigationItem } from '~/types';

const route = useRoute();

defineEmits(['openMobileMenu']);
defineProps({ navigation: { type: Array as PropType<NavigationItem[]>, required: true } });

const SCROLL_ACTIVE = 50;
const { y: yScroll } = useWindowScroll();

const isDarkColor = computed(() => route.meta?.header?.color === 'dark' || false);
</script>

<template>
  <header
    :class="[
      yScroll > SCROLL_ACTIVE && 'border-gray-200 bg-white bg-opacity-60 backdrop-blur backdrop-filter',
      'fixed inset-x-0 top-0 z-20 flex items-center justify-between border-b border-transparent py-4 px-4 transition-all duration-300 lg:px-8',
    ]"
  >
    <NuxtLink
      to="/"
      :class="[
        'font-headline text-xl font-bold uppercase md:text-2xl',
        isDarkColor || yScroll > SCROLL_ACTIVE ? 'text-zinc-800' : 'text-white',
      ]"
      >Cryotainer LNG</NuxtLink
    >

    <nav class="hidden space-x-10 lg:flex">
      <NuxtLink
        v-for="item in navigation"
        :key="`ni-${item.name}`"
        :to="item.route || '/'"
        active-class="underline"
        :class="['nav-link', isDarkColor || yScroll > SCROLL_ACTIVE ? 'text-zinc-800' : 'text-white']"
        >{{ item.name }}</NuxtLink
      >
    </nav>

    <button
      type="button"
      @click="$emit('openMobileMenu')"
      :class="[
        'relative ml-3 rounded p-1 transition-colors hover:bg-primary-800 hover:text-white lg:hidden',
        isDarkColor || yScroll > SCROLL_ACTIVE ? 'text-zinc-800' : 'text-white',
      ]"
    >
      <Icon name="ph:list-bold" class="h-6 w-6" />
    </button>
  </header>
</template>

<style scoped>
.nav-link {
  @apply font-light uppercase;
}
</style>
