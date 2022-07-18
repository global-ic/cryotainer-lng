<script setup lang="ts"></script>

<template>
  <section class="py-24">
    <UiContainer>
      <div class="flex flex-col gap-8 md:flex-row lg:gap-16">
        <div class="w-full md:w-1/2 xl:w-full xl:max-w-3xl">
          <span class="mini-title">Sobre Cryotainer LNG</span>
          <h2 class="mt-3 font-headline text-4xl font-semibold uppercase text-zinc-900 lg:text-5xl">
            Proveedores de equipos y servicios de primer nivel
          </h2>

          <div class="mt-8 flex gap-2">
            <NuxtLink class="btn btn-primary" :to="{ name: 'contacto' }">Contáctenos</NuxtLink>
            <NuxtLink class="btn btn-outlined" :to="{ name: 'nosotros' }">Más información</NuxtLink>
          </div>
        </div>

        <p class="flex-1 text-lg text-zinc-500 sm:text-xl">
          En Cryotainer LNG somos empresa 100% mexicana donde brindamos la más alta calidad para la entrega y
          distribución de gas natural de forma eficiente, profesional segura y sobre todo ecológica.
        </p>
      </div>

      <picture>
        <source srcset="/img/webp/cryotainer-img-25.webp" type="image/webp" />
        <source srcset="/img/cryotainer-img-25.jpg" type="image/jpeg" />
        <img
          src=""
          alt="Camiones siendo cargados con GNL"
          class="mt-16 max-h-[30rem] w-full rounded-xl object-cover sm:h-[60vh]"
        />
      </picture>
    </UiContainer>
  </section>
</template>
