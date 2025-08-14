<template>
  <div class="bg-gray-50 py-10">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-800">Nuestros Servicios</h2>
        <div class="mt-3 inline-block w-24 h-1 bg-custom-red rounded"></div>
      </div>

      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-x-4 gap-y-6">
        <a 
          v-for="servicio in servicios" 
          :key="servicio.titulo" 
          :href="servicio.url || '#'" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group text-center transition-transform duration-200 hover:-translate-y-1"
        >
          <div class="bg-white rounded-full w-16 h-16 mx-auto flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <img :src="servicio.img" :alt="`Icono de ${servicio.titulo}`" class="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <h3 class="mt-3 text-xs font-semibold text-gray-700 whitespace-nowrap">{{ servicio.titulo }}</h3>
          <p class="mt-0.5 text-[11px] text-gray-500 whitespace-nowrap">{{ servicio.descripcion }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const servicios = [
  {
    titulo: "Boletas",
    descripcion: "Consulta de pagos",
    img: new URL('@/assets/servicesImg/boleta.png', import.meta.url).href,
    url: "http://boletasugelpuno.xurainc.com/"
  },
  {
    titulo: "R.D. Online",
    descripcion: "Resoluciones en línea",
    img: new URL('@/assets/servicesImg/resolucion.png', import.meta.url).href,
    url: "http://agpugelpuno.edu.pe/e-resoluciones/busqueda"
  },
  {
    titulo: "Contrato Docente",
    descripcion: "Gestión de contratos",
    img: new URL('@/assets/servicesImg/contrato.png', import.meta.url).href,
    url: "#"
  },
  {
    titulo: "Contrato CAS",
    descripcion: "Información y plazas",
    img: new URL('@/assets/servicesImg/contratoCas.png', import.meta.url).href,
    url: "#"
  },
  {
    titulo: "Trámite Documentario",
    descripcion: "Seguimiento",
    img: new URL('@/assets/servicesImg/tramite.png', import.meta.url).href,
    url: "https://mesapartes.ugelpuno.edu.pe/acceso"
  },
  {
    titulo: "Escalafón AYNI",
    descripcion: "Info. laboral",
    img: new URL('@/assets/servicesImg/escalafon.png', import.meta.url).href,
    url: "https://escalafonugelpuno.blogspot.com/"
  },
  {
    titulo: "AGI",
    descripcion: "Gestión académica",
    img: new URL('@/assets/servicesImg/agi.png', import.meta.url).href,
    url: "#"
  },
  {
    titulo: "AGP",
    descripcion: "Planificación",
    img: new URL('@/assets/servicesImg/planificacion.png', import.meta.url).href,
    url: "#"
  },
  {
    titulo: "SIIE",
    descripcion: "Sistema de Información",
    img: new URL('@/assets/servicesImg/siie.png', import.meta.url).href,
    url: "http://siie.agpugelpuno.edu.pe/"
  },
  {
    titulo: "Correo Institucional",
    descripcion: "Acceso a correo",
    img: new URL('@/assets/servicesImg/correo.png', import.meta.url).href,
    url: "https://agpugelpuno.edu.pe:2096/"
  },
];
</script>