<template>
  <section class="bg-uancv-bg py-16 sm:py-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Columna Izquierda: Contenido y Texto -->
        <div class="relative z-10">
          <div class="relative bg-white p-8 md:p-12 shadow-2xl">
            <div class="h-1.5 w-24 bg-uancv-red mb-6"></div>
            <h2 class="text-3xl sm:text-4xl font-bold font-sans text-uancv-blue-dark tracking-tight">
              Nuestra Misión
            </h2>
            <p class="mt-6 text-xl text-uancv-text-secondary leading-relaxed">
              Formar profesionales líderes, íntegros y altamente competentes, comprometidos con la investigación, la innovación y el desarrollo sostenible de la región andina y del país.
            </p>
          </div>
          <!-- Elemento decorativo inferior -->
          <div class="absolute -bottom-4 -left-4 w-1/2 h-1/2 bg-uancv-gold/20 -z-10"></div>
        </div>

        <!-- Columna Derecha: Composición de Imágenes -->
        <div class="relative h-96 lg:h-auto">
          <div class="absolute inset-0 bg-uancv-blue-dark"></div>
          
          <img 
            src="@/assets/img/mision1.jpg" 
            alt="Estudiantes colaborando en un proyecto" 
            class="absolute top-0 left-0 w-3/4 h-3/4 object-cover shadow-lg"
          >
          
          <img 
            src="@/assets/img/mision2.jpg" 
            alt="Equipo trabajando en una pizarra" 
            class="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover border-8 border-uancv-bg shadow-lg"
          >
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>