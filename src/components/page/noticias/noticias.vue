<template>
  <section class="bg-white py-8 md:py-10">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center mb-6">
        <span class="flex-grow h-0.5 bg-custom-red"></span>
        <h2 class="text-xl md:text-xl lg:text-2xl font-bold text-gray-800 mx-4 text-center whitespace-nowrap">
          Últimas Noticias
        </h2>
        <span class="flex-grow h-0.5 bg-custom-red"></span>
      </div>

      <div v-if="storeNoticias.isLoading && storeNoticias.noticiasRecientes.length === 0" class="text-center text-gray-500 py-10">
        Cargando noticias...
      </div>
      <div v-else-if="storeNoticias.error" class="text-center text-red-600 p-4 border border-red-300 bg-red-50 rounded text-sm my-4">
        {{ storeNoticias.error }}
      </div>
      
      <div v-else-if="storeNoticias.noticiasRecientes.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6">
        <cardPrevNoticias
          v-for="(noticia, index) in storeNoticias.noticiasRecientes"
          :key="noticia.id"
          :titulo="noticia.titulo"
          :fecha="noticia.fecha_publicacion"
          :img="noticia.imagen_url"
          :areas="noticia.categorias"
          :badgeColor="getBadgeColor(index)"
          size="medium"
          :rounded="true"
          @click="irADetalleNoticia(noticia)"
        />
      </div>
      
      <div v-else class="text-center text-gray-500 py-8">
        No hay noticias recientes para mostrar.
      </div>

      <div class="w-full pt-6 pb-2">
        <div class="flex-grow sm:flex-grow-0 w-full sm:w-auto">
          <router-link to="/noticias" class="block w-full text-center py-2.5 text-custom-red font-semibold text-base border-b-2 border-custom-red hover:border-custom-red-darker hover:text-custom-red-darker focus:outline-none focus:border-custom-red-darker transition-colors duration-200 ease-in-out group">
            <span class="group-hover:tracking-wider transition-all duration-200 ease-in-out">
              Ver todas las Noticias
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useNoticiasStore } from "@/stores/noticias";
import { useRouter } from "vue-router";
import cardPrevNoticias from "@/components/Ui/cardPrevNoticias.vue";

const storeNoticias = useNoticiasStore();
const router = useRouter();

const ITEMS_POR_PAGINA_HOME = 2;

onMounted(() => {
  storeNoticias.fetchNoticiasRecientes(ITEMS_POR_PAGINA_HOME);
});

console.log('esta entrando aca')

const getBadgeColor = (index) => {
  const colors = ['bg-blue-500', 'bg-sky-500', 'bg-teal-500', 'bg-emerald-500'];
  return colors[index % colors.length];
};

const irADetalleNoticia = (noticia) => {
  router.push({ name: 'noticiaCompleta', params: { id: noticia.id } });
};
</script>

<style scoped>
.group:hover .group-hover\:tracking-wider { letter-spacing: 0.05em; }
</style>