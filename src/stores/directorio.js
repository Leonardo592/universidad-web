import { defineStore } from "pinia";
import { ref, computed } from "vue";
import apiClient, { STORAGE_URL } from '@/api/index';
import { useBusquedaStore } from "@/stores/busqueda";

export const useDirectorioStore = defineStore("directorio", () => {
  const personas = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const pdfUrl = ref(null);

  const fixUrls = (item) => ({
    ...item,
    foto_url: item.foto_url && !item.foto_url.startsWith('http') ? `${STORAGE_URL}${item.foto_url}` : item.foto_url,
    documento_url: item.documento_url && !item.documento_url.startsWith('http') ? `${STORAGE_URL}${item.documento_url}` : item.documento_url,
  });

  async function fetchDirectorio() {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get('/directorio');
      personas.value = response.data.data.map(fixUrls);
    } catch (err) {
      error.value = "No se pudo cargar el directorio.";
      personas.value = [];
    } finally {
      isLoading.value = false;
    }
  }

  const busquedaStore = useBusquedaStore();
  const personasFiltradas = computed(() => {
    const termino = busquedaStore.termino.trim().toLowerCase();
    if (!termino) return personas.value;
    return personas.value.filter(p =>
      p.nombre.toLowerCase().includes(termino) || p.cargo.toLowerCase().includes(termino)
    );
  });

  const director = computed(() => {
    return personasFiltradas.value.find(p => p.cargo.toLowerCase() === 'director');
  });

  const jefes = computed(() => {
    const keywords = ['jefe de área', 'jefe de oficina'];
    return personasFiltradas.value.filter(p =>
      p.cargo.toLowerCase() !== 'director' && keywords.some(k => p.cargo.toLowerCase().includes(k))
    );
  });

  const otroPersonal = computed(() => {
    const directorId = director.value?.id;
    const jefeIds = new Set(jefes.value.map(j => j.id));
    return personasFiltradas.value.filter(p =>
      p.id !== directorId && !jefeIds.has(p.id)
    );
  });

  return { 
    personas, 
    isLoading, 
    error, 
    pdfUrl,
    fetchDirectorio, 
    personasFiltradas,
    director,
    jefes,
    otroPersonal
  };
});