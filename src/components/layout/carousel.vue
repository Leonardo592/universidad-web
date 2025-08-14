<template>
  <div v-if="store.isLoading" class="flex justify-center items-center h-56 md:h-96 bg-gray-200 rounded-md animate-pulse">
    <span class="text-gray-500">Cargando anuncios...</span>
  </div>
  
  <div v-else-if="store.error" class="flex justify-center items-center h-56 md:h-96 bg-red-100 border border-red-300 rounded-md p-4">
    <span class="text-red-700 font-medium">{{ store.error }}</span>
  </div>

  <div v-else-if="store.slides && store.slides.length > 0" id="featured-carousel" class="relative w-full overflow-hidden group/carousel shadow-md" role="region" aria-roledescription="carousel" aria-label="Anuncios destacados">
    <div class="relative h-56 md:h-96">
      <div v-for="(slide, index) in store.slides" :key="slide.id" class="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out" :class="{ 'opacity-100 z-10': index === store.currentIndex, 'opacity-0 z-0': index !== store.currentIndex }" role="group" :aria-roledescription="'slide ' + (index + 1)" :aria-label="slide.titulo || 'Imagen ' + (index + 1)">
        <component :is="slide.enlace_activo ? 'a' : 'div'" :href="slide.enlace_activo ? slide.enlace : null" :target="slide.enlace_activo ? '_blank' : null" rel="noopener">
          <img :src="slide.imagen_url" class="block w-full h-full object-cover" :alt="slide.titulo || ''" :loading="index === 0 ? 'eager' : 'lazy'" :fetchpriority="index === 0 ? 'high' : 'auto'" />
        </component>

        <div class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10 pointer-events-none"></div>

        <div v-if="slide.titulo || slide.descripcion" class="absolute bottom-0 left-0 right-0 p-4 md:p-6 pb-12 md:pb-14 text-white z-20">
          <h3 v-if="slide.titulo" class="text-base md:text-lg lg:text-xl font-semibold text-shadow-sm leading-tight" :id="'slide-heading-' + index">
            {{ slide.titulo }}
          </h3>
          <p v-if="slide.descripcion" class="mt-1 md:mt-1.5 text-sm md:text-base text-shadow-sm leading-relaxed max-w-xl line-clamp-2 md:line-clamp-3">
            {{ slide.descripcion }}
          </p>
          <a v-if="slide.enlace_activo" :href="slide.enlace" target="_blank" rel="noopener" class="inline-block mt-3 px-4 py-1.5 bg-custom-red hover:bg-red-700 text-white text-xs font-semibold rounded shadow transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-custom-red">
            Ver más
          </a>
        </div>
      </div>
    </div>

    <div v-if="store.slides.length > 1" class="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
      <button v-for="(_, index) in store.slides" :key="'dot-' + index" @click="store.goToSlide(index)" type="button" class="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-black/50 focus:ring-white" :class="index === store.currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'" :aria-current="index === store.currentIndex ? 'true' : 'false'" :aria-label="'Ir a slide ' + (index + 1)" :aria-controls="'featured-carousel'"></button>
    </div>

    <template v-if="store.slides.length > 1">
      <button @click="store.prevSlide" type="button" class="carousel-arrow left-2 md:left-3 opacity-0 group-hover/carousel:opacity-100" aria-controls="featured-carousel">
        <svg class="w-4 h-4 md:w-5 md:h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/></svg>
        <span class="sr-only">Anterior</span>
      </button>
      <button @click="store.nextSlide" type="button" class="carousel-arrow right-2 md:right-3 opacity-0 group-hover/carousel:opacity-100" aria-controls="featured-carousel">
        <svg class="w-4 h-4 md:w-5 md:h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/></svg>
        <span class="sr-only">Siguiente</span>
      </button>
    </template>
  </div>
  
  <div v-else class="flex justify-center items-center h-56 md:h-96 bg-gray-100 rounded-md">
    <span class="text-gray-400 italic">No hay anuncios para mostrar.</span>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useCarouselStore } from "@/stores/carousel";

const store = useCarouselStore();

onMounted(() => {
  store.fetchSlides();
  store.startAutoSlide();
});

onUnmounted(() => {
  store.stopAutoSlide();
});
</script>

<style scoped>
.carousel-arrow {
  @apply absolute top-1/2 z-30 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-black/50 focus:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/70 transition-all duration-300;
}
.text-shadow-sm { text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6); }
.text-shadow-md { text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); }
.line-clamp-2 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
.line-clamp-3 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; }
</style>