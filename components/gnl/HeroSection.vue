<script setup lang="ts"></script>

<template>
  <section class="pt-32">
    <UiContainer>
      <div class="mx-auto flex max-w-5xl flex-col items-center">
        <picture>
          <source srcset="/img/webp/cryotainer-logo.webp" type="image/webp" />
          <source srcset="/img/cryotainer-logo.png" type="image/png" />
          <img class="h-8 sm:h-10" src="" alt="Logo Cryotainer LNG" />
        </picture>

        <h1 class="mt-4 text-center font-headline text-4xl font-semibold uppercase text-zinc-900 md:text-6xl">
          Gas Natural Licuado
        </h1>
        <p class="mt-6 max-w-3xl text-center text-lg text-zinc-500 md:text-xl">
          El mejor combustible para recorrer largas distancias siendo mas económico, seguro y ecológico.
        </p>
      </div>

      <picture>
        <source srcset="/img/webp/cryotainer-img-14.webp" type="image/webp" />
        <source srcset="/img/cryotainer-img-14.jpg" type="image/jpeg" />
        <img
          src=""
          alt="Tanque de GNL"
          class="mt-16 max-h-[25rem] w-full rounded-xl object-cover sm:h-[50vh]"
        />
      </picture>
    </UiContainer>
  </section>
</template>
