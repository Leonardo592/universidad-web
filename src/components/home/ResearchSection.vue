<template>
  <section class="bg-white py-16 sm:py-24 overflow-hidden">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Columna de Contenido (Texto y CTA) -->
        <div>
          <div class="h-1 w-20 bg-uancv-red mb-4"></div>
          <h2 class="text-3xl sm:text-4xl font-bold font-sans text-uancv-blue-dark tracking-tight">
            Impulsando el Conocimiento: Investigación y Repositorio Institucional
          </h2>
          <p class="mt-6 text-lg text-uancv-text-secondary leading-relaxed">
            Nuestra universidad está comprometida con la generación de nuevo conocimiento. A través de nuestro Repositorio Institucional y el registro en plataformas como DINA, REGINA y Scopus, promovemos la visibilidad y el impacto de la producción científica de nuestros docentes y estudiantes.
          </p>
          <p class="mt-4 text-lg text-uancv-text-secondary leading-relaxed">
            Explora las tesis, artículos y proyectos que están formando el futuro de la investigación en la región.
          </p>
          <div class="mt-8">
            <a href="#" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-uancv-red text-white font-bold px-8 py-3 transition-colors duration-300 hover:bg-uancv-blue-dark">
              <span>Explorar Repositorio</span>
              <svg class="w-5 h-5 ml-2" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>

        <!-- Columna de Logos/Imágenes -->
        <div class="relative h-80 lg:h-full">
          <div class="absolute -top-8 -right-8 w-72 h-72 bg-uancv-gold/10"></div>
          <div class="absolute -bottom-8 -left-8 w-72 h-72 bg-uancv-red/10"></div>
          
          <a href="http://dina.concytec.gob.pe/" target="_blank" rel="noopener noreferrer" class="absolute top-0 left-0 w-3/4 shadow-2xl transition-all duration-300 hover:scale-105 hover:z-10">
            <img 
              src="@/assets/img/dina-regina.png" 
              alt="Logo DINA REGINA CONCYTEC" 
              class="w-full h-auto"
            >
          </a>
          
          <a href="https://www.scopus.com/" target="_blank" rel="noopener noreferrer" class="absolute bottom-0 right-0 w-1/2 bg-white p-4 shadow-2xl transition-all duration-300 hover:scale-105 hover:z-10">
             <img 
              src="@/assets/img/scopus.jpg"
              alt="Logo Scopus" 
              class="w-full h-auto"
            >
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>