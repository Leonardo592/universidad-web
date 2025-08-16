<template>
  <section class="bg-white py-16 sm:py-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Columna Izquierda: Composición de Imágenes -->
        <div class="relative h-96 lg:h-auto order-last lg:order-first">
          <div class="absolute inset-0 bg-uancv-gold"></div>

          <img 
            src="@/assets/img/vision1.jpg" 
            alt="Estudiantes celebrando su graduación" 
            class="absolute top-0 right-0 w-3/4 h-3/4 object-cover shadow-lg"
          >
          
          <img 
            src="@/assets/img/vision2.jpg" 
            alt="Vista del campus universitario" 
            class="absolute bottom-0 left-0 w-1/2 h-1/2 object-cover border-8 border-white shadow-lg"
          >
        </div>

        <!-- Columna Derecha: Contenido y Texto -->
        <div class="relative z-10 text-right">
          <div class="relative bg-uancv-bg p-8 md:p-12 shadow-2xl inline-block">
            <div class="h-1.5 w-24 bg-uancv-red mb-6 ml-auto"></div>
            <h2 class="text-3xl sm:text-4xl font-bold font-sans text-uancv-blue-dark tracking-tight">
              Nuestra Visión
            </h2>
            <p class="mt-6 text-xl text-uancv-text-secondary leading-relaxed">
              Ser una universidad líder en la región andina, reconocida por su excelencia académica, su compromiso con la investigación y su contribución al desarrollo sostenible del país.
            </p>
          </div>
          <div class="absolute -bottom-4 -right-4 w-1/2 h-1/2 bg-uancv-red/20 -z-10"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>