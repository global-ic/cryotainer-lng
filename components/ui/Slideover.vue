<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';

defineProps({
  isOpen: { type: Boolean, default: false },
  hideOverlay: { type: Boolean, default: false },
  closeSrLabel: { type: String, default: 'Cerrar navegación' },
  direction: { type: String as PropType<'left' | 'right'>, default: 'left' },
});
defineEmits(['close']);
</script>

<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="aside" :class="['fixed inset-0 z-40 flex']" @close="$emit('close')">
      <TransitionChild
        as="template"
        v-if="!hideOverlay"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500/75 dark:bg-gray-800/75" />
      </TransitionChild>
      <div v-show="direction == 'right'" class="ml-auto w-14 flex-shrink-0" aria-hidden="true">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
      <TransitionChild
        as="template"
        enter="transition ease-in-out duration-300 transform"
        leave="transition ease-in-out duration-300 transform"
        :enter-from="direction == 'left' ? '-translate-x-full' : 'translate-x-full'"
        enter-to="translate-x-0"
        leave-from="translate-x-0"
        :leave-to="direction == 'left' ? '-translate-x-full' : 'translate-x-full'"
      >
        <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col focus:outline-none">
          <TransitionChild
            as="template"
            enter="ease-in-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div :class="['absolute top-0 pt-4', direction == 'left' ? 'right-0 -mr-12' : 'left-0 -ml-12']">
              <button
                type="button"
                @click="$emit('close')"
                class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span class="sr-only">{{ closeSrLabel }}</span>
                <Icon name="ph:x" class="h-6 w-6 text-white" />
              </button>
            </div>
          </TransitionChild>

          <!-- The main content -->
          <slot />
        </DialogPanel>
      </TransitionChild>
      <div v-show="direction == 'left'" class="w-14 flex-shrink-0" aria-hidden="true">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </Dialog>
  </TransitionRoot>
</template>
