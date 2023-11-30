<script setup lang="ts">
import type { NavigationItem as NavItemType } from '~/types';

defineProps({ navigation: { type: Array as PropType<NavItemType[]>, required: true } });
defineEmits(['close']);
</script>

<template>
  <div class="w-full overflow-y-auto bg-white pb-4 pt-5">
    <div class="flex flex-shrink-0 select-none items-center space-x-2 px-4">
      <picture>
        <source srcset="/img/webp/cryotainer-logo.webp" type="image/webp" />
        <source srcset="/img/cryotainer-logo.png" type="image/png" />
        <img class="w-3/5" alt="Logotipo Cryotainer" src="" />
      </picture>
    </div>

    <nav aria-label="Navegación" class="mt-5">
      <div class="space-y-1">
        <NuxtLink
          :key="item.name"
          @click="$emit('close')"
          :to="item.route || '/'"
          v-for="item in navigation"
          v-slot="{ isActive, isExactActive }"
        >
          <div
            :class="[
              isActive || isExactActive
                ? 'bg-primary-800 text-white'
                : 'text-zinc-700 hover:bg-primary-50 hover:text-primary-900',
              'flex items-center px-4 py-2 font-headline font-semibold uppercase',
            ]"
            :aria-current="isActive ? 'page' : undefined"
          >
            {{ item.name }}
          </div>
        </NuxtLink>
      </div>
    </nav>

    <SocialIcons class="ml-4 mt-3" />
  </div>
</template>