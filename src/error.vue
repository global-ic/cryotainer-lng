<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{ error: object }>();

useHead({ title: formatPageTitle('Ocurrió un error') });

function isNuxtError(error?: object): error is NuxtError & { url?: string; cause?: string } {
  return typeof error === 'object' && 'statusCode' in error && 'message' in error;
}

const usableError = computed(() => {
  const defaultErrMsg = 'Algo salió mal de nuestro lado. ¡Vuelve más tarde!';

  if (isNuxtError(props.error)) {
    if (props.error.cause === 'app') return { status: 500, canGoHome: false, msg: defaultErrMsg };

    const canGoHome = props.error.url !== '/';

    if (props.error.statusCode === 500) return { msg: defaultErrMsg, status: 500, canGoHome };

    if (props.error.statusCode === 404) {
      // Other 404 error
      return { msg: 'Error 404. El recurso ha sido movido o no existe.', status: 404, canGoHome };
    }

    return {
      canGoHome: true,
      status: props.error.statusCode,
      msg: 'Error desconocido. Intenta ir a la página principal.',
    };
  }

  return {
    msg: 'Error desconocido. ¡Estamos trabajando en solucionarlo! Vuelve pronto.',
    status: 500,
    canGoHome: false,
  };
});

function goHome() {
  clearError({ redirect: '/' });
}
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <Html lang="es" />
    <Body class="bg-gray-50 antialiased selection:bg-primary-400/20 selection:text-primary-600" />

    <UiContainer class="flex flex-col items-center">
      <picture>
        <source srcset="/img/webp/cryotainer-logo.webp" type="image/webp" />
        <source srcset="/img/cryotainer-logo.png" type="image/png" />
        <img src="" class="-mt-16 mb-8 h-8 md:-mt-20 md:h-12" alt="Logo Cryotainer" />
      </picture>

      <h1 class="text-center font-headline text-3xl font-semibold uppercase text-gray-950 md:text-4xl">
        Ocurrió un error
      </h1>

      <span class="mt-1 text-center text-gray-950 opacity-70 md:text-lg">{{ usableError.msg }}</span>

      <UiButton v-if="usableError.canGoHome" class="mt-8" label="Volver al inicio" @click="goHome" />
    </UiContainer>
  </div>
</template>
