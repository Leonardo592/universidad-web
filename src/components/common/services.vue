<template>
  <section class="py-10 bg-gray-100">
    <div class="container mx-auto text-center">
      <!-- Contenedor del título con líneas -->
      <div class="relative flex items-center justify-center">
        <div class="absolute w-full h-[2px] bg-custom-red"></div> <!-- Línea completa -->
        <h2 class="relative z-10 bg-gray-100 px-6 text-3xl font-bold text-gray-800">
          Nuestros Servicios
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        <a
          v-for="(servicio, index) in servicios"
          :key="index"
          :href="servicio.url || '#'"
          target="_blank"
          rel="noopener"
          class="group flex flex-col items-center text-center p-4 transition-transform duration-300 hover:scale-110"
          :class="{ 'md:col-span-1 flex justify-center': index === 8 || index === 9 }"
        >
          <img
            :src="servicio.img"
            :alt="`Icono de ${servicio.titulo}`"
            class="w-20 h-20 mb-3 transition-opacity duration-300 group-hover:opacity-80"
          />
          <h3 class="text-lg font-semibold text-gray-800">{{ servicio.titulo }}</h3>
          <p class="text-sm text-gray-600">{{ servicio.descripcion }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const servicios = ref([
  {
    titulo: "Boletas",
    descripcion: "Consulta tus boletas de pago.",
    img: new URL('@/assets/servicesImg/boleta.png', import.meta.url),
    url: "http://boletasugelpuno.xurainc.com/"
  },
  {
    titulo: "R.D. Online",
    descripcion: "Resoluciones Directorales en línea.",
    img: new URL('@/assets/servicesImg/resolucion.png', import.meta.url).href,
    url: "http://agpugelpuno.edu.pe/e-resoluciones/busqueda"
  },
  {
    titulo: "Contrato Docente",
    descripcion: "Consulta y gestión de contratos.",
    img: new URL('@/assets/servicesImg/contrato.png', import.meta.url).href
    // Falta URL
  },
  {
    titulo: "Contrato CAS",
    descripcion: "Información sobre contrato CAS.",
    img: new URL('@/assets/servicesImg/contratoCas.png', import.meta.url).href
    // Falta URL
  },
  {
    titulo: "Trámite Documentario",
    descripcion: "Seguimiento de trámites.",
    img: new URL('@/assets/servicesImg/tramite.png', import.meta.url).href,
    url: "https://mesapartes.ugelpuno.edu.pe/acceso"
  },
  {
    titulo: "Escalafón AYNI",
    descripcion: "Accede a tu información laboral.",
    img: new URL('@/assets/servicesImg/escalafon.png', import.meta.url).href,
    url: "https://escalafonugelpuno.blogspot.com/"
  },
  {
    titulo: "AGI",
    descripcion: "Gestión de información académica.",
    img: new URL('@/assets/servicesImg/agi.png', import.meta.url).href
    // Falta URL
  },
  {
    titulo: "AGP",
    descripcion: "Administración General de Planificación.",
    img: new URL('@/assets/servicesImg/planificacion.png', import.meta.url).href
    // Falta URL
  },
  {
    titulo: "SIIE",
    descripcion: "Sistema de Información Educativa.",
    img: new URL('@/assets/servicesImg/siie.png', import.meta.url).href,
    url: "http://siie.agpugelpuno.edu.pe/"
  },
  {
    titulo: "Correo Institucional",
    descripcion: "Accede a tu correo UGEL.",
    img: new URL('@/assets/servicesImg/correo.png', import.meta.url).href,
    url: "https://agpugelpuno.edu.pe:2096/"
  },
]);
</script>
