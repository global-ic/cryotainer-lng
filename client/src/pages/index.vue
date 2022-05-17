<script setup lang="ts">
useHead({ title: 'Cryotainer LNG - Liquid Natural Gas' });
</script>

<template>
  <main>
    <section
      aria-label="Portada"
      style="background-image: url(/img/cryotainer-hero.jpg)"
      class="flex h-screen w-full items-center justify-center bg-zinc-900/50 bg-cover bg-center"
    >
      <div class="flex flex-col items-center px-4 lg:px-8">
        <div class="max-w-4xl">
          <h1
            class="text-center font-headline text-4xl font-light uppercase text-white md:text-5xl lg:text-6xl"
          >
            Soluciones energéticas en <span class="font-bold">consumo de combustible</span>
          </h1>
        </div>

        <RouterLink class="btn btn-primary mt-8" :to="{ name: 'about' }">Sobre nosotros</RouterLink>
      </div>
    </section>

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
            En Cryotainer LNG somos empresa 100% mexicana donde brindamos la más alta calidad para la entrega
            y distribución de gas natural de forma eficiente, profesional segura y sobre todo ecológica.
          </p>
          <p>
            Contamos con especialistas calificados para ofrecer soluciones personalizadas para cada sector,
            sea minería, invernaderos, transporte, energía eléctrica, etc.
          </p>
        </div>

        <RouterLink class="btn btn-outlined" :to="{ name: 'contact' }">Contáctanos</RouterLink>
      </div>
    </section>

    <section aria-label="Servicios" class="flex h-screen items-center">
      <div class="flex w-full flex-col items-center gap-8 px-4 lg:flex-row lg:px-8">
        <div class="max-w-xl">
          <h3 class="font-headline text-3xl font-bold uppercase text-zinc-800 md:text-4xl">
            Nuestros Servicios
          </h3>
          <p class="mt-2 font-light text-zinc-600 lg:text-xl">
            Desarrollamos todos nuestros proyectos cuidando cada detalle del mismo para entregar servicios de
            alta calidad que satisfacen las necesidades de nuestros clientes.
          </p>
          <RouterLink class="btn btn-outlined mt-6" :to="{ name: 'services' }">Conoce más</RouterLink>
        </div>

        <div
          class="flex h-[60vh] w-full items-end justify-center overflow-hidden rounded-xl bg-cover bg-center"
          style="background-image: url(/img/alpha-cs-proyecto-fast-track-destacada.jpg)"
        >
          <div class="safe-zone-bg w-full px-6 pb-6 text-center">
            <span class="font-headline text-2xl font-bold uppercase text-white md:text-4xl lg:text-5xl"
              >Instalación</span
            >
          </div>
        </div>
      </div>
    </section>

    <section aria-label="Gas Natural Licuado" class="h-[70vh] p-4 md:h-screen lg:p-8">
      <div
        style="background-image: url(/img/cryotainer-gnl-ship.jpg)"
        class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-cover bg-center p-4 lg:p-8"
      >
        <div class="pointer-events-none absolute inset-0 z-0 bg-zinc-900 opacity-50"></div>

        <div class="z-10 w-full max-w-xl space-y-6 text-center md:space-y-8">
          <h2 class="font-headline text-2xl font-bold uppercase text-white md:text-4xl lg:text-5xl">
            Gas Natural Licuado (GNL)
          </h2>
          <p class="text-lg text-zinc-100">
            Le demanda de gas natural está creciendo constantemente, dando oportunidad a un cambio ecológico
            para las energías en México… El Gas Natural Licuado (GNL).
          </p>
          <RouterLink class="btn btn-outlined-white" :to="{ name: 'gnl' }">Aprende más</RouterLink>
        </div>
      </div>
    </section>

    <section aria-label="Industrias" class="mt-16 p-4 lg:p-8">
      <div class="mx-auto w-full max-w-7xl">
        <h2 class="text-center font-headline text-3xl font-bold uppercase text-zinc-800 md:text-4xl">
          Industrias en las que operamos
        </h2>

        <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <HomeIndustry
            :info="{
              title: 'Energía y Minería',
              image:
                'https://images.pexels.com/photos/1058142/pexels-photo-1058142.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
              desc: 'Gestionamos una gran variedad de contenedores cisterna para líquidos, gases y criogénicos diseñados para las necesidades de las industrias mineras y energéticas globales. Nuestros equipos en conjunto con nuestros expertos, han servido a las industrias de energía y minería México y USA.',
            }"
          />

          <HomeIndustry
            :info="{
              title: 'Gases',
              image:
                'https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
              desc: ' Contamos con una extensa cantidad de contenedores. Constantemente ampliamos nuestro catálogo de equipos y ofrecemos a nuestros clientes lo último en tecnología de contenedores de tanques criogénicos y de gas. En Cryotainer proporcionamos contenedores para el transporte y almacenamiento de una amplia variedad de gases.',
            }"
          />

          <HomeIndustry
            :info="{
              title: 'Alimentos y bebidas',
              image:
                'https://images.pexels.com/photos/3230214/pexels-photo-3230214.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
              desc: ' Nuestra capacidad para diseñar equipos únicos que se adapten a los requisitos de cada cliente nos ha diferenciado de la competencia en este mercado. Incluso contamos con una flota especial y dedicada al servicio de grado alimenticio.',
            }"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<route lang="yaml">
name: home
</route>
