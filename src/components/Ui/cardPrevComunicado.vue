<template>
  <article
    @click="$emit('click')"
    class="cursor-pointer group py-3 hover:bg-gray-50/50"
  >
    <div class="flex items-start justify-between gap-x-3 sm:gap-x-4">
      <div class="flex-1 min-w-0">
        <h5 class="text-sm font-medium text-gray-800 group-hover:text-custom-red transition-colors line-clamp-2 sm:line-clamp-3 leading-snug">
          {{ titulo || 'Sin Título' }}
        </h5>
      </div>

      <div class="flex-shrink-0 text-xs text-right w-auto sm:w-auto max-w-[100px] sm:max-w-[120px]">
        <span
          v-if="areaPrincipalNombre"
          :style="{ backgroundColor: areaEstiloCalculado.bg, color: areaEstiloCalculado.text }"
          class="inline-block text-center font-medium px-2 py-0.5 rounded-full whitespace-nowrap text-[10px] sm:text-[11px] mb-0.5 w-full truncate"
        >
          {{ areaPrincipalNombre }}
        </span>
        <div v-else class="h-[22px] mb-0.5"></div>

        <div class="text-gray-500 whitespace-nowrap text-[10px] sm:text-[11px]">
          <svg class="inline w-3 h-3 mr-0.5 text-gray-400 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/></svg>
          <span class="align-middle">{{ fechaFormateada || 'Sin fecha' }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';
import { defaultColorStyle } from '@/utils/colorGenerator.js';

const props = defineProps({
  titulo: { type: String, default: '' },
  fecha: { type: String, default: '' },
  areas: { type: Array, default: () => [] },
  areaEstilo: {
      type: Object,
      default: () => ({ ...defaultColorStyle })
  }
});

defineEmits(['click']);

const fechaFormateada = computed(() => {
  if (!props.fecha) return null;
  try {
    const dateParts = props.fecha.split('-');
    let date;
    if (dateParts.length === 3 && !props.fecha.includes('T')) {
        date = new Date(Date.UTC(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2])));
    } else {
        date = new Date(props.fecha.includes('T') ? props.fecha : props.fecha + 'T00:00:00Z');
    }
    return isNaN(date.getTime()) ? props.fecha : date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });
  } catch (e) { return props.fecha; }
});

const areaPrincipalNombre = computed(() => {
  if (props.areas && props.areas.length > 0 && props.areas[0] && typeof props.areas[0].nombre === 'string') {
    return props.areas[0].nombre;
  }
  return null;
});

const areaEstiloCalculado = computed(() => {
    return props.areaEstilo || defaultColorStyle;
});

</script>

<style scoped>
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.sm\:line-clamp-3 {
  /* Esta clase puede que no se aplique como esperas en sm: si la de arriba no está condicionada también */
  /* Considera usar @media query o tener una sola clase line-clamp si el comportamiento es el mismo */
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>