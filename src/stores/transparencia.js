import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient, { STORAGE_URL } from '@/api/index';

export const useTransparenciaStore = defineStore("transparencia", () => {
  const items = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const fixDocUrls = (doc) => ({
    ...doc,
    url_descarga: doc.url_descarga && !doc.url_descarga.startsWith('http') 
      ? `${STORAGE_URL}${doc.url_descarga}` 
      : doc.url_descarga,
  });

  async function fetchItems() {
    if (isLoading.value || items.value.length > 0) return;
    
    isLoading.value = true;
    error.value = null;
    try {
      // Llamada simple, sin parámetros de paginación
      const response = await apiClient.get('/transparencia');
      
      // La respuesta no está paginada, así que accedemos a 'data' directamente
      items.value = response.data.data.map(item => ({
        ...item,
        documentos: item.documentos.map(fixDocUrls)
      }));
      
    } catch (err) {
      console.error("Error al cargar transparencia:", err);
      error.value = "No se pudieron cargar los documentos de transparencia.";
      items.value = [];
    } finally {
      isLoading.value = false;
    }
  }

  return { items, isLoading, error, fetchItems };
});