import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import apiClient from '@/api/index';
import _debounce from 'lodash/debounce';

export const useBusquedaResultadosStore = defineStore('busquedaResultados', () => {
  const noticias = ref([]);
  const comunicados = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const mostrarResultados = ref(false);

  const todosLosResultados = computed(() => [
    ...noticias.value.map(n => ({ ...n, tipo: 'noticia', url: `/noticias/${n.id}` })),
    ...comunicados.value.map(c => ({ ...c, tipo: 'comunicado', url: `/comunicados/${c.id}` }))
  ].slice(0, 5)); // Limita a 5 resultados en total

  const buscarResultados = _debounce(async (termino) => {
    if (!termino || termino.length < 3) {
      noticias.value = [];
      comunicados.value = [];
      mostrarResultados.value = false;
      return;
    }

    isLoading.value = true;
    error.value = null;
    mostrarResultados.value = true;

    try {
      const [resNoticias, resComunicados] = await Promise.all([
        apiClient.get('/noticias', { params: { buscar: termino, per_page: 5 } }),
        apiClient.get('/comunicados', { params: { buscar: termino, per_page: 5 } })
      ]);
      noticias.value = resNoticias.data.data;
      comunicados.value = resComunicados.data.data;
    } catch (err) {
      error.value = "Error al buscar.";
      noticias.value = [];
      comunicados.value = [];
    } finally {
      isLoading.value = false;
    }
  }, 300);

  function limpiarResultados() {
    noticias.value = [];
    comunicados.value = [];
    mostrarResultados.value = false;
  }
  
  function ocultarResultados() {
    mostrarResultados.value = false;
  }

  return {
    todosLosResultados,
    isLoading,
    error,
    mostrarResultados,
    buscarResultados,
    limpiarResultados,
    ocultarResultados,
  };
});