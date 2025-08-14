import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBusquedaStore = defineStore('busqueda', () => {
  const termino = ref('');

  function actualizarTermino(nuevoTermino) {
    // Asegura que el término sea siempre un string
    termino.value = typeof nuevoTermino === 'string' ? nuevoTermino : '';
  }

  function limpiarTermino() {
    termino.value = '';
  }

  // Las funciones deben estar dentro del return para poder ser usadas fuera
  return { 
    termino, 
    actualizarTermino, 
    limpiarTermino 
  };
});