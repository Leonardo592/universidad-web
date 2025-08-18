<template>
  <div>
    <section class="bg-uancv-blue-dark text-white py-12">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl font-bold font-sans">Noticias y Eventos</h1>
        <p class="mt-2 text-lg text-slate-300">Mantente al día con las últimas novedades de la comunidad UANCV.</p>
      </div>
    </section>

    <section class="py-16 sm:py-20 bg-uancv-bg">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">

        <aside class="lg:col-span-1 h-fit lg:sticky lg:top-28">
          <div class="bg-white p-6 shadow-lg">
            <h3 class="text-lg font-bold text-uancv-blue-dark border-b-2 border-uancv-red pb-3">Filtros de Búsqueda</h3>
            <div class="space-y-5 mt-5">
              <div>
                <label for="filtro-categoria" class="block text-sm font-bold text-uancv-blue-dark mb-1">Área</label>
                <select id="filtro-categoria" v-model="filtroCategoriaId" @change="aplicarFiltros" class="w-full border-uancv-border focus:ring-uancv-red focus:border-uancv-red text-sm">
                  <option :value="null">Todas las áreas</option>
                  <option v-for="cat in storeCategorias.items" :key="cat.id" :value="cat.id">{{ cat.nombre }}</option>
                </select>
              </div>
              <div>
                <label for="filtro-anio" class="block text-sm font-bold text-uancv-blue-dark mb-1">Año</label>
                <select id="filtro-anio" v-model="filtroAnio" @change="aplicarFiltros" class="w-full border-uancv-border focus:ring-uancv-red focus:border-uancv-red text-sm">
                  <option :value="null">Todos los años</option>
                  <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
                </select>
              </div>
              <div>
                <label for="filtro-orden" class="block text-sm font-bold text-uancv-blue-dark mb-1">Ordenar por</label>
                <select id="filtro-orden" v-model="ordenSeleccionado" @change="aplicarFiltros" class="w-full border-uancv-border focus:ring-uancv-red focus:border-uancv-red text-sm">
                  <option value="reciente">Más Reciente</option>
                  <option value="antiguo">Más Antiguo</option>
                </select>
              </div>
            </div>
          </div>
        </aside>

        <main class="lg:col-span-3">
          <div v-if="store.isLoading" class="flex justify-center items-center h-96">
            <p class="text-uancv-text-secondary">Cargando noticias...</p>
          </div>
          <div v-else-if="store.error" class="bg-red-50 text-red-700 p-4">
            <p>{{ store.error }}</p>
          </div>
          <div v-else-if="store.noticias.length > 0">
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
            <pagination v-if="store.paginationData.totalPages > 1" :total-items="store.paginationData.totalItems" :items-per-page="store.paginationData.perPage" :current-page="store.paginationData.currentPage" @page-changed="cambiarPagina" class="mt-8" />
          </div>
          <div v-else class="flex justify-center items-center h-96 bg-white shadow-lg">
            <p class="text-uancv-text-secondary text-center px-6">No se encontraron noticias con los filtros seleccionados.</p>
          </div>
        </main>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { useNoticiasStore } from "@/stores/noticias";
import { useCategoriasNoticiaStore } from "@/stores/categoriasNoticia";
import pagination from "@/components/common/pagination.vue";
import cardNotice from "@/components/Ui/cardNotice.vue";

const store = useNoticiasStore();
const storeCategorias = useCategoriasNoticiaStore();
const route = useRoute();
const router = useRouter();

const filtroCategoriaId = ref(route.query.categoria_id ? parseInt(route.query.categoria_id) : null);
const filtroAnio = ref(route.query.anio ? parseInt(route.query.anio) : null);
const ordenSeleccionado = ref(route.query.orden || "reciente");

const availableYears = computed(() => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= 2020; i--) { years.push(i); }
  return years;
});

const cargarNoticias = (query) => {
  store.fetchNoticias({
    page: query.page || 1,
    per_page: 9,
    categoria_id: query.categoria_id || undefined,
    anio: query.anio || undefined,
    orden: query.orden || 'reciente',
  });
};

onMounted(() => {
  storeCategorias.fetchItems();
});

watch(() => route.query, (newQuery) => {
  filtroCategoriaId.value = newQuery.categoria_id ? parseInt(newQuery.categoria_id) : null;
  filtroAnio.value = newQuery.anio ? parseInt(newQuery.anio) : null;
  ordenSeleccionado.value = newQuery.orden || "reciente";
  cargarNoticias(newQuery);
}, { immediate: true });

const aplicarFiltros = () => {
  const query = {};
  if (filtroCategoriaId.value) query.categoria_id = filtroCategoriaId.value;
  if (filtroAnio.value) query.anio = filtroAnio.value;
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
select, input[type="number"] { @apply block w-full p-2 text-base text-uancv-blue-dark bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-uancv-border transition ease-in-out m-0 focus:text-uancv-blue-dark focus:bg-white focus:border-uancv-red focus:outline-none; }
.lg\:sticky { position: sticky; }
.lg\:top-28 { top: 7rem; }
</style>