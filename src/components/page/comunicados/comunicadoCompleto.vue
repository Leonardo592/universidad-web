<template>
  <section class="py-10 bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div class="max-w-screen-xl mx-auto">
      <div v-if="store.isLoading && !store.comunicadoSeleccionado" class="flex justify-center items-center h-screen">
        <div class="text-center text-gray-500">
          <span class="inline-block animate-spin h-8 w-8 border-t-2 border-b-2 border-custom-red rounded-full"></span>
          <p class="mt-4 text-lg">Cargando comunicado...</p>
        </div>
      </div>
      
      <div v-else-if="store.error" class="text-center text-red-700 my-10 p-6 border border-red-300 bg-red-50 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold mb-2">Error</h2>
        <p>{{ store.error }}</p>
        <router-link to="/comunicados" class="mt-4 inline-block bg-custom-red text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-700 transition">
          Volver a Comunicados
        </router-link>
      </div>
      
      <div v-else-if="store.comunicadoSeleccionado" class="grid grid-cols-1 lg:grid-cols-12 gap-x-8">
        <article class="lg:col-span-8 bg-white shadow-xl rounded-lg overflow-hidden">
          <div class="p-5 sm:p-8">
            <router-link to="/comunicados" class="mb-6 inline-flex items-center text-sm font-medium text-custom-red hover:text-red-800 transition duration-150 ease-in-out group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
              Ver todos los comunicados
            </router-link>
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">{{ store.comunicadoSeleccionado.titulo }}</h1>
            <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-6">
              <span>Publicado el {{ fechaFormateada(store.comunicadoSeleccionado.fecha_publicacion) }}</span>
              <span v-if="store.comunicadoSeleccionado.categorias && store.comunicadoSeleccionado.categorias.length > 0" class="flex flex-wrap items-center gap-2">
                <span class="font-medium text-gray-600">en:</span>
                <span v-for="cat in store.comunicadoSeleccionado.categorias" :key="cat.id" class="bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{{ cat.nombre }}</span>
              </span>
            </div>
            <div class="prose prose-lg max-w-none text-gray-800" v-html="store.comunicadoSeleccionado.contenido"></div>
            <div v-if="store.comunicadoSeleccionado.archivos_adjuntos && store.comunicadoSeleccionado.archivos_adjuntos.length > 0" class="mt-8 pt-6 border-t border-gray-200">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Archivos Adjuntos:</h3>
              <ul class="space-y-2">
                <li v-for="file in store.comunicadoSeleccionado.archivos_adjuntos" :key="file.id">
                  <a :href="file.url_descarga" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-indigo-600 hover:text-indigo-800 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.122 2.122l7.81-7.81" /></svg>
                    <span>{{ file.nombre }} ({{ file.tamaño_kb }} KB)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        
        <aside class="lg:col-span-4 h-fit lg:sticky lg:top-24 self-start space-y-6">
          <div class="bg-white p-5 rounded-lg shadow">
            <h3 class="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Otros Comunicados</h3>
            <div v-if="store.isLoading" class="text-center text-gray-500 text-sm py-4">Cargando...</div>
            <div v-else-if="store.comunicadosRecientes.length > 0" class="space-y-4">
              <cardPrevComunicado 
                v-for="reciente in store.comunicadosRecientes" 
                :key="reciente.id" 
                :titulo="reciente.titulo" 
                :fecha="reciente.fecha_publicacion" 
                :areas="reciente.categorias"
                @click="verComunicado(reciente)" 
              />
            </div>
            <div v-else class="text-sm text-gray-500 text-center py-4">No hay más comunicados.</div>
          </div>
        </aside>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import { useComunicadosStore } from "@/stores/comunicados";
import cardPrevComunicado from "@/components/Ui/cardPrevComunicado.vue";

const store = useComunicadosStore();
const route = useRoute();
const router = useRouter();

const cargarComunicadoCompleto = (comunicadoId) => {
  if (!comunicadoId) return;
  store.fetchComunicadoById(comunicadoId);
  store.fetchComunicadosRecientes(5);
};

onMounted(() => {
  cargarComunicadoCompleto(route.params.id);
});

watch(() => route.params.id, (newId) => {
  if (newId) {
    cargarComunicadoCompleto(newId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

onBeforeRouteLeave(() => {
  store.comunicadoSeleccionado = null;
});

const verComunicado = (comunicado) => {
  router.push({ name: 'comunicadoCompleto', params: { id: comunicado.id } });
};

const fechaFormateada = (fecha) => {
  if (!fecha) return '';
  const date = new Date(fecha);
  return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
};
</script>

<style>
.prose p { text-align: justify; }
.lg\:sticky { position: sticky; }
.lg\:top-24 { top: 6rem; }
.lg\:self-start { align-self: flex-start; }
</style>