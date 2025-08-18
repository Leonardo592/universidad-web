import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient, { STORAGE_URL } from '@/api/index';

export const useNoticiasStore = defineStore("noticias", () => {
  const noticias = ref([]);
  const noticiasRecientes = ref([]);
  const noticiaSeleccionada = ref(null);
  const noticiasRelacionadas = ref([]);
  const isLoading = ref(false);
  const isLoadingRecientes = ref(false); 
  const isLoadingRelacionadas = ref(false);
  const error = ref(null);
  const paginationData = ref({
    currentPage: 1, totalPages: 1, totalItems: 0, perPage: 9,
  });

  const fixImageUrl = (item) => ({
    ...item,
    imagen_url: item.imagen_url && !item.imagen_url.startsWith('http')
      ? `${STORAGE_URL}${item.imagen_url}`
      : item.imagen_url,
  });

  async function fetchNoticias(filtros = {}) {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get('/noticias', { params: filtros });
      if (response.data && response.data.data) {
        noticias.value = response.data.data.map(fixImageUrl);
        paginationData.value = {
          currentPage: response.data.meta.current_page,
          totalPages: response.data.meta.last_page,
          totalItems: response.data.meta.total,
          perPage: parseInt(response.data.meta.per_page, 10),
        };
      } else {
        throw new Error("La respuesta de la API no tiene el formato esperado.");
      }
    } catch (err) {
      error.value = "No se pudieron cargar las noticias.";
      noticias.value = [];
    } finally {
      isLoading.value = false;
    }
  }
  
  async function fetchNoticiasRecientes(limite = 3) {
    isLoadingRecientes.value = true;
    error.value = null;
    try {
     
      const response = await apiClient.get('/noticias', { 
        params: { 
          per_page: limite,
          orden: 'reciente' 
        } 
      });

      if (response.data && response.data.data && Array.isArray(response.data.data)) {
        noticiasRecientes.value = response.data.data.map(fixImageUrl);
      } else {
        throw new Error("La respuesta de la API para noticias recientes no es válida.");
      }
    } catch (err) {
      console.error("Error al obtener noticias recientes:", err);
      error.value = "No se pudieron cargar las noticias recientes.";
      noticiasRecientes.value = [];
    } finally {
      isLoadingRecientes.value = false;
    }
  }

  async function fetchNoticiaById(id) {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get(`/noticias/${id}`);
       if (response.data && response.data.data) {
        noticiaSeleccionada.value = fixImageUrl(response.data.data);
      } else {
        throw new Error("La noticia solicitada no se encontró.");
      }
    } catch (err) {
      error.value = "No se pudo cargar la noticia.";
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchNoticiasRelacionadas(categoriaId, noticiaActualId, limite = 3) {
    isLoadingRelacionadas.value = true;
    try {
      const response = await apiClient.get('/noticias', { 
        params: { categoria_id: categoriaId, per_page: limite + 1 } 
      });
       if (response.data && response.data.data) {
        noticiasRelacionadas.value = response.data.data
          .filter(noticia => noticia.id !== noticiaActualId)
          .slice(0, limite)
          .map(fixImageUrl);
      } else {
        noticiasRelacionadas.value = [];
      }
    } catch (err) {
      console.error("Error al obtener noticias relacionadas:", err);
      noticiasRelacionadas.value = [];
    } finally {
      isLoadingRelacionadas.value = false;
    }
  }
  
  return {
    noticias,
    noticiasRecientes,
    noticiaSeleccionada,
    noticiasRelacionadas,
    isLoading,
    isLoadingRecientes,
    isLoadingRelacionadas,
    error,
    paginationData,
    fetchNoticias,
    fetchNoticiasRecientes,
    fetchNoticiaById,
    fetchNoticiasRelacionadas,
  };
});