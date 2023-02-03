<script setup lang="ts">
import type { PropType } from 'vue';
import type { NavigationItem } from '~/types';
import EnvelopeIcon from '~icons/ph/envelope-simple-open-fill';
import MapPinIcon from '~icons/ph/map-pin-fill';
import PhoneIcon from '~icons/ph/phone-fill';

defineProps({
  navigation: { type: Array as PropType<NavigationItem[]>, required: true },
});
</script>

<template>
  <footer class="bg-white px-4 pt-16 lg:px-8">
    <div class="mx-auto flex w-full max-w-7xl flex-col">
      <div class="flex flex-col gap-10 md:flex-row">
        <div class="w-full space-y-8 md:max-w-xs">
          <NuxtLink to="/">
            <picture>
              <source srcset="/img/webp/cryotainer-logo.webp" type="image/webp" />
              <source srcset="/img/cryotainer-logo.png" type="image/png" />
              <img src="" class="block w-full max-w-[15rem]" alt="Logo Cryotainer" />
            </picture>
          </NuxtLink>

          <span class="block text-zinc-500"
            >Empresa de proyectos e instalaciones criogénicas de confianza.</span
          >

          <BaseSocialIcons />
        </div>

        <div class="flex flex-1 flex-col gap-10 lg:flex-row">
          <div class="footer-link-col">
            <span class="footer-subtitle">Sitio web</span>

            <NuxtLink v-for="link in navigation" :to="link.route!" class="footer-link">{{
              link.name
            }}</NuxtLink>
          </div>

          <div class="footer-link-col">
            <span class="footer-subtitle">Contacto</span>

            <span aria-label="Ubicación" class="flex items-center gap-2 text-zinc-700">
              <MapPinIcon class="h-5 w-5" /> México
            </span>

            <a
              aria-label="Correo electrónico"
              href="mailto:contacto@cryotainerlng.com"
              class="footer-link flex items-center gap-2">
              <EnvelopeIcon class="h-5 w-5" /> contacto@cryotainerlng.com
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden="true" class="mt-10 block h-px w-full bg-zinc-200"></div>

      <div class="flex flex-col items-center justify-between gap-1 py-4 md:flex-row">
        <span class="text-center text-sm text-zinc-400 md:text-left"
          >Copyright &copy; {{ new Date().getFullYear() }} Cryotainer LNG</span
        >

        <span class="text-center text-sm text-zinc-400 md:text-right"
          >Diseño y Desarrollo por
          <a
            href="https://chrisgvdev.com"
            class="font-semibold text-zinc-600 hover:text-zinc-800"
            target="_blank"
            >CGV WEB</a
          >
          y
          <a
            href="https://globalic.com.mx"
            class="font-semibold text-zinc-600 hover:text-zinc-800"
            target="_blank"
            >Global IC</a
          ></span
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link-col {
  @apply flex flex-1 flex-col items-start space-y-5;
}

.footer-link {
  @apply text-zinc-700 hover:text-zinc-400;
}

.footer-subtitle {
  @apply font-semibold uppercase tracking-wide text-zinc-600;
}
</style>
