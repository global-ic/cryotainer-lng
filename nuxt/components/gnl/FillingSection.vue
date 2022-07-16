<script setup lang="ts">
import GasPumpIcon from '~icons/ph/gas-pump';
</script>

<template>
  <section class="overflow-hidden py-8 md:py-0">
    <UiContainer class="grid items-center gap-8 md:grid-cols-2 md:gap-0">
      <div>
        <div
          aria-hidden="true"
          class="flex h-12 w-12 items-center justify-center rounded-full border-8 border-primary-50 bg-primary-100 text-primary-600"
        >
          <GasPumpIcon class="h-6 w-6" />
        </div>

        <h2 class="mt-6 font-headline text-3xl font-semibold uppercase text-zinc-900 sm:text-4xl">
          Estación de regasificación
        </h2>

        <p class="mt-4 text-lg text-zinc-500 md:mt-8">
          En Cryotainer LNG ofrecemos las soluciones de almacenamiento y regasificación de gas natural más
          completas en México para clientes comerciales o industriales, incluidas las plantas de generación
          eléctrica.<br /><br />
          En comparación con los servicios de tubería tradicionales o gasoductos, nuestras aplicaciones fuera
          de la red brindan un acceso inigualable.
        </p>

        <NuxtLink :to="{ name: 'contacto' }" class="btn btn-primary mt-8">Contáctanos</NuxtLink>
      </div>

      <div class="relative h-80 md:h-[35rem] lg:h-[80vh]">
        <picture>
          <source srcset="/img/webp/cryotainer-img-18.webp" type="image/webp" />
          <source srcset="/img/cryotainer-img-18.jpg" type="image/jpeg" />
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
