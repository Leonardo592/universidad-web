<template>
  <div class="bg-white">
    <!-- Hero con Formulario -->
    <section class="relative h-screen min-h-[700px] flex items-center bg-uancv-blue-dark text-white">
      <div class="absolute inset-0 z-0 opacity-20">
        <img src="https://d19i1lccnoz5a9.cloudfront.net/img/article/como-se-relacionan-la-administracion-y-la-mercadotecnia.webp" alt="Carrera de Administración" class="w-full h-full object-cover">
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-uancv-blue-dark via-uancv-blue-dark/70 to-transparent z-10"></div>
      
      <div class="relative z-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p class="font-semibold text-uancv-red tracking-widest uppercase">Carrera Profesional</p>
            <h1 class="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold font-sans">Administración y Marketing</h1>
            <p class="mt-4 text-xl text-slate-200">Formamos a los líderes que gestionan el presente y diseñan el futuro de las organizaciones.</p>
          </div>
          <div class="bg-white text-uancv-blue-dark p-8 shadow-2xl">
            <h2 class="text-2xl font-bold mb-4">¿Interesado? Recibe Asesoría</h2>
            <form class="space-y-4">
              <input type="text" placeholder="Nombre Completo *" class="form-input" required />
              <input type="email" placeholder="Correo Electrónico *" class="form-input" required />
              <input type="tel" placeholder="Número de Celular" class="form-input" />
              <button type="submit" class="w-full bg-uancv-red hover:bg-uancv-red/90 text-white py-3 font-bold transition-colors">Solicitar Información</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Por qué Estudiar (Acordeón) -->
    <section class="py-16 sm:py-24 bg-uancv-bg">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div class="h-1 w-20 bg-uancv-red mb-4"></div>
          <h2 class="text-3xl sm:text-4xl font-bold font-sans text-uancv-blue-dark">¿Por qué estudiar Administración en la UANCV?</h2>
          <div class="mt-8 space-y-3">
            <div v-for="(item, i) in accordionItems" :key="i" class="border-b-2 border-uancv-border">
              <button @click="toggleAccordion(i)" class="w-full flex justify-between items-center py-4 text-left font-bold text-uancv-blue-dark hover:text-uancv-red">
                <span>{{ item.title }}</span>
                <svg :class="{'rotate-45': openIndex === i}" class="w-5 h-5 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
              </button>
              <div class="overflow-hidden transition-all duration-500 ease-in-out" :style="{ maxHeight: openIndex === i ? '200px' : '0px' }">
                <p class="pt-2 pb-4 text-uancv-text-secondary">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <img src="https://usap.edu/2024/wp-content/uploads/2024/02/administrator-business-people-financial-inspector-2023-11-27-05-19-50-utc-2048x1365.jpg" alt="Estudiantes de Administración" class="w-full h-full object-cover">
        </div>
      </div>
    </section>

    <!-- Competencias -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold font-sans text-uancv-blue-dark">Competencias Específicas</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          <div v-for="comp in competencias" :key="comp.title" class="bg-uancv-bg p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <svg class="h-10 w-10 mx-auto text-uancv-red" v-html="comp.icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"></svg>
            <p class="font-semibold text-uancv-blue-dark mt-4">{{ comp.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Campo Laboral -->
    <section class="bg-uancv-bg py-16 sm:py-24">
       <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="hidden md:block">
          <img src="https://img.freepik.com/foto-gratis/crecimiento-mi-empresa-es-impresionante_329181-11409.jpg?w=740" alt="Profesional de Administración" class="w-full h-full object-cover">
        </div>
        <div>
          <div class="h-1 w-20 bg-uancv-red mb-4"></div>
          <h2 class="text-3xl sm:text-4xl font-bold font-sans text-uancv-blue-dark">Campo Laboral</h2>
          <ul class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-uancv-text-secondary">
            <li v-for="item in campoLaboral" :key="item" class="flex items-start"><span class="text-uancv-red mr-2 font-bold">&rsaquo;</span> {{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Malla Curricular -->
    <section class="bg-uancv-blue-dark text-white py-16 sm:py-24">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold font-sans">Malla Curricular</h2>
        </div>
        <Swiper :modules="[Navigation]" navigation :slides-per-view="1" :space-between="30" :breakpoints="{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }" class="pb-12">
          <SwiperSlide v-for="ciclo in malla" :key="ciclo.numero" class="bg-white text-uancv-blue-dark shadow-lg">
            <div class="bg-uancv-maroon-dark text-white p-4 text-center font-bold">CICLO {{ ciclo.numero }}</div>
            <ul class="p-4 space-y-2">
              <li v-for="curso in ciclo.cursos" :key="curso" class="text-sm border-b border-uancv-border pb-2">{{ curso }}</li>
            </ul>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const openIndex = ref(null);
const toggleAccordion = (index) => { openIndex.value = openIndex.value === index ? null : index; };

const accordionItems = [
    { title: 'Formación integral en gestión empresarial', text: 'Aprende a planificar, organizar y dirigir estrategias para el éxito de cualquier tipo de organización.' },
    { title: 'Enfoque en liderazgo y toma de decisiones', text: 'Desarrolla habilidades para liderar equipos, gestionar recursos y resolver problemas de manera efectiva.' },
    { title: 'Conocimiento en finanzas, marketing y RRHH', text: 'Domina las áreas clave para el funcionamiento y crecimiento de una empresa.' },
    { title: 'Oportunidades laborales en múltiples sectores', text: 'Accede a un amplio campo de trabajo en empresas privadas, organismos públicos o emprendimientos propios.' }
];

const competencias = [
  { title: 'Administración y Liderazgo', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.962 0m-5.962 0a3.75 3.75 0 00-5.962 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />' },
  { title: 'Gestión del Talento', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.66c.12-.143.232-.292.338-.442zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />' },
  { title: 'Marketing', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 100 12 7.5 7.5 0 000-12z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v.01M10.5 9.75v.01M13.5 9.75v.01M12 6.75v.01M15 12.75v.01" />' },
  { title: 'Finanzas', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6V4.5m0 0h1.5m-1.5 0V3.75A.75.75 0 013.75 3h1.5m0 0h1.5m-1.5 0V4.5m0 0v1.5m0 0h1.5m-1.5 0V6a.75.75 0 01.75-.75h1.5m0 0V3.75a.75.75 0 01.75-.75h1.5m0 0h1.5m2.153 5.474a56.486 56.486 0 00-4.196-2.13l-2.25.63m-2.25-.63l-2.25.63m4.5 0l2.25-.63m2.25.63l2.25.63M3 18.75V15m12.75 3.75V15m-4.5 0h.008v.008h-.008V15zm-3 0h.008v.008h-.008V15zm-3 0h.008v.008h-.008V15z" />' },
  { title: 'Investigación', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.622.508-1.125 1.125-1.125h1.5c.617 0 1.125.503 1.125 1.125v1.5c0 .622-.508 1.125-1.125 1.125h-1.5A1.125 1.125 0 0114.25 7.587V6.087z" /><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 6.087c0-.622.508-1.125 1.125-1.125h1.5c.617 0 1.125.503 1.125 1.125v1.5c0 .622-.508 1.125-1.125 1.125h-1.5A1.125 1.125 0 015.25 7.587V6.087zM14.25 15.087c0-.622.508-1.125 1.125-1.125h1.5c.617 0 1.125.503 1.125 1.125v1.5c0 .622-.508 1.125-1.125 1.125h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 15.087c0-.622.508-1.125 1.125-1.125h1.5c.617 0 1.125.503 1.125 1.125v1.5c0 .622-.508 1.125-1.125 1.125h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5z" />' }
];

const campoLaboral = [
  "Empresas de producción y servicios", "Organizaciones de consultoría", "Centros de investigación", "Departamentos de RRHH",
  "Áreas de control de calidad", "Asesoría de talento", "Consultoría financiera", "Instituciones educativas", "Hospitales", "Organizaciones nacionales"
];

const malla = [
  { numero: 'I', cursos: ["Matemática I", "Contabilidad Básica", "Introducción a la Administración"] },
  { numero: 'II', cursos: ["Matemática II", "Costos y Presupuestos", "Marketing Estratégico"] },
  { numero: 'III', cursos: ["Estadística Aplicada", "Gestión Financiera", "Comportamiento del Consumidor"] },
  { numero: 'IV', cursos: ["Investigación de Mercados", "Gestión de Talento Humano", "Logística y Operaciones"] },
  { numero: 'V', cursos: ["Marketing Digital", "Finanzas Corporativas", "Dirección Estratégica"] },
  { numero: 'VI', cursos: ["Gerencia de Ventas", "Evaluación de Proyectos", "Liderazgo y Habilidades Gerenciales"] },
  { numero: 'VII', cursos: ["Marketing Internacional", "Auditoría de Gestión", "Seminario de Tesis I"] },
  { numero: 'VIII', cursos: ["Gerencia de Marketing", "Ética Profesional", "Seminario de Tesis II"] }
];
</script>

<style>
.form-input { @apply w-full p-3 border-2 border-uancv-border bg-white text-sm text-uancv-blue-dark placeholder:text-uancv-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-uancv-red/50 focus:border-uancv-red transition; }
.swiper-button-prev, .swiper-button-next { @apply text-white bg-uancv-red/80 hover:bg-uancv-red w-10 h-10; }
.swiper-button-prev::after, .swiper-button-next::after { @apply text-base font-extrabold; }
.prose { @apply text-justify; }
</style>