<template>
  <div class="relative w-full h-screen bg-uancv-blue-dark">
    <swiper
      :modules="modules"
      :navigation="true"
      :pagination="{ clickable: true }"
      :loop="true"
      :autoplay="{ delay: 8000, disableOnInteraction: false }"
      effect="fade"
      :fade-effect="{ crossFade: true }"
      class="w-full h-full"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="relative w-full h-full">
          <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10"></div>

          <div class="absolute inset-0 z-10 flex items-center">
            <div class="container mx-auto px-6 lg:px-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                <div class="text-white">
                  <h1 class="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-shadow-lg animate-fade-in-up">
                    {{ slide.title }}
                  </h1>
                  <p class="mt-6 text-lg md:text-xl max-w-2xl text-slate-100 text-shadow animate-fade-in-up animation-delay-300">
                    {{ slide.subtitle }}
                  </p>
                  <div class="mt-10 animate-fade-in-up animation-delay-600">
                      <router-link :to="slide.buttonLink" class="inline-block bg-uancv-red text-white font-bold text-lg rounded-lg px-8 py-4 transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:shadow-xl hover:bg-uancv-red/90 focus:outline-none focus:ring-4 focus:ring-uancv-red/50">
                          {{ slide.buttonText }}
                      </router-link>
                  </div>
                </div>

                <div class="hidden md:flex flex-col items-start space-y-4">
                  <div v-for="(stat, statIndex) in slide.stats" :key="statIndex" class="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-5 w-full max-w-sm shadow-2xl animate-fade-in-up" :style="{ animationDelay: (900 + statIndex * 200) + 'ms' }">
                    <p class="text-sm font-semibold uppercase tracking-wider text-slate-300">{{ stat.label }}</p>
                    <p class="text-3xl font-bold text-white mt-1">{{ stat.value }}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const modules = [Navigation, Pagination, Autoplay, EffectFade];

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
    title: 'Admisión 2025: Tu Futuro Empieza Aquí.',
    subtitle: 'Descubre un camino de excelencia académica y forma parte de la nueva generación de profesionales que liderarán la región.',
    buttonText: 'Inscríbete Ahora',
    buttonLink: '/admision',
    stats: [
      { label: 'Cierre de Inscripciones', value: '28 de Febrero, 2025' },
      { label: 'Examen de Admisión', value: '15 de Marzo, 2025' },
      { label: 'Inicio de Clases', value: '31 de Marzo, 2025' },
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
    title: 'Programas de Prestigio.',
    subtitle: 'Nuestras carreras de Contabilidad y Administración están diseñadas para enfrentar los desafíos del mercado global actual.',
    buttonText: 'Conoce las Carreras',
    buttonLink: '/programas',
    stats: [
      { label: 'Carrera Destacada', value: 'Contabilidad y Finanzas' },
      { label: 'Carrera en Demanda', value: 'Administración de Empresas' },
      { label: 'Modalidad de Estudio', value: 'Presencial y Semipresencial' }
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    title: 'Comprometidos con la Calidad.',
    subtitle: 'Trabajamos día a día en nuestro proceso de licenciamiento para garantizar una educación superior que cumpla con los más altos estándares.',
    buttonText: 'Más Información',
    buttonLink: '/proceso-licenciamiento',
    stats: [
      { label: 'Estado Actual', value: 'En Proceso de Licenciamiento' },
      { label: 'Enfoque Principal', value: 'Mejora Continua' },
      { label: 'Trayectoria', value: 'Más de 40 años de experiencia' }
    ]
  }
];

onMounted(() => {
  const style = document.createElement('style');
  style.textContent = `
    .swiper-button-prev, .swiper-button-next { color: #FFFFFF; background-color: rgba(0, 0, 0, 0.2); width: 52px; height: 52px; border-radius: 50%; transition: background-color 0.2s ease-in-out; }
    .swiper-button-prev:hover, .swiper-button-next:hover { background-color: rgba(0, 0, 0, 0.4); }
    .swiper-button-prev::after, .swiper-button-next::after { font-size: 20px; font-weight: 800; }
    .swiper-pagination-bullet { width: 10px; height: 10px; background-color: rgba(255, 255, 255, 0.6); opacity: 1; transition: background-color 0.2s ease, transform 0.2s ease; }
    .swiper-pagination-bullet-active { background-color: #AF201D; transform: scale(1.2); }
    .text-shadow { text-shadow: 0 1px 3px rgba(0,0,0,.5); }
    .text-shadow-lg { text-shadow: 0 2px 5px rgba(0,0,0,.5); }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
    .animation-delay-300 { animation-delay: 0.3s; }
    .animation-delay-600 { animation-delay: 0.6s; }
  `;
  document.head.appendChild(style);
});
</script>