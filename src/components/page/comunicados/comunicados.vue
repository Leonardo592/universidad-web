<template>
  <section class="bg-white py-8 md:py-10">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center mb-6">
        <span class="flex-grow h-0.5 bg-custom-red"></span>
        <h2 class="text-xl md:text-2xl font-bold text-gray-800 mx-4 text-center whitespace-nowrap">
          Últimos Comunicados
        </h2>
        <span class="flex-grow h-0.5 bg-custom-red"></span>
      </div>

      <div v-if="store.isLoading && store.comunicadosRecientes.length === 0" class="text-center text-gray-500 py-4">
        Cargando comunicados...
      </div>
      <div v-else-if="store.error" class="text-center text-red-600 p-3 border border-red-300 bg-red-50 rounded text-sm">
        {{ store.error }}
      </div>
      
      <div v-else-if="store.comunicadosRecientes.length > 0" class="relative flex pl-8 md:pl-10">
        <div class="absolute top-0 bottom-0 left-0 w-8 md:w-10 flex flex-col items-center pt-5 pb-5">
          <div class="flex-grow w-0.5 bg-gray-300"></div>
        </div>
        <div class="flex-grow divide-y divide-gray-200 border-t border-b border-gray-200 w-full">
          <div v-for="comunicado in store.comunicadosRecientes" :key="comunicado.id" class="relative group" @mouseover="comunicadoActivoId = comunicado.id" @mouseleave="comunicadoActivoId = null">
            <div class="absolute left-[-22px] md:left-[-28px] top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-200 z-10" :class="{ 'bg-custom-red border-custom-red scale-110': comunicadoActivoId === comunicado.id, 'bg-white border-gray-400 group-hover:bg-custom-red group-hover:border-custom-red group-hover:scale-110': comunicadoActivoId !== comunicado.id }"></div>
            <cardPrevComunicado :titulo="comunicado.titulo" :fecha="comunicado.fecha_publicacion" :areas="comunicado.categorias" @click="verComunicado(comunicado)" />
          </div>
        </div>
      </div>
      
      <div v-else class="text-center text-gray-500 py-8 border-t border-b border-gray-200">
        No hay comunicados recientes para mostrar.
      </div>

      <div class="w-full pt-3 pb-1 text-center">
        <router-link to="/comunicados" class="inline-block text-center py-3 text-custom-red font-semibold text-base border-b-2 border-custom-red hover:border-red-700 transition-colors duration-200 group">
          <span class="group-hover:tracking-wider transition-all duration-200">Ver todos los Comunicados</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useComunicadosStore } from "@/stores/comunicados";
import { useRouter } from "vue-router";
import cardPrevComunicado from "@/components/Ui/cardPrevComunicado.vue"; // Asegúrate que la ruta es correcta

const store = useComunicadosStore();
const router = useRouter();

const comunicadoActivoId = ref(null);

onMounted(() => {
  store.fetchComunicadosRecientes(5);
});

const verComunicado = (comunicado) => {
  router.push({ name: 'comunicadoCompleto', params: { id: comunicado.id } });
};
</script>