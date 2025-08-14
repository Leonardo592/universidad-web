<template>
  <article @click="handleClick" class="w-full bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col overflow-hidden cursor-pointer p-4 gap-4 min-h-[160px] group">
    <div class="w-full flex flex-col justify-between h-full">
      <div>
        <div class="flex flex-wrap justify-between items-center gap-x-3 gap-y-1.5 mb-2 text-xs text-gray-500">
          <div class="flex flex-wrap items-center gap-1.5">
            <span v-if="!areas || areas.length === 0" class="italic text-gray-400 text-[11px]">Sin categoría</span>
            <span v-else v-for="(area, index) in areas" :key="index" class="font-medium px-2 py-0.5 rounded-full whitespace-nowrap text-[10px] sm:text-[11px] truncate max-w-[150px] bg-sky-100 text-sky-800">
              {{ area }}
            </span>
          </div>
          <div class="flex items-center flex-shrink-0 whitespace-nowrap text-[11px] sm:text-xs">
            <svg class="w-3.5 h-3.5 mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/></svg>
            <span>{{ fechaFormateada }}</span>
          </div>
        </div>

        <h5 class="text-base sm:text-lg font-bold text-gray-900 line-clamp-3 leading-tight mb-2 group-hover:text-custom-red transition-colors">
          {{ titulo }}
        </h5>

        <p class="text-gray-600 text-sm line-clamp-4 flex-grow mb-3">
          {{ contenidoSinHtml }}
        </p>
      </div>

      <div class="mt-auto text-left">
        <button @click.stop="handleClick" class="inline-flex items-center px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white bg-custom-red hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded transition-colors">
          Leer más
          <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  titulo: { type: String, required: true },
  contenido: { type: String, default: '' },
  fecha: { type: String, required: true },
  areas: { type: Array, default: () => [] },
});

const emit = defineEmits(['click']);

const fechaFormateada = computed(() => {
  if (!props.fecha) return 'Sin fecha';
  const date = new Date(props.fecha);
  return isNaN(date.getTime()) ? props.fecha : date.toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
});

const contenidoSinHtml = computed(() => {
  if (!props.contenido) return 'Sin descripción disponible.';
  const div = document.createElement('div');
  div.innerHTML = props.contenido;
  return (div.textContent || div.innerText || '').replace(/\s\s+/g, ' ').trim();
});

const handleClick = () => {
  emit('click');
};
</script>

<style scoped>
 .line-clamp-2 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
 .line-clamp-3 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; }
 .line-clamp-4 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4; }
 .truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
 .max-w-\[150px\] { max-width: 150px; }
</style>