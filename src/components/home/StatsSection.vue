<template>
  <section ref="sectionRef" class="relative bg-uancv-red text-white overflow-hidden">
    <!-- El fondo SVG ahora tiene un ref para ser animado -->
    <div ref="backgroundRef" class="absolute inset-0 z-0 opacity-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pattern-andean" x="0" y="0" width="100" height="57.735" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="white" stroke-width="1">
              <path d="M50 0 l25 14.4338 v28.8675 l-25 14.4338 l-25 -14.4338 v-28.8675 z"/>
              <path d="M0 28.8675 l25 -14.4338 v28.8675 l-25 -14.4338 v-28.8675 l50 28.8675"/>
              <path d="M25 43.3013 l25 -14.4338 v-28.8675 l-25 14.4338"/>
            </g>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-andean)"></rect>
      </svg>
    </div>
    
    <div class="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        
        <div class="text-center p-6">
          <p class="text-5xl md:text-6xl font-bold font-sans tracking-tight" ref="stat1">{{ stats.years.start }}</p>
          <h3 class="mt-3 text-sm font-semibold uppercase tracking-widest text-white/90">Años de Trayectoria</h3>
        </div>

        <div class="text-center p-6 sm:border-l sm:border-white/20">
          <p class="text-5xl md:text-6xl font-bold font-sans tracking-tight" ref="stat2">{{ stats.careers.start }}</p>
          <h3 class="mt-3 text-sm font-semibold uppercase tracking-widest text-white/90">Carreras en Licenciamiento</h3>
        </div>

        <div class="text-center p-6 md:border-l md:border-white/20">
          <p class="text-5xl md:text-6xl font-bold font-sans tracking-tight" ref="stat3">{{ stats.campuses.start }}</p>
          <h3 class="mt-3 text-sm font-semibold uppercase tracking-widest text-white/90">Filiales en el Sur</h3>
        </div>

        <div class="text-center p-6 sm:border-l sm:border-white/20">
          <p class="text-5xl md:text-6xl font-bold font-sans tracking-tight" ref="stat4">{{ stats.commitment.start }}<span class="text-4xl md:text-5xl">%</span></p>
          <h3 class="mt-3 text-sm font-semibold uppercase tracking-widest text-white/90">Compromiso con la Calidad</h3>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const backgroundRef = ref(null);
const stat1 = ref(null);
const stat2 = ref(null);
const stat3 = ref(null);
const stat4 = ref(null);

const stats = reactive({
  years: { value: 0 },
  careers: { value: 0 },
  campuses: { value: 0 },
  commitment: { value: 0 },
});

let scrollTriggerInstance = null;

onMounted(() => {
  const pattern = document.getElementById('pattern-andean');

  scrollTriggerInstance = ScrollTrigger.create({
    trigger: sectionRef.value,
    start: "top 80%",
    once: true, // <-- ESTO ASEGURA QUE SOLO SE EJECUTE UNA VEZ POR CARGA
    onEnter: () => {
      // Animación del fondo (rápida y directa)
      gsap.fromTo(pattern, { attr: { x: -100 } }, { attr: { x: 0 }, duration: 1.5, ease: "power2.out" });
      gsap.to(backgroundRef.value, { opacity: 0.07, duration: 1.5, ease: "power2.out" });

      // Animación de los números (más rápida y con retraso sincronizado)
      const delay = 0.3; // Retraso más corto
      
      gsap.to(stats.years, {
        delay,
        duration: 1.5, // <-- TIEMPO CORTADO A 1.5 SEGUNDOS
        value: 40,
        ease: "power2.out",
        onUpdate: () => stat1.value.textContent = Math.ceil(stats.years.value) + '+'
      });
      
      gsap.to(stats.careers, {
        delay,
        duration: 1.2, // <-- TIEMPO CORTADO A 1.2 SEGUNDOS
        value: 2,
        ease: "power2.out",
        onUpdate: () => stat2.value.textContent = '0' + Math.ceil(stats.careers.value)
      });
      
      gsap.to(stats.campuses, {
        delay,
        duration: 1.2, // <-- TIEMPO CORTADO A 1.2 SEGUNDOS
        value: 3,
        ease: "power2.out",
        onUpdate: () => stat3.value.textContent = '0' + Math.ceil(stats.campuses.value)
      });
      
      gsap.to(stats.commitment, {
        delay,
        duration: 2, // <-- TIEMPO CORTADO A 2 SEGUNDOS
        value: 100,
        ease: "power2.out",
        onUpdate: () => {
          const v = Math.ceil(stats.commitment.value);
          stat4.value.innerHTML = `${v}<span class="text-4xl md:text-5xl">%</span>`;
        }
      });
    }
  });
});

onUnmounted(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
});
</script>