<script setup lang="ts">
const features = [
  'Servicios y repuestos',
  'Válvulas en inventario rápido',
  'Presencia y asesoramiento a personal',
  'Todo en un solo lugar',
];
</script>

<template>
  <section class="overflow-hidden">
    <UiContainer class="grid grid-cols-2 items-center gap-8">
      <div>
        <h2 class="font-headline text-4xl font-bold uppercase text-zinc-900">
          Décadas de experiencia nos respaldan
        </h2>

        <ul class="mt-8 grid gap-5">
          <li v-for="feature in features" class="flex items-center">
            <div
              aria-hidden="true"
              class="grid h-7 w-7 place-items-center rounded-full bg-primary-100 text-primary-500"
            >
              <IconsUiCheck class="h-7 w-7" />
            </div>
            <span class="ml-3 text-lg text-zinc-500">{{ feature }}</span>
          </li>
        </ul>

        <div class="mt-8 flex gap-2">
          <NuxtLink :to="{ name: 'contacto' }" class="btn btn-primary">Contáctanos</NuxtLink>
          <NuxtLink :to="{ name: 'gnl' }" class="btn btn-outlined">Más información</NuxtLink>
        </div>
      </div>

      <div class="relative h-[45rem]">
        <picture>
          <source srcset="/img/webp/cryotainer-img-15.webp" type="image/webp" />
          <source srcset="/img/cryotainer-img-15.jpg" type="image/jpeg" />
          <img
            src=""
            alt="Camión con tanque GNL"
            class="absolute h-full w-[50vw] max-w-none rounded-tl-xl object-cover"
          />
        </picture>
      </div>
    </UiContainer>
  </section>
</template>
