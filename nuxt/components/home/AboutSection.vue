<template>
  <section aria-label="Nosotros">
    <div
      class="mx-auto flex h-screen w-full max-w-lg flex-col items-center justify-center gap-4 px-4 md:gap-8 lg:px-8"
    >
      <h2
        class="text-center font-headline text-3xl font-bold uppercase text-zinc-800 md:text-4xl lg:text-5xl"
      >
        Especialistas en soluciones de Gas Natural
      </h2>

      <div class="space-y-4 text-center text-lg text-zinc-700">
        <p>
          En Cryotainer LNG somos empresa 100% mexicana donde brindamos la más alta calidad para la entrega y
          distribución de gas natural de forma eficiente, profesional segura y sobre todo ecológica.
        </p>
        <p>
          Contamos con especialistas calificados para ofrecer soluciones personalizadas para cada sector, sea
          minería, invernaderos, transporte, energía eléctrica, etc.
        </p>
      </div>

      <NuxtLink class="btn btn-outlined" :to="{ name: 'contacto' }">Contáctanos</NuxtLink>
    </div>
  </section>
</template>
