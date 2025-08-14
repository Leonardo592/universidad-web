<template>
  <section class="py-12 md:py-16 bg-gray-50">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-10 md:mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Portal de Transparencia</h1>
        <p class="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
          Accede a información pública relevante sobre la gestión de la UGEL Puno.
        </p>
        <div class="mt-4 inline-block w-20 h-1 bg-custom-red rounded"></div>
      </div>

      <div v-if="store.isLoading" class="text-center text-gray-500 my-16">
        <span class="inline-block animate-spin h-8 w-8 border-t-2 border-b-2 border-custom-red rounded-full"></span>
        <p class="mt-2">Cargando información...</p>
      </div>

      <div v-else-if="store.error" class="text-center text-red-700 my-10 p-6 border border-red-300 bg-red-100 rounded-lg shadow-sm max-w-2xl mx-auto">
        <p class="font-semibold">¡Error!</p>
        <p>{{ store.error }}</p>
      </div>

      <div v-else-if="store.items.length > 0" class="space-y-6">
        <article v-for="item in store.items" :key="item.id" class="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
            {{ item.titulo }}
          </h2>
          <p v-if="item.descripcion" class="text-gray-600 mb-4 text-justify">
            {{ item.descripcion }}
          </p>
          <div :class="{'pt-4 border-t border-gray-200 mt-4': item.url || item.descripcion }">
            <div class="flex flex-wrap items-center gap-4">
              <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium group">
                <LinkIcon class="w-4 h-4 mr-1.5 text-indigo-500 group-hover:text-indigo-700" />
                Visitar Enlace Relacionado
              </a>
              <div v-if="item.documentos && item.documentos.length > 0" class="flex flex-wrap gap-x-4 gap-y-2">
                <a v-for="doc in item.documentos" :key="doc.id" :href="doc.url_descarga" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-sm text-blue-700 hover:text-blue-900 font-medium group">
                  <PaperClipIcon class="w-4 h-4 mr-1.5 text-gray-400 group-hover:text-blue-700" />
                  <span>{{ doc.nombre }}</span>
                  <span class="ml-2 text-xs text-gray-500">({{ doc.tamaño_kb }} KB)</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
     
      <div v-else class="text-center text-gray-500 my-10 p-8 bg-white rounded-lg shadow">
        No hay documentos de transparencia disponibles en este momento.
      </div>

      <div class="mt-12 md:mt-16 pt-10 border-t-2 border-custom-red">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
          Plataforma Nacional de Transparencia
        </h2>
        <div class="w-full overflow-hidden rounded-lg shadow-lg bg-white">
          <iframe src="https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=18611&id_tema=1&ver=Dl" class="w-full h-[800px] md:h-[1000px] border-0" title="Portal de Transparencia Estándar - Plataforma Nacional"></iframe>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useTransparenciaStore } from "@/stores/transparencia";
import { PaperClipIcon, LinkIcon } from '@heroicons/vue/24/outline';

const store = useTransparenciaStore();

onMounted(() => {
  store.fetchItems();
});
</script>