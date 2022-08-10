<script setup lang="ts">
import ColumnsIcon from '~icons/ph/columns';
import CrosshairIcon from '~icons/ph/crosshair';
import FlameIcon from '~icons/ph/flame';
import PlaceholderIcon from '~icons/ph/placeholder';
import ShieldCheckeredIcon from '~icons/ph/shield-checkered';

const features = [
  {
    icon: ColumnsIcon,
    title: 'Construcción de doble pared',
    body: 'Un tanque dentro de otro tanque garantizando la menor tasa de vaporización.',
  },
  {
    icon: PlaceholderIcon,
    title: 'Materiales de aislamiento al vacío',
    body: 'Diseñados con super aislamiento y con un vacío menor a 10 micrones en caliente, llegando a 1 en estado frío.',
  },
  {
    icon: ShieldCheckeredIcon,
    title: 'Robusto contra golpes',
    body: 'Nuestros tanques están probados para soportar hasta 30 ft. de caídas del tanque y hasta 10 ft. de caídas sobre el lado de las válvulas.',
  },
  {
    icon: CrosshairIcon,
    title: 'Seguro contra vandalismo',
    body: 'Equipamos nuestros tanques con la mejor protección anti-vandalismo, probados contra disparos de .44 magnum.',
  },
  {
    icon: FlameIcon,
    title: 'Prueba de exposición',
    body: 'Nuestros tanques están probados y sin efecto contra exposición al fuego.',
  },
];
</script>

<template>
  <section class="py-24">
    <UiContainer>
      <div class="mx-auto flex max-w-3xl flex-col items-center">
        <h2 class="mini-title text-center">Tanques de GNL</h2>
        <span class="mt-3 text-center font-headline text-4xl font-semibold uppercase text-zinc-900"
          >Almacenado para dar confianza</span
        >
        <p class="mt-5 text-center text-lg text-zinc-500 md:text-xl">
          Todos nuestros tanques de GNL están diseñados para brindar la mayor calidad y confianza para
          múltiples usos.
        </p>
      </div>

      <picture>
        <source srcset="/img/webp/cryotainer-img-32.webp" type="image/webp" />
        <source srcset="/img/cryotainer-img-32.jpg" type="image/jpeg" />
        <img
          src=""
          alt="Camiones siendo cargados con GNL"
          class="mt-16 max-h-[30rem] w-full rounded-xl object-cover sm:h-[60vh]"
        />
      </picture>

      <ul class="mt-16 flex flex-wrap justify-center gap-y-8 md:gap-y-16">
        <li v-for="feature in features" class="flex flex-col items-center sm:w-1/2 sm:px-4 lg:w-1/3">
          <div
            aria-hidden="true"
            class="flex h-12 w-12 items-center justify-center rounded-full border-8 border-primary-50 bg-primary-100 text-primary-600"
          >
            <component :is="feature.icon" class="h-6 w-6" />
          </div>

          <h4 class="mt-5 text-center font-headline text-xl font-semibold text-zinc-900">
            {{ feature.title }}
          </h4>
          <p class="mt-2 text-center text-zinc-500">{{ feature.body }}</p>
        </li>
      </ul>
    </UiContainer>
  </section>
</template>
