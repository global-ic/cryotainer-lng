<script setup lang="ts">
useHead({ title: 'Especialistas en Equipo Criogénico' });

const header = useHeaderVariant();
header.value = 'light';
</script>

<template>
  <main v-once>
    <HomeHeroSection />
    <HomeAboutSection />
    <HomeServicesSection />
    <HomeValuesSection />
    <HomeGnlSection />
  </main>
</template>
