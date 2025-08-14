<template>
  <section class="py-10 bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div class="max-w-screen-lg mx-auto">
      <div v-if="isLoading" class="text-center text-gray-500 my-10 p-5">
        <span class="inline-block animate-spin h-5 w-5 border-t-2 border-b-2 border-custom-red rounded-full mr-2"></span>
        Cargando información...
      </div>
      <div v-else-if="error" class="text-center text-red-700 my-4 p-4 border border-red-300 bg-red-100 rounded-lg shadow-sm">
        {{ error }}
      </div>
      <article v-else-if="datosGestion" class="bg-white shadow-xl rounded-lg overflow-hidden p-6 sm:p-8 lg:p-10">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6 pb-4 border-b border-gray-200">
          {{ datosGestion.titulo }}
        </h1>
        <div v-if="datosGestion.descripcion" class="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8" v-html="datosGestion.descripcion"></div>
        <div v-if="datosGestion.reglas_array && datosGestion.reglas_array.length > 0" class="mb-8">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">Reglamentos y Directivas:</h3>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li v-for="(regla, index) in datosGestion.reglas_array" :key="index">{{ regla }}</li>
          </ul>
        </div>
        <div v-if="datosGestion.documento_url || datosGestion.enlace_externo" class="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
          <a v-if="datosGestion.documento_url" :href="datosGestion.documento_url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 transition-colors text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" /></svg>
            Descargar Documento
          </a>
          <a v-if="datosGestion.enlace_externo" :href="datosGestion.enlace_externo" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-gray-600 text-white px-4 py-2 rounded-md shadow hover:bg-gray-700 transition-colors text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
            Visitar Enlace Externo
          </a>
        </div>
      </article>
      <div v-else class="text-center text-gray-500 my-10 p-8 bg-white rounded-lg shadow">
        La información para Control Interno no está disponible actualmente.
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useGestionStore } from '@/stores/gestion';

const TIPO_GESTION = 'control_interno';

const store = useGestionStore();
const datosGestion = ref(null);
const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
  await store.fetchGestionPorTipo(TIPO_GESTION);
  datosGestion.value = store.gestionData[TIPO_GESTION];
  isLoading.value = false;
  error.value = store.error;
});
</script>

<style>
.prose p { text-align: justify; }
</style>