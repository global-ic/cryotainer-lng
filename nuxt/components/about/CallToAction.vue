<script setup lang="ts">
const features = [
  'Servicios y repuestos',
  'Válvulas en inventario rápido',
  'Presencia y asesoramiento a personal',
  'Todo en un solo lugar',
];
</script>

<template>
  <section class="overflow-hidden py-8 md:py-0">
    <UiContainer class="grid items-center gap-8 md:grid-cols-2 md:gap-0">
      <div>
        <h2 class="font-headline text-3xl font-bold uppercase text-zinc-900 sm:text-4xl">
          Décadas de experiencia nos respaldan
        </h2>

        <ul class="mt-8 grid gap-5">
          <li v-for="feature in features" class="flex items-center">
            <div
              aria-hidden="true"
              class="grid h-5 w-5 place-items-center rounded-full bg-primary-100 text-primary-500 sm:h-7 sm:w-7"
            >
              <IconsUiCheck class="h-5 w-5 sm:h-7 sm:w-7" />
            </div>
            <span class="ml-3 text-zinc-500 sm:text-lg">{{ feature }}</span>
          </li>
        </ul>

        <div class="mt-8 flex gap-2">
          <NuxtLink :to="{ name: 'contacto' }" class="btn btn-primary">Contáctanos</NuxtLink>
          <NuxtLink :to="{ name: 'gnl' }" class="btn btn-outlined">Más información</NuxtLink>
        </div>
      </div>

      <div class="relative h-80 md:h-[35rem] lg:h-[80vh]">
        <picture>
          <source srcset="/img/webp/cryotainer-img-28.webp" type="image/webp" />
          <source srcset="/img/cryotainer-img-28.jpg" type="image/jpeg" />
          <img
            src=""
            alt="Tanque de GNL - Cryotainer LNG"
            class="absolute h-full w-full rounded-xl object-cover md:left-[10%] md:rounded-b-none lg:w-[50vw] lg:max-w-none"
          />
        </picture>
      </div>
    </UiContainer>
  </section>
</template>
