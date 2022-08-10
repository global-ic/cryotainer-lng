<script setup lang="ts">
import { HomeIndustry } from '~/types';

const industries: HomeIndustry[] = [
  {
    title: 'Energía y Minería',
    image:
      'https://images.pexels.com/photos/1058142/pexels-photo-1058142.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
    desc: 'Gestionamos una gran variedad de contenedores cisterna para líquidos, gases y criogénicos diseñados para las necesidades de las industrias mineras y energéticas globales. Nuestros equipos en conjunto con nuestros expertos, han servido a las industrias de energía y minería México y USA.',
  },
  {
    title: 'Gases',
    image:
      'https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
    desc: ' Contamos con una extensa cantidad de contenedores. Constantemente ampliamos nuestro catálogo de equipos y ofrecemos a nuestros clientes lo último en tecnología de contenedores de tanques criogénicos y de gas. En Cryotainer proporcionamos contenedores para el transporte y almacenamiento de una amplia variedad de gases.',
  },
  {
    title: 'Alimentos y bebidas',
    image:
      'https://images.pexels.com/photos/3230214/pexels-photo-3230214.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
    desc: ' Nuestra capacidad para diseñar equipos únicos que se adapten a los requisitos de cada cliente nos ha diferenciado de la competencia en este mercado. Incluso contamos con una flota especial y dedicada al servicio de grado alimenticio.',
  },
];
</script>

<template>
  <section aria-label="Industrias" class="mt-16 p-4 lg:p-8">
    <UiContainer>
      <h2 class="text-center font-headline text-3xl font-bold uppercase text-zinc-800 md:text-4xl">
        Industrias en las que operamos
      </h2>

      <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <HomeIndustryListing v-for="industry in industries" :info="industry" />
      </div>
    </UiContainer>
  </section>
</template>
