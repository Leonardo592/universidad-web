<template>
    <div v-if="store.recentVideos.length > 0 || store.isLoadingRecent" class="py-12 bg-gray-50"> <!-- Fondo gris claro para separar visualmente -->
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
          Videoteca Reciente
        </h2>
  
        <div v-if="store.isLoadingRecent" class="text-center text-gray-500 py-8">
          <span class="inline-block animate-spin h-8 w-8 border-t-2 border-b-2 border-custom-red rounded-full mr-2" role="status" aria-hidden="true"></span>
          Cargando videos...
        </div>
  
        <div v-else-if="store.recentVideos.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <!-- Usamos VideoCard aquí -->
          <VideoCard
            v-for="video in store.recentVideos"
            :key="video.id"
            :video="video"
            @select-video="handleVideoSelect"
          />
        </div>
  
        <div v-else class="text-center text-gray-500 py-10 px-6 bg-white rounded-lg shadow">
          <p class="text-lg">No hay videos recientes para mostrar en este momento.</p>
          <p v-if="store.error" class="text-sm text-red-600 mt-2">Error: {{ store.error }}</p>
        </div>
  
        <!-- Botón para ver todos los videos, solo si hay videos recientes -->
        <div v-if="!store.isLoadingRecent && store.recentVideos.length > 0" class="text-center mt-10">
          <router-link
            to="/videos" <!-- Asegúrate que esta es la ruta a tu videoteca principal -->
            class="inline-block bg-custom-red text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-custom-red focus:ring-opacity-50"
          >
            Ver todos los videos
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useVideosStore } from '@/stores/video';
  import VideoCard from '@/components/Ui/videoCard.vue'; // Asegúrate que la ruta es correcta
  import { useRouter } from 'vue-router';
  
  const store = useVideosStore();
  const router = useRouter();
  
  const numberOfRecentVideosToFetch = 5; // O 4 si prefieres
  
  onMounted(async () => {
    console.log('[SeccionVideosRecientes.vue] Componente Montado.');
    if (!store.isLoadingRecent && store.recentVideos.length < numberOfRecentVideosToFetch) { // Cargar si no hay suficientes
      console.log('[SeccionVideosRecientes.vue] Llamando a fetchRecentVideos...');
      await store.fetchRecentVideos(numberOfRecentVideosToFetch);
    }
  });
  
  const handleVideoSelect = (video) => {
    store.seleccionarVideo(video);
    // Navegar a la página de videoteca donde se muestra el detalle.
    // El componente `videos.vue` (tu videoteca principal) ya maneja el scroll si `videoSeleccionado` cambia.
    router.push('/videos');
  };
  </script>
  
  <style scoped>
  /* Puedes añadir estilos específicos para esta sección si los necesitas,
     pero la mayoría de los estilos de las cards vienen de VideoCard.vue */
  </style>