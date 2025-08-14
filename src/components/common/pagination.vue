<template>
  <div class="flex flex-col items-center mt-6 sm:mt-8">
    <nav v-if="totalPages > 1" aria-label="Paginación">
      <ul class="inline-flex items-center -space-x-px text-sm">
        <li>
          <button
            @click="goToPage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="flex items-center justify-center px-3 h-9 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            :class="{'hover:bg-custom-red hover:text-white !border-custom-red !text-custom-red': currentPage !== 1, '!bg-custom-red !text-white': currentPage === 1 && totalPages > 1 && false}"
          >
            <span class="sr-only">Anterior</span>
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 1 1 5l4 4"/>
            </svg>
          </button>
        </li>

        <li v-for="page in pages" :key="page.name">
          <span
            v-if="page.isDisabled"
            class="flex items-center justify-center px-3 h-9 leading-tight text-gray-500 bg-white border border-gray-300"
          >...</span>
          <button
            v-else
            @click="goToPage(page.name)"
            :disabled="page.name === currentPage"
            class="flex items-center justify-center px-3 h-9 leading-tight border border-gray-300"
            :class="{
              'text-white bg-custom-red hover:bg-custom-red-darker hover:text-white border-custom-red': page.name === currentPage,
              'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700': page.name !== currentPage
            }"
            aria-current_page="page.name === currentPage ? 'page' : undefined"
          >
            {{ page.name }}
          </button>
        </li>

        <li>
          <button
            @click="goToPage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="flex items-center justify-center px-3 h-9 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            :class="{'hover:bg-custom-red hover:text-white !border-custom-red !text-custom-red': currentPage !== totalPages, '!bg-custom-red !text-white': currentPage === totalPages && totalPages > 1 && false}"
          >
            <span class="sr-only">Siguiente</span>
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1 9 4-4-4-4"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  totalItems: { type: Number, required: true },
  itemsPerPage: { type: Number, required: true },
  currentPage: { type: Number, required: true },
  maxVisibleButtons: { type: Number, default: 5 } // Cuántos botones de número mostrar como máximo (sin contar Prev/Next/...)
});

const emit = defineEmits(["page-changed"]);

const totalPages = computed(() => {
  if (props.itemsPerPage <= 0) return 0;
  return Math.ceil(props.totalItems / props.itemsPerPage);
});

const inicio = computed(() => {
  if (props.totalItems === 0) return -1;
  return (props.currentPage - 1) * props.itemsPerPage;
});

const fin = computed(() => {
  if (props.totalItems === 0) return 0;
  return Math.min(inicio.value + props.itemsPerPage, props.totalItems);
});

const pages = computed(() => {
  const range = [];
  const C = props.currentPage;
  const T = totalPages.value;
  const M = props.maxVisibleButtons; // Máximo de botones de página visibles (ej. 5)

  if (T <= 1) return [];

  // Botón para la primera página
  range.push({ name: 1, isDisabled: false });

  // Puntos suspensivos iniciales
  // Si la página actual está más allá de M/2 + 1 desde el inicio y no estamos cerca del final
  if (C > Math.floor(M / 2) + 1 && T > M) {
    if (C > Math.floor(M / 2) + 2) { // Solo muestra puntos si hay al menos una página entre '1' y el bloque de C
        range.push({ name: '...', isDisabled: true });
    }
  }

  // Números de página alrededor de la actual
  let startPage, endPage;
  if (T <= M) {
    // Menos o igual páginas que el máximo de botones: mostrar todas excepto la primera y última si ya están
    startPage = 2;
    endPage = T - 1;
  } else {
    // Más páginas que el máximo de botones: calcular el rango
    const half = Math.floor((M - 2) / 2); // -2 por la primera y última página que siempre intentamos mostrar
    if (C <= Math.floor(M / 2) + 1) { // Cerca del inicio
        startPage = 2;
        endPage = M -1; // M-1 porque la página 1 ya está
    } else if (C >= T - Math.floor(M / 2) ) { // Cerca del final
        startPage = T - M + 2;
        endPage = T -1;
    } else { // En el medio
        startPage = C - half;
        endPage = C + half;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    if (i > 1 && i < T) { // No volver a añadir la primera ni la última
        range.push({ name: i, isDisabled: false });
    }
  }

  // Puntos suspensivos finales
  // Si la página actual está antes de T - M/2 y no estamos cerca del inicio
  if (C < T - Math.floor(M / 2) && T > M) {
     if (C < T - Math.floor(M / 2) -1 ) { // Solo muestra puntos si hay al menos una página entre el bloque de C y 'T'
        range.push({ name: '...', isDisabled: true });
     }
  }

  // Botón para la última página (si no es la primera y hay más de una página)
  if (T > 1) {
    range.push({ name: T, isDisabled: false });
  }
  
  // Eliminar duplicados (ej. si T=1, 2 o 3, la primera y última pueden ser la misma o adyacentes a los números calculados)
  // y asegurar que solo haya un '...' consecutivo.
  const uniquePages = [];
  let lastPage = null;
  for (const page of range) {
      if (page.isDisabled) {
          if (lastPage !== '...') { // Evita '...' '...'
              uniquePages.push(page);
              lastPage = '...';
          }
      } else {
          if (lastPage !== page.name) { // Evita números duplicados
              uniquePages.push(page);
              lastPage = page.name;
          }
      }
  }
  // Si la primera y segunda son '1' y '...', pero la tercera es '2', quitar los '...'
  if (uniquePages.length >=3 && uniquePages[0].name === 1 && uniquePages[1].isDisabled && uniquePages[2].name === 2){
    uniquePages.splice(1,1);
  }
  // Si las antepenúltima y última son '...' y 'T', pero la penúltima es 'T-1', quitar los '...'
  if (uniquePages.length >=3 && uniquePages[uniquePages.length-1].name === T && uniquePages[uniquePages.length-2].isDisabled && uniquePages[uniquePages.length-3].name === T-1){
    uniquePages.splice(uniquePages.length-2,1);
  }


  return uniquePages;
});


const goToPage = (pageNumber) => {
  if (pageNumber >= 1 && pageNumber <= totalPages.value) {
    emit("page-changed", pageNumber);
  }
};

</script>