<template>
  <section class="bg-white py-16 sm:py-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold font-sans text-uancv-blue-dark tracking-tight">
          Nuestra Trayectoria
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-uancv-text-secondary">
          Más de 40 años forjando el futuro profesional de la región andina.
        </p>
        <div class="h-1 w-24 bg-uancv-red mt-6 mx-auto"></div>
      </div>

      <div class="relative">
        <!-- La línea de tiempo vertical -->
        <div class="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-uancv-border hidden md:block"></div>

        <div class="space-y-16">
          
          <!-- Hito 1: Fundación -->
          <div class="relative flex md:justify-start">
            <div class="md:w-1/2 md:pr-8">
              <div class="bg-uancv-bg p-8 shadow-lg group relative">
                <div class="absolute top-0 left-0 w-1.5 h-full bg-uancv-red"></div>
                <p class="text-2xl font-bold font-sans text-uancv-red">1981</p>
                <h3 class="mt-2 text-xl font-bold text-uancv-blue-dark">Fundación</h3>
                <p class="mt-3 text-uancv-text-secondary">
                  Nace en Juliaca con la misión de brindar educación superior de calidad, respondiendo a las necesidades de la población andina.
                </p>
              </div>
            </div>
            <!-- Círculo en la línea de tiempo -->
            <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-uancv-red border-4 border-white hidden md:block"></div>
          </div>

          <!-- Hito 2: Expansión -->
          <div class="relative flex md:justify-end">
             <div class="md:w-1/2 md:pl-8">
              <div class="bg-uancv-bg p-8 shadow-lg group relative">
                <div class="absolute top-0 right-0 w-1.5 h-full bg-uancv-gold"></div>
                <p class="text-2xl font-bold font-sans text-uancv-gold">1990-2010</p>
                <h3 class="mt-2 text-xl font-bold text-uancv-blue-dark">Crecimiento y Expansión</h3>
                <p class="mt-3 text-uancv-text-secondary">
                  Apertura de nuevas carreras y filiales en Puno y Arequipa, consolidando nuestra presencia en el sur del país.
                </p>
              </div>
            </div>
            <!-- Círculo en la línea de tiempo -->
            <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-uancv-gold border-4 border-white hidden md:block"></div>
          </div>
          
          <!-- Hito 3: Renovación -->
          <div class="relative flex md:justify-start">
            <div class="md:w-1/2 md:pr-8">
              <div class="bg-uancv-bg p-8 shadow-lg group relative">
                <div class="absolute top-0 left-0 w-1.5 h-full bg-uancv-blue-dark"></div>
                <p class="text-2xl font-bold font-sans text-uancv-blue-dark">2020-Presente</p>
                <h3 class="mt-2 text-xl font-bold text-uancv-blue-dark">Renovación y Compromiso</h3>
                <p class="mt-3 text-uancv-text-secondary">
                  Iniciamos una nueva etapa enfocada en la mejora continua y el proceso de licenciamiento, reafirmando nuestro compromiso con la excelencia académica.
                </p>
              </div>
            </div>
            <!-- Círculo en la línea de tiempo -->
            <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-uancv-blue-dark border-4 border-white hidden md:block"></div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>