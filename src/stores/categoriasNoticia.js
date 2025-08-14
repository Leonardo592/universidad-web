import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from '@/api/index';

export const useCategoriasNoticiaStore = defineStore("categoriasNoticia", () => {
  const items = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  async function fetchItems() {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get('/categorias-noticias');
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