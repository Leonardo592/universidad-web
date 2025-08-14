<template>
  <div>
    <!-- 1. Carrusel de bienvenida a pantalla completa -->
    <Carousel />

    <!-- 2. Barra de propuesta de valor (la que tiene el layout asimétrico) -->
    <ProgramHighlightBar />

    <!-- 3. Sección de cifras clave de la universidad -->
    <StatsSection />
    
    <!-- 4. Sección de 'Por qué elegirnos' con imagen y lista de valores -->
    <ValueProposition />

    <!-- 5. Sección de los campus con imágenes destacadas -->
    <CampusSection />

    <!-- 6. Sección de noticias recientes (puedes expandir esto más adelante) -->
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Ejemplo de tarjeta de noticia -->
          <div class="bg-white shadow-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-2">
            <router-link to="/noticias/slug-de-la-noticia-1" class="block">
              <img src="https://images.unsplash.com/photo-1579226905180-636b76d96082?q=80&w=1974" alt="Imagen de la noticia" class="w-full h-48 object-cover">
              <div class="p-6">
                <p class="text-sm font-semibold text-uancv-red">Noticia</p>
                <h3 class="mt-2 text-lg font-bold text-uancv-blue-dark group-hover:text-uancv-red transition-colors">
                  La UANCV inicia ciclo de conferencias sobre innovación contable
                </h3>
              </div>
            </router-link>
          </div>
          <div class="bg-white shadow-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-2">
            <router-link to="/noticias/slug-de-la-noticia-2" class="block">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932" alt="Imagen de la noticia" class="w-full h-48 object-cover">
              <div class="p-6">
                <p class="text-sm font-semibold text-uancv-red">Convenio</p>
                <h3 class="mt-2 text-lg font-bold text-uancv-blue-dark group-hover:text-uancv-red transition-colors">
                  Alianza estratégica firmada con la Cámara de Comercio de Juliaca
                </h3>
              </div>
            </router-link>
          </div>
          <div class="bg-white shadow-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-2">
            <router-link to="/noticias/slug-de-la-noticia-3" class="block">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" alt="Imagen de la noticia" class="w-full h-48 object-cover">
              <div class="p-6">
                <p class="text-sm font-semibold text-uancv-red">Evento</p>
                <h3 class="mt-2 text-lg font-bold text-uancv-blue-dark group-hover:text-uancv-red transition-colors">
                  Exitoso taller de liderazgo para estudiantes de Administración
                </h3>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Sección de logos de respaldo y confianza -->
    <TrustLogos />

  </div>
</template>

<script setup>
import Carousel from '@/components/layout/carousel.vue';
import ProgramHighlightBar from '@/components/layout/ProgramHighlightBar.vue';
import StatsSection from '@/components/home/StatsSection.vue';
import ValueProposition from '@/components/home/ValueProposition.vue';
import CampusSection from '@/components/home/CampusSection.vue';
import TrustLogos from '@/components/home/TrustLogos.vue';
</script>