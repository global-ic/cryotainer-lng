<script setup lang="ts">
import type { NuxtError } from '#app';

const env = useRuntimeConfig();
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
      <span class="text-sm font-semibold uppercase tracking-wide text-primary-600">Error 404</span>
      <h1 class="mt-2 font-headline text-4xl font-bold uppercase tracking-tight text-gray-950 sm:text-5xl">
        Página no encontrada
      </h1>
      <span class="mt-2 text-lg text-gray-600"
        >Parece que la página que visitaste no existe o fue movida.</span
      >

      <UiButton class="hero-link mt-8" label="Volver al inicio" />
    </UiContainer>
  </div>
</template>
