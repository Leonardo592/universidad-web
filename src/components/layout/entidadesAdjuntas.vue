<template>
    <div class="bg-white py-8 md:py-12 border-t border-b border-gray-200">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-center text-lg font-semibold text-gray-500 mb-6 md:mb-8">
          Enlaces de Interés
        </h2>
        <div class="flex flex-wrap justify-center items-center gap-y-4">
          <template v-for="(entidad, index) in entidades" :key="entidad.id">
            <a
              :href="entidad.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="entidad.name"
              class="block mx-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-red rounded transition-transform duration-200 ease-in-out hover:scale-110"
            >
              <img
                :src="getLogoPath(entidad.logoFile)"
                :alt="entidad.name"
                class="h-10 md:h-12 lg:h-14 w-auto object-contain transition-opacity duration-200 ease-in-out hover:opacity-90"
              />
            </a>
            <div
              v-if="index < entidades.length - 1"
              class="h-8 border-l border-gray-300 hidden md:block"
              aria-hidden="true"
             ></div>
          </template>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const entidades = ref([
    { id: 'minedu', name: 'Ministerio de Educación', href: 'http://www.minedu.gob.pe/', logoFile: 'minedu-redes.jpg' },
    { id: 'bn', name: 'Banco de la Nación', href: 'http://www.bn.com.pe/', logoFile: 'imagen-bancodelanacion.jpg' },
    { id: 'grpuno', name: 'Gobierno Regional Puno', href: 'http://www.regionpuno.gob.pe/', logoFile: 'GobiernoRegionalPuno.png' },
    { id: 'perugob', name: 'Portal del Estado Peruano', href: 'http://www.peru.gob.pe/', logoFile: 'portalEstadoPeruano.jpg' },
    { id: 'essalud', name: 'EsSalud', href: 'http://www.essalud.gob.pe/', logoFile: 'essalud.jpg' },
    { id: 'escale', name: 'Escale - MINEDU', href: 'http://escale.minedu.gob.pe/', logoFile: 'escale.png' },
    { id: 'drepuno', name: 'DRE Puno', href: 'http://www.drepuno.gob.pe/', logoFile: 'DrepDireccionRegionalEducacion.png' },
    { id: 'siagie', name: 'SIAGIE - MINEDU', href: 'http://siagie.minedu.gob.pe/inicio/', logoFile: 'siagie.jpg' },
    { id: 'perueduca', name: 'PeruEduca', href: 'http://www.perueduca.pe/', logoFile: 'perueduca.png' },
    { id: 'munipuno', name: 'Municipalidad Provincial de Puno', href: 'http://www.munipuno.gob.pe/', logoFile: 'ESCUDODEPUNO.png' },
    { id: 'siseve', name: 'SiSeVe - MINEDU', href: 'http://www.siseve.pe/', logoFile: 'siseve.png' },
  ]);
  
  const getLogoPath = (filename) => {
    try {
      return new URL(`../../assets/img/entidades/${filename}`, import.meta.url).href;
    } catch (e) {
      console.error(`Error loading image: ${filename}`, e);
      return '';
    }
  };
  </script>
  
  <style scoped>
  /* No se necesitan estilos específicos adicionales aquí */
  </style>