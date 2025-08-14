<template>
  <section class="py-10 bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div class="max-w-screen-xl mx-auto">
      <div v-if="store.isLoading" class="flex justify-center items-center h-screen">
        <div class="text-center text-gray-500">
          <span class="inline-block animate-spin h-8 w-8 border-t-2 border-b-2 border-custom-red rounded-full"></span>
          <p class="mt-4 text-lg">Cargando noticia...</p>
        </div>
      </div>
      
      <div v-else-if="store.error" class="text-center text-red-700 my-10 p-6 border border-red-300 bg-red-50 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold mb-2">Error</h2>
        <p>{{ store.error }}</p>
        <router-link to="/noticias" class="mt-4 inline-block bg-custom-red text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-700 transition">
          Volver a Noticias
        </router-link>
      </div>
      
      <div v-else-if="store.noticiaSeleccionada" class="grid grid-cols-1 lg:grid-cols-12 gap-x-8">
        <article class="lg:col-span-8 bg-white shadow-xl rounded-lg overflow-hidden">
          <div class="p-5 sm:p-8">
            <router-link to="/noticias" class="mb-6 inline-flex items-center text-sm font-medium text-custom-red hover:text-red-800 transition duration-150 ease-in-out group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
              Ver todas las noticias
            </router-link>
            
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3">{{ store.noticiaSeleccionada.titulo }}</h1>
            
            <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-6">
              <span>Publicado el {{ fechaFormateada(store.noticiaSeleccionada.fecha_publicacion) }}</span>
              <span v-if="store.noticiaSeleccionada.categorias && store.noticiaSeleccionada.categorias.length > 0" class="flex flex-wrap items-center gap-2">
                <span class="font-medium text-gray-600">en:</span>
                <span v-for="cat in store.noticiaSeleccionada.categorias" :key="cat.id" class="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{{ cat.nombre }}</span>
              </span>
            </div>
            
            <div class="prose prose-lg max-w-none text-gray-800 leading-relaxed clear-fix">
              <img v-if="store.noticiaSeleccionada.imagen_url" :src="store.noticiaSeleccionada.imagen_url" alt="Imagen de la noticia" class="float-left mr-6 mb-4 w-full max-w-sm rounded-lg shadow-md bg-gray-100 sm:max-w-md lg:max-w-lg" style="shape-outside: margin-box;">
              <div v-html="store.noticiaSeleccionada.contenido"></div>
            </div>
          </div>
        </article>
        
        <aside class="lg:col-span-4 h-fit lg:sticky lg:top-24 self-start space-y-6">
          <div class="bg-white p-5 rounded-lg shadow">
            <div class="flex items-center mb-4">
               <h3 class="text-xl font-semibold text-gray-900">Noticias Relacionadas</h3>
               <span class="flex-grow h-0.5 bg-custom-red ml-4"></span>
            </div>
            <div v-if="store.isLoadingRelacionadas" class="text-center text-gray-500 text-sm py-4">Cargando...</div>
            <div v-else-if="store.noticiasRelacionadas.length > 0" class="space-y-4">
              <cardPrevNoticias 
                v-for="relacionada in store.noticiasRelacionadas" 
                :key="relacionada.id" 
                :titulo="relacionada.titulo" 
                :fecha="relacionada.fecha_publicacion" 
                :img="relacionada.imagen_url" 
                :areas="relacionada.categorias"
                :rounded="true"
                size="small"
                @click="verNoticia(relacionada)"
              />
            </div>
            <div v-else class="text-sm text-gray-500 text-center py-4">No hay noticias relacionadas.</div>
          </div>
        </aside>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import { useNoticiasStore } from "@/stores/noticias";
import cardPrevNoticias from "@/components/Ui/cardPrevNoticias.vue";

const store = useNoticiasStore();
const route = useRoute();
const router = useRouter();

const cargarNoticiaCompleta = async (noticiaId) => {
  if (!noticiaId) return;

  store.noticiaSeleccionada = null;
  store.noticiasRelacionadas = [];
  
  await store.fetchNoticiaById(noticiaId);

  if (store.noticiaSeleccionada && !store.error && store.noticiaSeleccionada.categorias?.length > 0) {
    const categoriaId = store.noticiaSeleccionada.categorias[0].id;
    const actualId = store.noticiaSeleccionada.id;
    store.fetchNoticiasRelacionadas(categoriaId, actualId, 4);
  }
};

onMounted(() => {
  cargarNoticiaCompleta(route.params.id);
});

watch(() => route.params.id, (newId, oldId) => {
  if (newId && newId !== oldId) {
    cargarNoticiaCompleta(newId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

onBeforeRouteLeave(() => {
  store.noticiaSeleccionada = null;
  store.noticiasRelacionadas = [];
});

const verNoticia = (noticia) => {
  router.push({ name: 'noticiaCompleta', params: { id: noticia.id } });
};

const fechaFormateada = (fecha) => {
  if (!fecha) return '';
  const date = new Date(fecha);
  return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
};
</script>

<style>
.prose p {
  text-align: justify;
  margin-bottom: 1.25em;
  line-height: 1.75;
}
.lg\:sticky { position: sticky; }
.lg\:top-24 { top: 6rem; }
.lg\:self-start { align-self: flex-start; }
.clear-fix::after {
  content: "";
  clear: both;
  display: table;
}
</style>