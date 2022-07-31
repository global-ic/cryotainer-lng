<script setup lang="ts">
useHead({ title: 'Contáctanos' });
definePageMeta({
  header: {
    color: 'dark',
  },
});
</script>

<template>
  <div v-once class="flex min-h-screen w-full flex-col-reverse gap-8 px-4 pt-24 pb-8 md:flex-row lg:px-8">
    <div class="flex max-h-[80vh] w-full flex-col justify-center gap-8 overflow-hidden md:w-1/2">
      <picture class="h-2/5">
        <source srcset="/img/webp/cryotainer-img-2.webp" type="image/webp" />
        <source srcset="/img/cryotainer-img-2.jpg" type="image/jpeg" />
        <img class="block h-full w-full rounded-xl object-cover" src="" />
      </picture>

      <picture class="h-2/5">
        <source srcset="/img/webp/cryotainer-img-3.webp" type="image/webp" />
        <source srcset="/img/cryotainer-img-3.jpg" type="image/jpeg" />
        <img class="block h-full w-full rounded-xl object-cover" src="" />
      </picture>
    </div>

    <div class="flex flex-1 flex-col items-center justify-center">
      <div class="max-w-sm text-center text-zinc-700">
        <h1 class="font-headline text-4xl font-bold uppercase md:text-6xl">Contacto</h1>
      </div>

      <ul aria-label="Medios de contacto" class="mt-12 flex w-full max-w-sm flex-col space-y-4 md:mt-20">
        <li class="method-container">
          <span class="method-name">Ubicación</span>
          <span class="method-value">Guadalajara, Jalisco, México</span>
        </li>
        <li class="method-container">
          <span class="method-name">Correo</span>
          <a href="#" class="method-value">contacto@cryotainerlng.com</a>
        </li>
        <li class="method-container">
          <span class="method-name">Teléfono</span>
          <a href="#" class="method-value">+52 33 3954 2453</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.method-container {
  @apply flex justify-between gap-2;
}

.method-name {
  @apply text-sm font-medium uppercase tracking-wider text-zinc-800;
}

.method-value {
  @apply text-right text-zinc-700;
}

a.method-value {
  @apply hover:text-zinc-500;
}
</style>
