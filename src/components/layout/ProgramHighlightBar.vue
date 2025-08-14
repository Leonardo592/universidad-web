<template>
  <section class="bg-white py-16 sm:py-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-3 lg:gap-x-12">

        <!-- Columna Izquierda: Título y Descripción -->
        <div class="lg:col-span-1 text-center lg:text-left mb-12 lg:mb-0">
          <p class="font-semibold text-uancv-red tracking-wider">NUESTRA PROPUESTA DE VALOR</p>
          <h2 class="mt-4 text-4xl sm:text-5xl font-bold font-sans text-uancv-blue-dark">
            Pilares de tu Formación
          </h2>
          <p class="mt-6 text-lg text-uancv-text-secondary">
            Construimos una experiencia educativa sólida, enfocada en tu éxito profesional y personal.
          </p>
          <div class="mt-6 h-1 w-20 bg-uancv-red mx-auto lg:mx-0"></div>
        </div>

        <!-- Columna Derecha: Tarjetas de Valor -->
        <div class="lg:col-span-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <router-link to="/programas" class="block bg-uancv-bg p-6 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div class="flex items-start">
                <div class="p-3 bg-uancv-red">
                  <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.906 59.906 0 0 1 10.342 5.84c-.897.28-1.777.604-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
                </div>
                <div class="ml-4">
                  <h3 class="font-bold text-uancv-blue-dark text-lg">Modelo Educativo Renovado</h3>
                  <p class="mt-1 text-sm text-uancv-text-secondary">Enfoque en competencias prácticas para el mercado laboral.</p>
                </div>
              </div>
            </router-link>

            <router-link to="/campus" class="block bg-uancv-bg p-6 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div class="flex items-start">
                <div class="p-3 bg-uancv-blue-dark">
                  <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /></svg>
                </div>
                <div class="ml-4">
                  <h3 class="font-bold text-uancv-blue-dark text-lg">Campus Universitarios</h3>
                  <p class="mt-1 text-sm text-uancv-text-secondary">Infraestructura moderna para un aprendizaje óptimo.</p>
                </div>
              </div>
            </router-link>

            <router-link to="/convenios" class="block bg-uancv-bg p-6 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div class="flex items-start">
                <div class="p-3 bg-uancv-gold">
                  <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
                </div>
                <div class="ml-4">
                  <h3 class="font-bold text-uancv-blue-dark text-lg">Convenios Internacionales</h3>
                  <p class="mt-1 text-sm text-uancv-text-secondary">Expandimos tus horizontes con oportunidades globales.</p>
                </div>
              </div>
            </router-link>

            <router-link to="/licenciamiento" class="block bg-uancv-bg p-6 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div class="flex items-start">
                <div class="p-3 bg-slate-700">
                  <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                </div>
                <div class="ml-4">
                  <h3 class="font-bold text-uancv-blue-dark text-lg">Rumbo al Licenciamiento</h3>
                  <p class="mt-1 text-sm text-uancv-text-secondary">Nuestro compromiso firme con la calidad y la ley universitaria.</p>
                </div>
              </div>
            </router-link>
            
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>