<template>
  <div v-if="store.videosRecientes.length > 0 || store.isLoadingRecientes" class="py-12 bg-gray-50">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
        Videoteca Reciente
      </h2>

      <!-- USA isLoadingRecientes -->
      <div v-if="store.isLoadingRecientes" class="text-center text-gray-500 py-8">
        <span class="inline-block animate-spin h-8 w-8 border-t-2 border-b-2 border-custom-red rounded-full mr-2" role="status" aria-hidden="true"></span>
        Cargando videos...
      </div>
      
      <!-- USA videosRecientes -->
      <div v-else-if="store.videosRecientes.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <VideoCard v-for="video in store.videosRecientes" :key="video.id" :video="video" @select-video="handleVideoSelect" />
      </div>

      <div v-else class="text-center text-gray-500 py-10 px-6 bg-white rounded-lg shadow">
        <p class="text-lg">No hay videos recientes para mostrar en este momento.</p>
        <p v-if="store.error" class="text-sm text-red-600 mt-2">Error: {{ store.error }}</p>
      </div>

      <!-- USA isLoadingRecientes y videosRecientes -->
      <div v-if="!store.isLoadingRecientes && store.videosRecientes.length > 0" class="text-center mt-10">
        <router-link to="/videos" class="inline-block bg-custom-red text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-custom-red focus:ring-opacity-50">
          Ver todos los videos
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useVideosStore } from '@/stores/video';
import VideoCard from '@/components/Ui/videoCard.vue';
import { useRouter } from 'vue-router';

const store = useVideosStore();
const router = useRouter();

const numberOfRecentVideosToFetch = 5;

onMounted(async () => {
  // USA isLoadingRecientes y videosRecientes
  if (!store.isLoadingRecientes && store.videosRecientes.length < numberOfRecentVideosToFetch) {
    await store.fetchVideosRecientes(numberOfRecentVideosToFetch);
  }
});

const handleVideoSelect = (video) => {
  store.videoSeleccionado = video;
  router.push('/videos');
};
</script>

<style scoped>
/* Estilos */
</style>