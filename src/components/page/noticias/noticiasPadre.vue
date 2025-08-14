<template>
  <section class="py-8 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-x-6">

      <aside class="lg:col-span-3 h-fit lg:sticky lg:top-24 self-start">
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Filtros</h3>
          <div class="space-y-4">
            <div>
              <label for="filtro-categoria" class="block text-sm font-medium text-gray-700 mb-1">Área</label>
              <select id="filtro-categoria" v-model="filtroCategoriaId" @change="aplicarFiltros" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                <option :value="null">Todas las áreas</option>
                <option v-for="cat in storeCategorias.items" :key="cat.id" :value="cat.id">{{ cat.nombre }}</option>
              </select>
            </div>
            <div>
              <label for="filtro-anio" class="block text-sm font-medium text-gray-700 mb-1">Año</label>
              <input id="filtro-anio" type="number" min="2020" :max="currentYear" v-model.number="filtroAnio" @change="aplicarFiltros" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm">
            </div>
            <div>
              <label for="filtro-orden" class="block text-sm font-medium text-gray-700 mb-1">Ordenar por</label>
              <select id="filtro-orden" v-model="ordenSeleccionado" @change="aplicarFiltros" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                <option value="reciente">Más Reciente</option>
                <option value="antiguo">Más Antiguo</option>
              </select>
            </div>
          </div>
        </div>
      </aside>

      <main class="lg:col-span-9 mt-6 lg:mt-0">
        <div v-if="store.isLoading" class="flex justify-center items-center h-96">
          <p>Cargando noticias...</p>
        </div>
        <div v-else-if="store.error" class="flex justify-center items-center h-96 bg-red-50 text-red-700 p-4 rounded-lg">
          <p>{{ store.error }}</p>
        </div>
        <div v-else-if="store.noticias.length > 0">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            <cardNotice 
              v-for="noticia in store.noticias" 
              :key="noticia.id" 
              :titulo="noticia.titulo" 
              :contenido="noticia.resumen" 
              :fecha="noticia.fecha_publicacion"
              :img="noticia.imagen_url" 
              :areas="noticia.categorias" 
              @click="verNoticia(noticia)"
            />
          </div>
          <pagination v-if="store.paginationData.totalPages > 1" :total-items="store.paginationData.totalItems" :items-per-page="store.paginationData.perPage" :current-page="store.paginationData.currentPage" @page-changed="cambiarPagina" class="mt-6" />
        </div>
        <div v-else class="flex justify-center items-center h-96 bg-white rounded-lg shadow">
          <p class="text-gray-500">No se encontraron noticias con los filtros seleccionados.</p>
        </div>
      </main>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { useNoticiasStore } from "@/stores/noticias";
import { useCategoriasNoticiaStore } from "@/stores/categoriasNoticia";
import cardNotice from "@/components/Ui/cardNotice.vue";
import pagination from "@/components/common/pagination.vue";

const store = useNoticiasStore();
const storeCategorias = useCategoriasNoticiaStore();
const route = useRoute();
const router = useRouter();

const currentYear = new Date().getFullYear();
const filtroCategoriaId = ref(route.query.categoria_id ? parseInt(route.query.categoria_id) : null);
const filtroAnio = ref(route.query.anio ? parseInt(route.query.anio) : currentYear);
const ordenSeleccionado = ref(route.query.orden || "reciente");

const cargarNoticias = (query) => {
  store.fetchNoticias({
    page: query.page || 1,
    per_page: 12,
    categoria_id: query.categoria_id || undefined,
    anio: query.anio == currentYear ? undefined : query.anio,
    orden: query.orden || 'reciente',
  });
};

onMounted(() => {
  storeCategorias.fetchItems();
});

watch(() => route.query, (newQuery) => {
  filtroCategoriaId.value = newQuery.categoria_id ? parseInt(newQuery.categoria_id) : null;
  filtroAnio.value = newQuery.anio ? parseInt(newQuery.anio) : currentYear;
  ordenSeleccionado.value = newQuery.orden || "reciente";
  cargarNoticias(newQuery);
}, { immediate: true });

const aplicarFiltros = () => {
  const query = {};
  if (filtroCategoriaId.value) query.categoria_id = filtroCategoriaId.value;
  if (filtroAnio.value !== currentYear) query.anio = filtroAnio.value;
  if (ordenSeleccionado.value !== 'reciente') query.orden = ordenSeleccionado.value;
  
  router.push({ name: 'noticias', query });
};

const cambiarPagina = (newPage) => {
  router.push({ name: 'noticias', query: { ...route.query, page: newPage } });
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const verNoticia = (noticia) => {
  router.push({ name: 'noticiaCompleta', params: { id: noticia.id } });
};
</script>

<style scoped>
.lg\:sticky { position: sticky; }
.lg\:top-24 { top: 6rem; }
.lg\:self-start { align-self: flex-start; }
</style>