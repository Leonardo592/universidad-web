<template>
  <section class="py-10 bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div class="max-w-screen-xl mx-auto">

      <div class="relative flex items-center mb-6 lg:mb-8">
        <div class="flex-grow border-t border-gray-300"></div>
        <h1 class="relative flex-shrink mx-4 text-2xl md:text-3xl font-bold text-gray-800 text-center">
          Videoteca
        </h1>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>

      <div v-if="store.isLoading" class="text-center text-gray-500 my-10 p-5">
        <span class="inline-block animate-spin h-5 w-5 border-t-2 border-b-2 border-custom-red rounded-full mr-2"></span>
        Cargando videos...
      </div>
      <div v-else-if="store.error" class="text-center text-red-700 my-4 p-4 border border-red-300 bg-red-100 rounded-lg shadow-sm">
        {{ store.error }}
      </div>
      
      <div v-else-if="store.videos.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="video in store.videos" :key="video.id" class="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden group transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col">
          <a :href="video.url_video" target="_blank" rel="noopener noreferrer" class="block">
            <div class="relative aspect-video bg-gray-200">
              <img v-if="video.id_video_youtube" :src="`https://img.youtube.com/vi/${video.id_video_youtube}/hqdefault.jpg`" :alt="video.titulo" class="w-full h-full object-cover transition-opacity duration-300" loading="lazy" />
              <div v-else class="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>
              </div>
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-opacity duration-300">
                 <svg class="w-12 h-12 text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 18V6L18 12L7 18Z" /></svg>
              </div>
            </div>
          </a>
          <div class="p-4 flex flex-col flex-grow">
            <h3 class="text-base font-semibold text-gray-800 line-clamp-2 mb-1 group-hover:text-custom-red">
              <a :href="video.url_video" target="_blank" rel="noopener noreferrer">{{ video.titulo }}</a>
            </h3>
            <p v-if="video.descripcion" class="text-xs text-gray-500 line-clamp-2 flex-grow">
              {{ video.descripcion }}
            </p>
          </div>
        </div>
      </div>
      
      <div v-else class="text-center text-gray-500 my-10 p-8 bg-white rounded-lg shadow">
        No se encontraron videos.
      </div>

      <pagination v-if="store.paginationData.totalPages > 1" :total-items="store.paginationData.totalItems" :items-per-page="store.paginationData.perPage" :current-page="store.paginationData.currentPage" @page-changed="cambiarPagina" class="mt-10" />

    </div>
  </section>
</template>

<script setup>
import { watch, onMounted } from "vue";
import { useVideosStore } from "@/stores/video";
import { useRoute, useRouter } from 'vue-router';
import Pagination from "@/components/common/pagination.vue";

const store = useVideosStore();
const route = useRoute();
const router = useRouter();

const cargarVideos = (query) => {
  store.fetchVideos({
    page: query.page || 1,
    per_page: 12, // 12 para llenar las 4 columnas
  });
};

watch(() => route.query, (newQuery) => {
  cargarVideos(newQuery);
}, { immediate: true });

const cambiarPagina = (newPage) => {
  router.push({ name: 'videos', query: { page: newPage } });
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
 .line-clamp-2 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
 .text-custom-red { color: #9C3620; }
</style>