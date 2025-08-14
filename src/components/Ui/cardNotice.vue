<template>
  <article @click="handleClick" class="group cursor-pointer flex flex-col h-full bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out  overflow-hidden">
    
    <div class="w-full aspect-[4/3] overflow-hidden bg-gray-100 relative">
      <img v-if="img" :src="img" :alt="titulo" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" @error="onImageError" />
      <img v-else :src="placeholderImage" alt="Imagen no disponible" class="w-full h-full object-cover" />
    </div>

    <div class="p-4 flex flex-col flex-grow">
      <div class="flex flex-wrap items-center gap-2 mb-2 text-xs text-gray-500">
        <!-- ÁREA PARA LAS CATEGORÍAS (AHORA FUNCIONA) -->
        <div class="flex flex-wrap gap-1.5">
          <span v-if="areas && areas.length > 0" v-for="(area, index) in areas" :key="index" class="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-[10px] font-semibold">
            {{ area }}
          </span>
        </div>
        <!-- ÁREA PARA LA FECHA -->
        <div class="flex items-center gap-1 flex-shrink-0 ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <span>{{ fechaFormateada }}</span>
        </div>
      </div>
      
      <h3 class="text-lg font-bold text-gray-900 leading-tight mb-2 line-clamp-3 group-hover:text-custom-red transition-colors">
        {{ titulo }}
      </h3>
      
      <p v-if="contenido" class="text-sm text-gray-600 line-clamp-3 flex-grow">
        {{ contenido }}
      </p>

      <div class="mt-4 pt-2 border-t border-gray-100">
        <button class="font-semibold text-custom-red flex items-center gap-2 text-sm">
          Leer más
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
  img: { type: String, default: null },
  areas: { type: Array, default: () => [] },
});

const emit = defineEmits(['click']);

const placeholderImage = '/img/placeholder/default-notice.jpg';

const fechaFormateada = computed(() => {
  if (!props.fecha) return 'Sin fecha';
  try {
    const date = new Date(props.fecha);
    return isNaN(date.getTime()) ? props.fecha : date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch (e) {
    return props.fecha;
  }
});

const onImageError = (event) => {
  event.target.src = placeholderImage;
};

const handleClick = () => {
  emit('click');
};
</script>

<style scoped>
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>