import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from '@/api/index';

export const useCategoriasComunicadoStore = defineStore("categoriasComunicado", () => {
  const items = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  async function fetchItems() {
    if (isLoading.value || items.value.length > 0) return;
    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get('/categorias-comunicados');
      items.value = response.data.data;
    } catch (err) {
      error.value = "No se pudieron cargar las categorías.";
      items.value = [];
    } finally {
      isLoading.value = false;
    }
  }

  return { items, isLoading, error, fetchItems };
});