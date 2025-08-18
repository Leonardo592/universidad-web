<template>
  <div>
    <div v-if="storeNoticias.isLoading && storeNoticias.noticiasRecientes.length === 0" class="text-center py-10">
      <p class="text-uancv-text-secondary">Cargando noticias...</p>
    </div>
    <div v-else-if="storeNoticias.error" class="text-center text-red-600 p-4 border border-red-300 bg-red-50 my-4">
      {{ storeNoticias.error }}
    </div>
    <div v-else-if="storeNoticias.noticiasRecientes.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="noticia in storeNoticias.noticiasRecientes" :key="noticia.id" @click="irADetalleNoticia(noticia)" class="bg-white shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div class="overflow-hidden">
          <img :src="noticia.imagen_url" :alt="noticia.titulo" class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105">
        </div>
        <div class="p-6">
          <p class="text-sm font-semibold text-uancv-red uppercase tracking-wider">{{ noticia.categorias[0]?.nombre || 'Noticia' }}</p>
          <h3 class="mt-2 text-xl font-bold text-uancv-blue-dark leading-tight group-hover:text-uancv-red transition-colors">
            {{ noticia.titulo }}
          </h3>
          <p class="mt-3 text-sm text-uancv-text-secondary">{{ new Date(noticia.fecha_publicacion).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-12 bg-white shadow-md">
      <p class="text-uancv-text-secondary">No hay noticias recientes para mostrar.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useNoticiasStore } from "@/stores/noticias";
import { useRouter } from "vue-router";

const storeNoticias = useNoticiasStore();
const router = useRouter();
const ITEMS_POR_PAGINA_HOME = 3;

onMounted(() => {
  storeNoticias.fetchNoticiasRecientes(ITEMS_POR_PAGINA_HOME);
});

const irADetalleNoticia = (noticia) => {
  router.push({ name: 'noticiaCompleta', params: { id: noticia.id } });
};
</script>