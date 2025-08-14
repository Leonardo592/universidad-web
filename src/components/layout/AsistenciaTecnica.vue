<template>
    <div class="bg-white p-6 shadow-md h-full flex flex-col">
      <div class="flex items-center mb-3">
        <div class="bg-custom-red p-2 rounded-full mr-3 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
        </div>
        <h2 class="text-xl font-bold text-gray-900">Asistencia Técnica Online</h2>
      </div>
      <hr class="border-custom-red/30 mb-4">
      <ul class="space-y-2.5 flex-grow overflow-y-auto">
        <li v-for="item in itemsAsistencia" :key="item.texto" class="text-sm">
          <a
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center text-gray-700 hover:text-custom-red group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-custom-red/80 group-hover:text-custom-red flex-shrink-0"> {/* Color del icono del item ajustado */}
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
            </svg>
            <span class="hover:underline">{{ item.texto }}</span>
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const itemsAsistencia = [
    { texto: "AULA VIRTUAL UGEL PUNO", url: "http://avirtualcd.ugelpuno.edu.pe/" },
    { texto: "PLATAFORMA DE CERTIFICACION DIGITAL", url: "http://certificadodigital.ugelpuno.edu.pe/" },
    { texto: "REPOSITORIO DE RECURSOS DIGITALES", url: "https://aulatic.apgeipuno.edu.pe/" },
    { texto: "WEB SITE", url: "https://sites.google.com/apgeipuno.edu.pe/nivelsecundaria/asist-tec" },
    { texto: "ESCALAFÓN – AYNI", url: "https://escalafonugelpuno.blogspot.com/" },
    { texto: "Aula de Innovación Pedagógica", url: "https://sites.google.com/ugelpuno.edu.pe/agp-auladeinnovacionpedagogica/inicio" },
    { texto: "Desarrollo Personal, Ciudadanía y Cívica", url: "https://sites.google.com/ugelpuno.edu.pe/dpcc?usp=sharing" },
    { texto: "Matemática", url: "https://sites.google.com/d/1UkXEjjUIO-kpesGAgmuzpGMZh7otxtX/p/1Oui4wcfuJb2XdvTeLRXgcXS1j_u3m2Bf/edit" },
    { texto: "EIB", url: "https://sites.google.com/ugelpuno.edu.pe/agp-eib/inicio" },
    { texto: "Arte y Cultura", url: "https://sites.google.com/ugelpuno.edu.pe/agp-arteycreatividad/inicio" },
    { texto: "Ingles", url: "https://sites.google.com/ugelpuno.edu.pe/agp-ingles/inicio" },
    { texto: "Comunicación", url: "https://sites.google.com/ugelpuno.edu.pe/agp-comunicacion/inicio" },
    { texto: "Educación para el Trabajo", url: "https://sites.google.com/ugelpuno.edu.pe/agp-ept/inicio" },
    { texto: "Tutoria", url: "https://sites.google.com/ugelpuno.edu.pe/agp-tutoria/inicio" },
    { texto: "Educación Primaria", url: "https://sites.google.com/ugelpuno.edu.pe/agp-educacionprimaria/inicio" },
    { texto: "Educación Inicial", url: "https://sites.google.com/ugelpuno.edu.pe/pagp-web-educacion-inicial/videos" },
    { texto: "Convivencia Escolar", url: "https://sites.google.com/ugelpuno.edu.pe/agp-convivencia-escolar/inicio" },
    { texto: "CTA", url: "https://sites.google.com/ugelpuno.edu.pe/agp-educacionfisica/inicio" },
    { texto: "EDUCACIÓN FÍSICA", url: "https://sites.google.com/ugelpuno.edu.pe/agp-educacionfisica/inicio" },
    { texto: "CCSS", url: "https://sites.google.com/ugelpuno.edu.pe/agp-ciencias-sociales/inicio" },
  ];
  </script>
  
  <style scoped>
  .text-custom-red {
    color: #9C3620;
  }
  .bg-custom-red {
    background-color: #9C3620;
  }
  .bg-custom-red\/10 {
    background-color: rgba(156, 54, 32, 0.1);
  }
  .border-custom-red\/30 {
    border-color: rgba(156, 54, 32, 0.3);
  }
  .text-custom-red\/80 {
    color: rgba(156, 54, 32, 0.8);
  }
  </style>