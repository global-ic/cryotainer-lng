<script setup lang="ts"></script>

<template>
  <NuxtLayout name="main">
    <Head>
      <Title>Cryotainer LNG - Liquid Natural Gas</Title>
    </Head>

    <div class="flex h-screen w-full items-center justify-center bg-primary-900">
      <div class="flex flex-col items-center">
        <div class="max-w-4xl">
          <h1 class="text-center font-headline text-6xl font-light uppercase text-white">
            Soluciones energéticas en <span class="font-bold">consumo de combustible</span>
          </h1>
        </div>

        <NuxtLink
          class="mt-8 inline-block rounded-md bg-primary-100 px-8 py-2 font-headline text-xs uppercase text-primary-900"
          :to="{ name: 'nosotros' }"
          >Sobre nosotros</NuxtLink
        >
      </div>
    </div>
  </NuxtLayout>
</template>
