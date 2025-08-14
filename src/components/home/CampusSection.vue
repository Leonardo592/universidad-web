<template>
  <section class="bg-white py-16 sm:py-20">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold font-sans text-uancv-blue-dark tracking-tight">
          Nuestros Campus
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-uancv-text-secondary">
          Con presencia estratégica en el sur del país, listos para recibirte.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
        
        <router-link to="/campus/juliaca" class="relative block overflow-hidden group">
          <img src="@/assets/img/sedeUANCV/sedeJuliaca.jpg" alt="Campus Juliaca" class="w-full h-96 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-t from-uancv-blue-dark/90 via-uancv-blue-dark/50 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <h3 class="text-2xl font-bold text-white text-shadow-md">Campus Juliaca</h3>
            <p class="mt-1 text-sm text-slate-200 text-shadow">Sede Central</p>
            <div class="h-0.5 w-16 bg-uancv-red mt-3"></div>
          </div>
        </router-link>

        <router-link to="/campus/puno" class="relative block overflow-hidden group">
          <img src="@/assets/img/sedeUANCV/sedePuno.jpg" alt="Filial Puno" class="w-full h-96 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-t from-uancv-blue-dark/90 via-uancv-blue-dark/50 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <h3 class="text-2xl font-bold text-white text-shadow-md">Filial Puno</h3>
            <p class="mt-1 text-sm text-slate-200 text-shadow">Corazón del Altiplano</p>
            <div class="h-0.5 w-16 bg-uancv-red mt-3"></div>
          </div>
        </router-link>
        
        <router-link to="/campus/arequipa" class="relative block overflow-hidden group">
          <img src="@/assets/img/sedeUANCV/sedeArequipa.jpg" alt="Filial Arequipa" class="w-full h-96 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-t from-uancv-blue-dark/90 via-uancv-blue-dark/50 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <h3 class="text-2xl font-bold text-white text-shadow-md">Filial Arequipa</h3>
            <p class="mt-1 text-sm text-slate-200 text-shadow">La Ciudad Blanca</p>
            <div class="h-0.5 w-16 bg-uancv-red mt-3"></div>
          </div>
        </router-link>
        
      </div>
    </div>
  </section>
</template>

<script setup>
</script>