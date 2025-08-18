<template>
  <section class="bg-white py-16 sm:py-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <!-- Columna Izquierda: Título -->
        <div class="lg:col-span-1">
          <div class="h-1 w-20 bg-uancv-red mb-4"></div>
          <h2 class="text-3xl sm:text-4xl font-bold font-sans text-uancv-blue-dark tracking-tight">
            Servicios y Plataformas Digitales
          </h2>
          <p class="mt-4 text-lg text-uancv-text-secondary">
            Accesos directos a las herramientas esenciales para nuestra comunidad.
          </p>

          <!-- <Noticias></Noticias> -->

        </div>

        <!-- Columna Derecha: Lista de Enlaces -->
        <div class="lg:col-span-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            
            <a href="#" class="service-link group">
              <span>Portal de Bibliotecas</span>
              <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            
            <a href="#" class="service-link group">
              <span>Requisitos de Trámites</span>
              <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            <a href="#" class="service-link group">
              <span>Repositorio Institucional</span>
              <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            <a href="#" class="service-link group">
              <span>Constancia de Egresado</span>
              <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            <a href="#" class="service-link group">
              <span>Revistas Institucionales</span>
              <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            <a href="#" class="service-link group">
              <span>Grados y Títulos</span>
              <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            <a href="#" class="service-link group">
              <span>Correo Institucional</span>
              <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            <a href="#" class="service-link group">
              <span>Centro de Informática</span>
              <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import Noticias from '../page/noticias/noticias.vue';

</script>

<style scoped>
.service-link {
  @apply inline-flex items-center justify-between font-semibold text-uancv-blue-dark border-b-2 border-uancv-border py-2 transition-all duration-300;
}
.service-link:hover {
  @apply border-b-uancv-red text-uancv-red;
}
.arrow {
  @apply w-5 h-5 transition-transform duration-300 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0;
}
</style>