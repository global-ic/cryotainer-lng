<script setup lang="ts">
import EnvelopeIcon from '~icons/ph/envelope';
</script>

<template>
  <div aria-label="Redes sociales" class="flex space-x-6">
    <a href="#"><EnvelopeIcon class="social-icon" /></a>
  </div>
</template>

<style scoped>
.social-icon {
  @apply block h-6 w-6 text-zinc-400 hover:text-zinc-600;
}
</style>
