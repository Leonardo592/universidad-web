<template>
  <article @click="$emit('click')" class="group cursor-pointer flex flex-col h-full bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden border-b-4 border-transparent hover:border-uancv-red">
    <div class="overflow-hidden">
      <img :src="imgPath" :alt="titulo" class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" @error="onImageError" />
    </div>
    <div class="p-6 flex flex-col flex-grow">
      <div class="flex justify-between items-center mb-3">
        <span v-if="areas && areas.length > 0" class="px-3 py-1 bg-uancv-red text-white text-xs font-bold uppercase tracking-wider">
          {{ areas[0] }}
        </span>
        <span v-else class="px-3 py-1 bg-uancv-text-secondary text-white text-xs font-bold uppercase tracking-wider">
          Noticia
        </span>
        <span class="text-sm text-uancv-text-secondary">{{ fechaFormateada }}</span>
      </div>
      <h3 class="text-xl font-bold text-uancv-blue-dark leading-tight line-clamp-3 group-hover:text-uancv-red transition-colors flex-grow">
        {{ titulo }}
      </h3>
      <div class="mt-4 pt-4 border-t border-uancv-border">
        <div class="font-semibold text-uancv-red flex items-center gap-2 text-sm">
          <span>Leer más</span>
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </div>
      </div>
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
});
defineEmits(['click']);
const placeholderImage = '/img/placeholder/default-notice.jpg';
const fechaFormateada = computed(() => {
  if (!props.fecha) return '';
  try {
    return new Date(props.fecha).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch (e) { return props.fecha; }
});
const imgPath = computed(() => props.img || placeholderImage);
const onImageError = (event) => { event.target.src = placeholderImage; };
</script>

<style scoped>
.line-clamp-3 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; }
</style>