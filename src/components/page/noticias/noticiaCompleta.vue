<template>
  <div class="bg-uancv-bg">
    <div v-if="store.isLoading" class="flex justify-center items-center min-h-screen">
      <div class="text-center text-uancv-text-secondary"><p class="text-lg">Cargando noticia...</p></div>
    </div>
    
    <div v-else-if="store.error" class="min-h-screen flex items-center justify-center">
      <div class="text-center bg-white p-12 shadow-lg">
        <h2 class="text-xl font-bold mb-2 text-uancv-red">Error al Cargar</h2>
        <p class="text-uancv-text-secondary">{{ store.error }}</p>
        <router-link to="/noticias" class="mt-6 inline-block bg-uancv-red text-white font-bold px-8 py-3 hover:bg-uancv-blue-dark transition-colors">Volver a Noticias</router-link>
      </div>
    </div>
    
    <div v-else-if="store.noticiaSeleccionada">
      <section class="relative bg-uancv-maroon-dark text-white pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        <div class="absolute inset-0 z-0 opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern-andean-notice" x="0" y="0" width="100" height="57.735" patternUnits="userSpaceOnUse">
                <g fill="none" stroke="white" stroke-width="1">
                  <path d="M50 0 l25 14.4338 v28.8675 l-25 14.4338 l-25 -14.4338 v-28.8675 z"/>
                  <path d="M0 28.8675 l25 -14.4338 v28.8675 l-25 -14.4338 v-28.8675 l50 28.8675"/>
                  <path d="M25 43.3013 l25 -14.4338 v-28.8675 l-25 14.4338"/>
                </g>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-andean-notice)"></rect>
          </svg>
        </div>
        <div class="relative z-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <router-link to="/noticias" class="inline-flex items-center text-sm font-medium text-slate-300 hover:text-white transition group mb-6">
            <svg class="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
            Volver a todas las noticias
          </router-link>
          <div class="text-center">
            <p v-if="store.noticiaSeleccionada.categorias && store.noticiaSeleccionada.categorias.length > 0" class="font-semibold text-uancv-red tracking-widest uppercase">
              {{ store.noticiaSeleccionada.categorias[0].nombre }}
            </p>
            <h1 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-sans">{{ store.noticiaSeleccionada.titulo }}</h1>
            <p class="mt-4 text-lg text-slate-300">Publicado el {{ fechaFormateada(store.noticiaSeleccionada.fecha_publicacion) }}</p>
          </div>
        </div>
      </section>

      <section class="py-16 sm:py-20 -mt-16">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-30">
          <article class="lg:col-span-8 bg-white p-6 sm:p-10 shadow-2xl">
            <div class="prose prose-lg max-w-none text-uancv-text-secondary leading-relaxed">
              <img v-if="store.noticiaSeleccionada.imagen_url" :src="store.noticiaSeleccionada.imagen_url" alt="Imagen principal de la noticia" class="float-left mr-8 mb-6 w-full max-w-sm aspect-square object-cover bg-slate-100">
              <div v-html="store.noticiaSeleccionada.contenido"></div>
            </div>
          </article>
          
          <aside class="lg:col-span-4 h-fit lg:sticky lg:top-28">
            <div class="bg-white p-6 shadow-2xl">
              <h3 class="text-lg font-bold text-uancv-blue-dark border-b-2 border-uancv-red pb-3">Noticias Relacionadas</h3>
              <div v-if="store.isLoadingRelacionadas" class="text-center py-4"><p class="text-sm text-uancv-text-secondary">Cargando...</p></div>
              <div v-else-if="store.noticiasRelacionadas.length > 0" class="mt-4 space-y-4">
                <router-link v-for="relacionada in store.noticiasRelacionadas" :key="relacionada.id" :to="`/noticias/${relacionada.id}`" class="block group">
                  <div class="flex items-start gap-4">
                    <img :src="relacionada.imagen_url" alt="" class="w-20 h-20 object-contain bg-slate-100 flex-shrink-0">
                    <div>
                      <h4 class="font-bold text-uancv-blue-dark leading-tight group-hover:text-uancv-red transition-colors">{{ relacionada.titulo }}</h4>
                      <p class="text-xs text-uancv-text-secondary mt-1">{{ fechaFormateada(relacionada.fecha_publicacion) }}</p>
                    </div>
                  </div>
                </router-link>
              </div>
              <div v-else class="text-sm text-center py-4 text-uancv-text-secondary">No hay noticias relacionadas.</div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import { onMounted, watch, computed } from "vue";
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import { useNoticiasStore } from "@/stores/noticias";

const store = useNoticiasStore();
const route = useRoute();
const router = useRouter();
const noticiaId = computed(() => route.params.id);

const cargarNoticiaCompleta = async (id) => {
  if (!id) return;
  store.noticiaSeleccionada = null;
  store.noticiasRelacionadas = [];
  await store.fetchNoticiaById(id);
  if (store.noticiaSeleccionada && !store.error && store.noticiaSeleccionada.categorias?.length > 0) {
    const categoriaId = store.noticiaSeleccionada.categorias[0].id;
    const actualId = store.noticiaSeleccionada.id;
    store.fetchNoticiasRelacionadas(categoriaId, actualId, 3);
  }
};

onMounted(() => { cargarNoticiaCompleta(noticiaId.value); });
watch(noticiaId, (newId) => { if (newId) { cargarNoticiaCompleta(newId); window.scrollTo({ top: 0, behavior: 'smooth' }); }});
onBeforeRouteLeave(() => { store.noticiaSeleccionada = null; store.noticiasRelacionadas = []; });

const fechaFormateada = (fecha) => {
  if (!fecha) return '';
  return new Date(fecha).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
};
</script>

<style>
.prose h1, .prose h2, .prose h3 { @apply text-uancv-blue-dark; }
.prose p { @apply text-justify; }
.prose a { @apply text-uancv-red hover:underline; }
.prose img { @apply shadow-lg; }
.lg\:sticky { position: sticky; }
.lg\:top-28 { top: 7rem; }
</style>