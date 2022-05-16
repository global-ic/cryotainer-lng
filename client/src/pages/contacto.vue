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

      <div class="mt-20">Medios</div>
    </div>
  </div>
</template>

<route lang="yaml">
name: contact
meta:
  headerMode: dark
</route>
