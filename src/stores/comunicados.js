import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient, { STORAGE_URL } from '@/api/index';

export const useComunicadosStore = defineStore("comunicados", () => {
  const comunicados = ref([]);
  const comunicadosRecientes = ref([]);
  const comunicadoSeleccionado = ref(null);
  const isLoading = ref(false);
  const error = ref(null);
  const paginationData = ref({
    currentPage: 1, totalPages: 1, totalItems: 0, perPage: 10,
  });

  const fixAttachmentUrls = (item) => {
    if (!item.archivos_adjuntos || item.archivos_adjuntos.length === 0) {
      return item;
    }
    const fixedAttachments = item.archivos_adjuntos.map(file => ({
      ...file,
      url_descarga: file.url_descarga && !file.url_descarga.startsWith('http')
        ? `${STORAGE_URL}${file.url_descarga}`
        : file.url_descarga,
    }));
    return { ...item, archivos_adjuntos: fixedAttachments };
  };

  async function fetchComunicados(filtros = {}) {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get('/comunicados', { params: filtros });
      comunicados.value = response.data.data.map(fixAttachmentUrls);
      paginationData.value = {
        currentPage: response.data.meta.current_page,
        totalPages: response.data.meta.last_page,
        totalItems: response.data.meta.total,
        perPage: parseInt(response.data.meta.per_page, 10),
      };
    } catch (err) {
      error.value = "No se pudieron cargar los comunicados.";
      comunicados.value = [];
    } finally {
      isLoading.value = false;
    }
  }
  
  async function fetchComunicadosRecientes(limite = 5) {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get('/comunicados', { params: { per_page: limite } });
      comunicadosRecientes.value = response.data.data.map(fixAttachmentUrls);
    } catch (err) {
      console.error("Error al obtener comunicados recientes:", err);
      comunicadosRecientes.value = [];
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchComunicadoById(id) {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get(`/comunicados/${id}`);
      comunicadoSeleccionado.value = fixAttachmentUrls(response.data.data);
    } catch (err) {
      error.value = "No se pudo cargar el comunicado.";
    } finally {
      isLoading.value = false;
    }
  }
  
  return {
    comunicados,
    comunicadosRecientes,
    comunicadoSeleccionado,
    isLoading,
    error,
    paginationData,
    fetchComunicados,
    fetchComunicadosRecientes,
    fetchComunicadoById,
  };
});