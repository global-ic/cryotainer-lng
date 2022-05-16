<script setup lang="ts">
import { PropType } from 'vue';
import { NavigationItem as NavItemType } from '~/types';

defineProps({
  navigation: { type: Array as PropType<NavItemType[]>, required: true },
});

defineEmits(['close']);
</script>

<template>
  <div class="w-full overflow-y-auto bg-white pt-5 pb-4">
    <div class="flex flex-shrink-0 select-none items-center space-x-2 px-4">
      <img class="w-3/5" alt="Logotipo Cryotainer" src="/img/cryotainer-logo.png" />
    </div>

    <nav aria-label="Navegación" class="mt-5">
      <div class="space-y-1">
        <RouterLink
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
        </RouterLink>
      </div>
    </nav>

    <TheSocialIcons class="mt-3 ml-4" />
  </div>
</template>
