<template>
  <section class="py-10 bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div class="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-x-6">
      <aside class="lg:col-span-3 h-fit lg:sticky lg:top-24 self-start">
        <div class="bg-white p-5 rounded-lg shadow">
          <h3 class="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Filtros</h3>
          <div class="space-y-4">
            <div>
              <label for="filtro-area-com" class="block text-sm font-medium text-gray-700 mb-1">Área</label>
              <select id="filtro-area-com" v-model="filtroCategoriaId" @change="aplicarFiltros" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                <option :value="null">Todas las áreas</option>
                <option v-for="cat in storeCategorias.items" :key="cat.id" :value="cat.id">{{ cat.nombre }}</option>
              </select>
            </div>
            <div>
              <label for="filtro-anio-com" class="block text-sm font-medium text-gray-700 mb-1">Año</label>
              <input id="filtro-anio-com" type="number" min="2020" :max="currentYear" v-model.number="filtroAnio" @change="aplicarFiltros" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm">
            </div>
            <div>
              <label for="filtro-orden-com" class="block text-sm font-medium text-gray-700 mb-1">Ordenar por</label>
              <select id="filtro-orden-com" v-model="ordenSeleccionado" @change="aplicarFiltros" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                <option value="reciente">Más Reciente</option>
                <option value="antiguo">Más Antiguo</option>
              </select>
            </div>
          </div>
        </div>
      </aside>

      <main class="lg:col-span-9">
        <div class="relative flex items-center mb-6">
            <div class="flex-grow border-t border-gray-300"></div>
            <h1 class="relative flex-shrink mx-4 text-2xl md:text-3xl font-bold text-gray-800 text-center">Comunicados</h1>
            <div class="flex-grow border-t border-gray-300"></div>
        </div>
        <div v-if="store.isLoading" class="text-center text-gray-500 my-10 p-5">
            <span class="inline-block animate-spin h-5 w-5 border-t-2 border-b-2 border-custom-red rounded-full mr-2"></span>
            Cargando comunicados...
        </div>
        <div v-else-if="store.error" class="text-center text-red-700 my-4 p-4 border border-red-300 bg-red-100 shadow-sm">
            {{ store.error }}
        </div>
        <div v-else-if="store.comunicados.length > 0" class="flex flex-col gap-4">
            <!-- USANDO EL COMPONENTE CORRECTO -->
            <cardComunicado v-for="comunicado in store.comunicados" :key="comunicado.id" :titulo="comunicado.titulo" :contenido="comunicado.resumen" :fecha="comunicado.fecha_publicacion" :areas="comunicado.categorias" :archivosCount="comunicado.archivos_count || 0" @click="verComunicado(comunicado)" />
        </div>
        <div v-else class="text-center text-gray-500 my-10 p-8 bg-white shadow">
            No se encontraron comunicados con los filtros seleccionados.
        </div>
        <pagination v-if="!store.isLoading && store.paginationData.totalPages > 1" :total-items="store.paginationData.totalItems" :items-per-page="store.paginationData.perPage" :current-page="store.paginationData.currentPage" @page-changed="cambiarPagina" class="mt-8" />
      </main>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { useComunicadosStore } from "@/stores/comunicados";
import { useCategoriasComunicadoStore } from "@/stores/categoriasComunicados";
// --- ¡AQUÍ ESTÁ LA CORRECCIÓN! ---
import cardComunicado from "@/components/Ui/cardComunicado.vue";
import pagination from "@/components/common/pagination.vue";

const store = useComunicadosStore();
const storeCategorias = useCategoriasComunicadoStore();
const route = useRoute();
const router = useRouter();

const currentYear = new Date().getFullYear();
const filtroCategoriaId = ref(route.query.categoria_id ? parseInt(route.query.categoria_id) : null);
const filtroAnio = ref(route.query.anio ? parseInt(route.query.anio) : currentYear);
const ordenSeleccionado = ref(route.query.orden || "reciente");

const cargarComunicados = (query) => {
  store.fetchComunicados({
    page: query.page || 1,
    per_page: 10,
    categoria_id: query.categoria_id || undefined,
    anio: query.anio == currentYear ? undefined : query.anio,
    orden: query.orden || 'reciente',
  });
};

watch(() => route.query, (newQuery) => {
  cargarComunicados(newQuery);
}, { immediate: true });

onMounted(() => {
  storeCategorias.fetchItems();
});

const aplicarFiltros = () => {
  const query = {};
  if (filtroCategoriaId.value) query.categoria_id = filtroCategoriaId.value;
  if (filtroAnio.value !== currentYear) query.anio = filtroAnio.value;
  if (ordenSeleccionado.value !== 'reciente') query.orden = ordenSeleccionado.value;
  router.push({ name: 'comunicados', query });
};

const cambiarPagina = (newPage) => {
  router.push({ name: 'comunicados', query: { ...route.query, page: newPage } });
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const verComunicado = (comunicado) => {
  router.push({ name: 'comunicadoCompleto', params: { id: comunicado.id } });
};
</script>

<style scoped>
.lg\:sticky { position: sticky; }
.lg\:top-24 { top: 6rem; }
.lg\:self-start { align-self: flex-start; }
</style>