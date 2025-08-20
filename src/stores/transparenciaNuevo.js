import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient, { STORAGE_URL } from "@/api/index";

export const useTransparenciaNuevoStore = defineStore("transparenciaNuevo", () => {
  const categorias = ref([]);
  const categoriaSeleccionada = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  const paginationData = ref({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    perPage: 10,
  });

  const fixDocsUrl = (categoria) => ({
    ...categoria,
    documentos: categoria.documentos?.map((doc) => ({
      ...doc,
      url: doc.url?.startsWith("http")
        ? doc.url
        : `${STORAGE_URL}${doc.url}`,
    })) || [],
  });

  /** Obtener lista de categorías */
  async function fetchCategorias(filtros = {}) {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get("/categorias-transparencia", {
        params: filtros,
      });

      if (response.data && response.data.data) {
        categorias.value = response.data.data.map(fixDocsUrl);
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
      console.error("Error al obtener categorías:", err);
      error.value = "No se pudieron cargar las categorías.";
      categorias.value = [];
    } finally {
      isLoading.value = false;
    }
  }

  /** Obtener una categoría por ID */
  async function fetchCategoriaById(id) {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get(`/categorias-transparencia/${id}`);
      if (response.data && response.data.data) {
        categoriaSeleccionada.value = fixDocsUrl(response.data.data);
      } else {
        throw new Error("La categoría no se encontró.");
      }
    } catch (err) {
      console.error("Error al obtener categoría:", err);
      error.value = "No se pudo cargar la categoría.";
    } finally {
      isLoading.value = false;
    }
  }

  /** Crear nueva categoría */
  async function createCategoria(payload) {
    try {
      const response = await apiClient.post("/categorias-transparencia", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return { success: true, data: fixDocsUrl(response.data.data) };
    } catch (err) {
      console.error("Error al crear categoría:", err);
      return {
        success: false,
        errors: err.response?.data?.errors || { general: "Error inesperado." },
      };
    }
  }

  /** Actualizar categoría */
  async function updateCategoria(id, payload) {
    try {
      const response = await apiClient.post(
        `/categorias-transparencia/${id}?_method=PUT`,
        payload,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return { success: true, data: fixDocsUrl(response.data.data) };
    } catch (err) {
      console.error("Error al actualizar categoría:", err);
      return {
        success: false,
        errors: err.response?.data?.errors || { general: "Error inesperado." },
      };
    }
  }

  /** Eliminar categoría */
  async function deleteCategoria(id) {
    try {
      await apiClient.delete(`/categorias-transparencia/${id}`);
      categorias.value = categorias.value.filter((c) => c.id !== id);
      return { success: true };
    } catch (err) {
      console.error("Error al eliminar categoría:", err);
      return { success: false };
    }
  }

  return {
    categorias,
    categoriaSeleccionada,
    isLoading,
    error,
    paginationData,
    fetchCategorias,
    fetchCategoriaById,
    createCategoria,
    updateCategoria,
    deleteCategoria,
  };
});
