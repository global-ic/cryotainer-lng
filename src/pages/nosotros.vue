<script setup lang="ts">
useHead({ title: 'Sobre Nosotros' });

const header = useHeaderVariant();
header.value = 'light';
</script>

<template>
  <main v-once>
    <AboutHeroSection />
    <AboutWhoAreWeSection />
    <AboutUsSection />
    <AboutCallToAction />
  </main>
</template>
