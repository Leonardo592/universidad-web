import { defineStore } from "pinia";
import { ref, computed } from "vue";
import apiClient, { STORAGE_URL } from '@/api/index';

export const useGestionStore = defineStore("gestion", () => {
  const gestionData = ref({});
  const isLoading = ref(false);
  const error = ref(null);

  const processGestionData = (item) => {
    if (!item) return null;
    
    let reglasArray = [];
    if (item.reglas) {
      try {
        reglasArray = Array.isArray(item.reglas) ? item.reglas : JSON.parse(item.reglas);
        if (!Array.isArray(reglasArray)) reglasArray = [];
      } catch (e) {
        console.error("Error al parsear JSON de reglas:", item.reglas, e);
        reglasArray = [];
      }
    }

    return {
      ...item,
      documento_url: item.documento_url && !item.documento_url.startsWith('http') 
        ? `${STORAGE_URL}${item.documento_url}` 
        : item.documento_url,
      reglas_array: reglasArray,
    };
  };

  async function fetchGestionPorTipo(tipoGestion) {
    if (gestionData.value[tipoGestion]) return;
    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get('/gestiones', { params: { tipo: tipoGestion } });
      const data = Array.isArray(response.data.data) ? response.data.data[0] : response.data.data;
      gestionData.value[tipoGestion] = processGestionData(data);
    } catch (err) {
      error.value = `No se pudieron cargar los datos para ${tipoGestion}.`;
      gestionData.value[tipoGestion] = null;
    } finally {
      isLoading.value = false;
    }
  }

  const getDatosPorTipo = (tipo) => {
    return computed(() => gestionData.value[tipo] || null);
  };

  return { gestionData, isLoading, error, fetchGestionPorTipo, getDatosPorTipo };
});