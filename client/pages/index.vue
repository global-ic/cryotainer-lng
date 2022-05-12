<script setup lang="ts"></script>

<template>
  <NuxtLayout name="main">
    <Head>
      <Title>Cryotainer LNG - Liquid Natural Gas</Title>
    </Head>

    <main>
      <section
        aria-label="Portada"
        style="background-image: url(/img/cryotainer-hero.jpg)"
        class="flex h-screen w-full items-center justify-center bg-zinc-900/50 bg-cover bg-center"
      >
        <div class="flex flex-col items-center">
          <div class="max-w-4xl">
            <h1 class="text-center font-headline text-6xl font-light uppercase text-white">
              Soluciones energéticas en <span class="font-bold">consumo de combustible</span>
            </h1>
          </div>

          <NuxtLink class="btn btn-primary mt-8" :to="{ name: 'nosotros' }">Sobre nosotros</NuxtLink>
        </div>
      </section>

      <section aria-label="Nosotros">
        <div class="mx-auto flex h-screen w-full max-w-lg flex-col items-center justify-center gap-8">
          <h2 class="text-center font-headline text-5xl font-bold uppercase text-zinc-800">
            Especialistas en soluciones de Gas Natural
          </h2>

          <div class="space-y-4 text-center text-lg text-zinc-700">
            <p>
              En Cryotainer LNG somos empresa 100% mexicana donde brindamos la más alta calidad para la
              entrega y distribución de gas natural de forma eficiente, profesional segura y sobre todo
              ecológica.
            </p>
            <p>
              Contamos con especialistas calificados para ofrecer soluciones personalizadas para cada sector,
              sea minería, invernaderos, transporte, energía eléctrica, etc.
            </p>
          </div>

          <NuxtLink class="btn btn-outlined mt-8" :to="{ name: 'contacto' }">Contáctanos</NuxtLink>
        </div>
      </section>

      <section aria-label="Servicios" class="flex h-screen items-center">
        <div class="flex w-full items-center gap-8 px-6">
          <div class="max-w-xl">
            <h3 class="font-headline text-4xl font-bold uppercase text-zinc-800">Nuestros Servicios</h3>
            <p class="mt-2 text-xl font-light text-zinc-600">
              Desarrollamos todos nuestros proyectos cuidando cada detalle del mismo para entregar servicios
              de alta calidad que satisfacen las necesidades de nuestros clientes.
            </p>
            <NuxtLink class="btn btn-outlined mt-6" :to="{ name: 'servicios' }">Conoce más</NuxtLink>
          </div>

          <div
            class="flex h-[60vh] w-full items-end justify-center overflow-hidden rounded-xl bg-cover bg-center"
            style="background-image: url(/img/alpha-cs-proyecto-fast-track-destacada.jpg)"
          >
            <div class="safe-zone-bg w-full px-6 pb-6 text-center">
              <span class="font-headline text-5xl font-bold uppercase text-white">Instalación</span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Gas Natural Licuado" class="h-screen p-8">
        <div
          style="background-image: url(/img/cryotainer-gnl-ship.jpg)"
          class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-cover bg-center"
        >
          <div class="pointer-events-none absolute inset-0 z-0 bg-zinc-900 opacity-50"></div>

          <div class="z-10 w-full max-w-xl space-y-8 text-center">
            <h2 class="font-headline text-5xl font-bold uppercase text-white">Gas Natural Licuado (GNL)</h2>
            <p class="text-lg text-zinc-100">
              Le demanda de gas natural está creciendo constantemente, dando oportunidad a un cambio ecológico
              para las energías en México… El Gas Natural Licuado (GNL).
            </p>
            <NuxtLink class="btn btn-outlined-white mt-6" :to="{ name: 'gnl' }">Aprende más</NuxtLink>
          </div>
        </div>
      </section>

      <section aria-label="Industrias" class="mt-16 p-8">
        <div class="mx-auto w-full max-w-7xl">
          <h2 class="text-center font-headline text-4xl font-bold uppercase text-zinc-800">
            Industrias en las que operamos
          </h2>

          <div class="mt-10 flex gap-6">
            <HomeIndustry
              class="flex-1"
              :info="{
                title: 'Energía y Minería',
                image:
                  'https://images.pexels.com/photos/1058142/pexels-photo-1058142.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
                desc: 'Gestionamos una gran variedad de contenedores cisterna para líquidos, gases y criogénicos diseñados para las necesidades de las industrias mineras y energéticas globales. Nuestros equipos en conjunto con nuestros expertos, han servido a las industrias de energía y minería México y USA.',
              }"
            />

            <HomeIndustry
              class="flex-1"
              :info="{
                title: 'Gases',
                image:
                  'https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
                desc: ' Contamos con una extensa cantidad de contenedores. Constantemente ampliamos nuestro catálogo de equipos y ofrecemos a nuestros clientes lo último en tecnología de contenedores de tanques criogénicos y de gas. En Cryotainer proporcionamos contenedores para el transporte y almacenamiento de una amplia variedad de gases.',
              }"
            />

            <HomeIndustry
              class="flex-1"
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
  </NuxtLayout>
</template>
