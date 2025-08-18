<template>
  <div>
    <Carousel />
    <ProgramHighlightBar />
    <Services />
    <StatsSection />
    <ValueProposition />
    <ResearchSection />
    <CampusSection />

    <section class="bg-uancv-bg py-16 sm:py-24">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold font-sans text-uancv-blue-dark tracking-tight">
            Mantente Informado
          </h2>
          <p class="mt-4 max-w-2xl mx-auto text-lg text-uancv-text-secondary">
            Descubre las últimas noticias, eventos y logros de nuestra comunidad universitaria.
          </p>
        </div>
        
        <div v-if="storeNoticias.isLoadingRecientes && storeNoticias.noticiasRecientes.length === 0" class="text-center py-10">
          <p class="text-uancv-text-secondary">Cargando noticias...</p>
        </div>
        <div v-else-if="storeNoticias.error" class="text-center text-red-600 p-4 border border-red-300 bg-red-50 my-4">
          {{ storeNoticias.error }}
        </div>
        <div v-else-if="storeNoticias.noticiasRecientes.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <cardPrevNoticias
            v-for="noticia in storeNoticias.noticiasRecientes"
            :key="noticia.id"
            :titulo="noticia.titulo"
            :fecha="noticia.fecha_publicacion"
            :img="noticia.imagen_url"
            :areas="noticia.categorias"
            @click="irADetalleNoticia(noticia)"
          />
        </div>
        <div v-else class="text-center py-12 bg-white shadow-md">
          <p class="text-uancv-text-secondary">No hay noticias recientes para mostrar.</p>
        </div>

        <div v-if="storeNoticias.noticiasRecientes.length > 0" class="mt-12 text-center">
            <router-link to="/noticias" class="inline-block bg-uancv-red text-white font-bold px-8 py-3 transition-colors duration-300 hover:bg-uancv-blue-dark">
              Ver todas las noticias
            </router-link>
        </div>
      </div>
    </section>

    <TrustLogos />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useNoticiasStore } from "@/stores/noticias";
import { useRouter } from "vue-router";

import Carousel from '@/components/layout/carousel.vue';
import ProgramHighlightBar from '@/components/layout/ProgramHighlightBar.vue';
import StatsSection from '@/components/home/StatsSection.vue';
import ValueProposition from '@/components/home/ValueProposition.vue';
import CampusSection from '@/components/home/CampusSection.vue';
import ResearchSection from '@/components/home/ResearchSection.vue';
import TrustLogos from '@/components/home/TrustLogos.vue';
import Services from '@/components/common/services.vue';
import cardPrevNoticias from '@/components/Ui/cardPrevNoticias.vue';

const storeNoticias = useNoticiasStore();
const router = useRouter();
const ITEMS_POR_PAGINA_HOME = 3;

onMounted(() => {
  storeNoticias.fetchNoticiasRecientes(ITEMS_POR_PAGINA_HOME);
});

const irADetalleNoticia = (noticia) => {
  router.push({ name: 'noticiaCompleta', params: { id: noticia.id } });
};
</script>