import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from '@/api/index';

export const useVideosStore = defineStore("videos", () => {
  const videos = ref([]);
  const videosRecientes = ref([]); // <-- **Nombre corregido**
  const videoSeleccionado = ref(null);
  
  const isLoading = ref(false);
  const isLoadingRecientes = ref(false); // <-- **Nombre corregido**
  
  const error = ref(null);
  const paginationData = ref({
    currentPage: 1, totalPages: 1, totalItems: 0, perPage: 9,
  });

  async function fetchVideos(filtros = {}) {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get('/videos', { params: filtros });
      videos.value = response.data.data;
      paginationData.value = {
        currentPage: response.data.meta.current_page,
        totalPages: response.data.meta.last_page,
        totalItems: response.data.meta.total,
        perPage: parseInt(response.data.meta.per_page, 10),
      };
    } catch (err) {
      error.value = "No se pudieron cargar los videos.";
      videos.value = [];
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchVideosRecientes(limite = 5) {
    isLoadingRecientes.value = true; // <-- Usa el loader específico
    try {
      const response = await apiClient.get('/videos', { params: { per_page: limite } });
      videosRecientes.value = response.data.data;
    } catch (err) {
      console.error("Error al obtener videos recientes:", err);
      // Opcional: puedes poner un error específico para esta sección
      // error.value = "No se pudieron cargar los videos recientes"; 
      videosRecientes.value = [];
    } finally {
      isLoadingRecientes.value = false; // <-- Usa el loader específico
    }
  }
  
  return {
    videos, 
    videosRecientes, // <-- Nombre exportado corregido
    videoSeleccionado, 
    isLoading, 
    isLoadingRecientes, // <-- Nombre exportado corregido
    error, 
    paginationData,
    fetchVideos, 
    fetchVideosRecientes
  };
});