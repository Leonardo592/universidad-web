<template>
  <article @click="$emit('click')" class="group cursor-pointer flex flex-col h-full bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
    
    <!-- <div class="w-full aspect-[4/3] overflow-hidden bg-gray-100 relative">
      <img :src="imgPath" :alt="titulo" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" @error="onImageError" />
    </div> -->

    <div class="p-4 flex flex-col flex-grow">
      <div class="flex flex-wrap justify-between items-center gap-2 mb-2 text-xs text-gray-500">
        <!-- ÁREA PARA LAS CATEGORÍAS (ESTILO CORREGIDO) -->
        <div class="flex flex-wrap gap-1.5">
          <span v-if="areas && areas.length > 0" v-for="(area, index) in areas" :key="index" class="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-[10px] font-semibold">
            {{ area }}
          </span>
          <span v-else class="text-gray-400 italic text-[10px]">Sin categoría</span>
        </div>
        <!-- ÁREA PARA LA FECHA (POSICIÓN CORREGIDA) -->
        <div class="flex items-center gap-1 flex-shrink-0 ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <span class="text-sm">{{ fechaFormateada }}</span>
        </div>
      </div>
      
      <h3 class="text-lg font-bold text-gray-800 leading-tight mb-2 line-clamp-3 group-hover:text-custom-red transition-colors">
        {{ titulo }}
      </h3>

      <div class="mt-auto pt-4">
        <button class="font-semibold text-custom-red flex items-center gap-2 text-sm">
          Leer más
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </button>
      </div>
    </div>
    
    <!-- BARRA DE COLORES INFERIOR (DISEÑO RESTAURADO) -->
    <div class="absolute bottom-0 left-0 right-0 h-[4px] flex"> 
      <div class="flex-1 bg-custom-red"></div>    
      <div class="flex-1 bg-yellow-400"></div>
      <div class="flex-1 bg-custom-red"></div>    
      <div class="flex-1 bg-yellow-400"></div>
      <div class="flex-1 bg-custom-red"></div> 
      <div class="flex-1 bg-yellow-400"></div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  titulo: { type: String, required: true },
  fecha: { type: String, required: true },
  img: { type: String, default: null },
  areas: { type: Array, default: () => [] },
  // Las props de 'rounded' y 'badgeColor' ya no son necesarias aquí
});

defineEmits(['click']);

const placeholderImage = '/img/placeholder/default-notice.jpg';

const fechaFormateada = computed(() => {
  if (!props.fecha) return 'Sin fecha';
  try {
    const date = new Date(props.fecha);
    // Formato "04 ago 2025"
    return isNaN(date.getTime()) ? props.fecha : date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }).replace('.', '');
  } catch (e) {
    return props.fecha;
  }
});

const imgPath = computed(() => {
  return props.img || placeholderImage;
});

const onImageError = (event) => {
  event.target.src = placeholderImage;
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