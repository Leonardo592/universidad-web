<template>
  <section class="py-10 bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div class="max-w-screen-xl mx-auto">

      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-gray-800">Directorio Institucional</h1>
        <div class="mt-3 inline-block w-24 h-1 bg-custom-red "></div>
      </div>

      <div v-if="store.isLoading" class="text-center text-gray-500 py-20">
        <span class="inline-block animate-spin h-8 w-8 border-t-2 border-b-2 border-custom-red rounded-full"></span>
      </div>
      <div v-else-if="store.error" class="text-center text-red-700 my-10 p-4 border border-red-200 bg-red-50 rounded-lg">
        {{ store.error }}
      </div>
      
      <div v-else-if="store.personasFiltradas.length > 0">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          <div v-for="persona in store.personasFiltradas" :key="persona.id" class="bg-white  shadow p-4 text-center flex flex-col items-center border-t-4" :class="getBorderColor(persona.cargo)">
            <div class="w-24 h-24 rounded-full overflow-hidden mb-3 border-4 border-gray-100 flex-shrink-0">
              <img v-if="persona.foto_url" :src="persona.foto_url" :alt="`Foto de ${persona.nombre}`" class="w-full h-full object-cover" loading="lazy"/>
              <div v-else class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
            </div>
            <h3 class="text-base font-semibold text-gray-900 leading-tight">{{ persona.nombre }}</h3>
            <p class="text-xs mt-1 font-medium" :class="getTextColor(persona.cargo)">{{ persona.cargo }}</p>
          </div>
        </div>
      </div>

      <div v-else class="text-center text-gray-500 my-10 p-8 bg-white rounded-lg shadow">
        No se encontraron personas en el directorio
        <span v-if="busquedaStore.termino"> que coincidan con la búsqueda "{{busquedaStore.termino}}".</span>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useDirectorioStore } from "@/stores/directorio";
import { useBusquedaStore } from "@/stores/busqueda";

const store = useDirectorioStore();
const busquedaStore = useBusquedaStore();

onMounted(() => {
  if (store.personas.length === 0) {
    store.fetchDirectorio();
  }
});

const getBorderColor = (cargo) => {
  if (cargo.toLowerCase().includes('director')) return 'border-custom-red';
  if (cargo.toLowerCase().includes('jefe')) return 'border-custom-yellow';
  return 'border-gray-300';
};

const getTextColor = (cargo) => {
  if (cargo.toLowerCase().includes('director')) return 'text-custom-red';
  if (cargo.toLowerCase().includes('jefe')) return 'text-custom-red';
  return 'text-gray-500';
};
</script>