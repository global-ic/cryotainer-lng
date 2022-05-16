<script setup lang="ts"></script>

<template>
  <footer class="bg-white px-4 pt-16 lg:px-8">
    <div class="mx-auto flex w-full max-w-7xl flex-col">
      <div class="flex flex-col gap-10 md:flex-row">
        <div class="w-full space-y-8 md:max-w-xs">
          <RouterLink :to="{ name: 'home' }">
            <img src="/img/cryotainer-logo.png" class="block w-full max-w-[15rem]" alt="Logo Cryotainer" />
          </RouterLink>

          <span class="block text-zinc-500"
            >Empresa de proyectos e instalaciones criogénicas de confianza.</span
          >

          <TheSocialIcons />
        </div>

        <div class="flex flex-1 flex-col gap-10 lg:flex-row">
          <div class="footer-link-col">
            <span class="footer-subtitle">Sitio web</span>

            <RouterLink :to="{ name: 'home' }" class="footer-link">Inicio</RouterLink>
            <RouterLink :to="{ name: 'about' }" class="footer-link">Nosotros</RouterLink>
            <RouterLink :to="{ name: 'gnl' }" class="footer-link">GNL</RouterLink>
            <RouterLink :to="{ name: 'services' }" class="footer-link">Servicios</RouterLink>
            <RouterLink :to="{ name: 'contact' }" class="footer-link">Contacto</RouterLink>
          </div>

          <div class="footer-link-col">
            <span class="footer-subtitle">Contacto</span>

            <span aria-label="Ubicación" class="flex items-center gap-2 text-zinc-700">
              <PhMapPinFill /> Guadalajara, Jalisco, México
            </span>

            <a
              aria-label="Correo electrónico"
              href="mailto:contacto@cryotainerlng.com"
              class="footer-link flex items-center gap-2"
            >
              <PhEnvelopeSimpleOpenFill /> contacto@cryotainerlng.com
            </a>

            <a href="tel:+523339542453" aria-label="Teléfono" class="footer-link flex items-center gap-2">
              <PhPhoneFill /> +52 33 3954 2453
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
