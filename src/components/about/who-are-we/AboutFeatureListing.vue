<script setup lang="ts">
import type { WhoAreWeFeature } from '~/types';

defineProps({ feature: { type: Object as PropType<WhoAreWeFeature>, required: true } });
</script>

<template>
  <li class="flex flex-col">
    <div
      aria-hidden="true"
      class="flex h-12 w-12 items-center justify-center rounded-full border-8 border-primary-50 bg-primary-100 text-primary-600"
    >
      <UiIcon :name="feature.icon" class="h-6 w-6" />
    </div>

    <h4 class="mt-5 font-headline text-xl font-semibold text-zinc-900">{{ feature.title }}</h4>

    <div v-html="feature.description" class="mt-2 text-zinc-500"></div>
  </li>
</template>
