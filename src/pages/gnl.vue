<script setup lang="ts">
useHead({ title: 'Gas Natural Licuado' });

const header = useHeaderVariant();
header.value = 'dark';
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
