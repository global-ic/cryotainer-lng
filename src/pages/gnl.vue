<script setup lang="ts">
useHead({ title: 'Gas Natural Licuado' });
definePageMeta({ header: { color: 'dark' } });
</script>

<template>
  <main>
    <GnlHeroSection />
    <GnlAboutSection />
    <GnlTransportSection />
    <GnlTanksSection />
    <GnlFillingSection />
  </main>
</template>
