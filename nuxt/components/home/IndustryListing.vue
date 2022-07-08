<script setup lang="ts">
import type { PropType } from 'vue';
import type { HomeIndustry } from '~/types';

defineProps({ info: { type: Object as PropType<HomeIndustry>, required: true } });
</script>

<template>
  <div :aria-label="`Industria: ${info.title}`">
    <div class="aspect-video max-h-64 w-full">
      <img class="h-full w-full rounded-xl object-cover" :src="info.image" />
    </div>
    <h4 class="mt-4 font-headline text-2xl font-semibold text-zinc-800">{{ info.title }}</h4>
    <p class="mt-2 text-zinc-600">{{ info.desc }}</p>
  </div>
</template>
