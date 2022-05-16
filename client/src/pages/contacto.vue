<script setup lang="ts">
useHead({ title: 'Cryotainer LNG - Contáctanos' });
</script>

<template>
  <div class="flex h-screen w-full gap-8 px-8 py-24 pb-8">
    <img
      class="block h-full w-1/2 rounded-xl object-cover"
      src="https://images.pexels.com/photos/785529/pexels-photo-785529.jpeg?auto=compress&cs=tinysrgb&w=1000&dpr=1"
      alt=""
    />

    <div class="flex flex-1 flex-col items-center justify-center">
      <div class="max-w-sm text-center text-zinc-700">
        <h1 class="font-headline text-6xl font-bold uppercase">Ponte en contacto</h1>
        <span class="mt-4 block text-sm"
          >Si tienes algún proyecto o idea y requieres asesoría técnica no dudes en contactarnos.</span
        >
      </div>

      <ul aria-label="Medios de contacto" class="mt-20 flex w-full max-w-sm flex-col space-y-4">
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

<route lang="yaml">
name: contact
meta:
  headerMode: dark
</route>
