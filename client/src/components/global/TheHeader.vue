<script setup lang="ts">
import { PropType } from 'vue';
import { NavigationItem } from '~/types';

const route = useRoute();

defineProps({
  navigation: { type: Array as PropType<NavigationItem[]>, required: true },
});

const SCROLL_ACTIVE = 50;
const { y: yScroll } = useWindowScroll();

const isDarkColor = computed(() => route.meta?.header?.color === 'dark' || false);
</script>

<template>
  <header
    :class="[
      yScroll > SCROLL_ACTIVE && 'border-gray-200 bg-white/80 backdrop-blur-md backdrop-filter',
      'fixed inset-x-0 top-0 z-20 flex items-center justify-between border-b border-transparent py-4 px-8 transition-all duration-300',
    ]"
  >
    <RouterLink
      :to="{ name: 'home' }"
      :class="[
        'font-headline text-2xl font-bold uppercase',
        isDarkColor || yScroll > SCROLL_ACTIVE ? 'text-zinc-800' : 'text-white',
      ]"
      >Cryotainer LNG</RouterLink
    >

    <nav class="flex space-x-10">
      <RouterLink
        v-for="item in navigation"
        :key="`ni-${item.name}`"
        :to="item.route || '/'"
        active-class="underline"
        :class="['nav-link', isDarkColor || yScroll > SCROLL_ACTIVE ? 'text-zinc-800' : 'text-white']"
        >{{ item.name }}</RouterLink
      >
      <!-- <RouterLink
        :to="{ name: 'about' }"
        active-class="underline"
        :class="['nav-link', isDarkColor || yScroll > SCROLL_ACTIVE ? 'text-zinc-800' : 'text-white']"
        >Nosotros</RouterLink
      >
      <RouterLink
        :to="{ name: 'gnl' }"
        active-class="underline"
        :class="['nav-link', isDarkColor || yScroll > SCROLL_ACTIVE ? 'text-zinc-800' : 'text-white']"
        >GNL</RouterLink
      >
      <RouterLink
        :to="{ name: 'services' }"
        active-class="underline"
        :class="['nav-link', isDarkColor || yScroll > SCROLL_ACTIVE ? 'text-zinc-800' : 'text-white']"
        >Servicios</RouterLink
      >
      <RouterLink
        :to="{ name: 'contact' }"
        active-class="underline"
        :class="['nav-link', isDarkColor || yScroll > SCROLL_ACTIVE ? 'text-zinc-800' : 'text-white']"
        >Contacto</RouterLink
      > -->
    </nav>
  </header>
</template>

<style scoped>
.nav-link {
  @apply font-light uppercase;
}
</style>
