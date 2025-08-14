<template>
  <header class="hidden lg:flex flex-col sticky top-0 bg-white z-40">
    <div class="w-full bg-uancv-blue-dark text-white">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
        <div class="text-xs font-medium tracking-wide">
          Universidad Andina Néstor Cáceres Velásquez
        </div>
        <div class="flex items-center space-x-5 text-xs">
          <a href="#" class="hover:text-white/80 transition-colors">Aula Virtual</a>
          <a href="#" class="hover:text-white/80 transition-colors">Bolsa de Trabajo</a>
          <a href="#" class="hover:text-white/80 transition-colors">Transparencia</a>
        </div>
      </div>
    </div>
    
    <nav class="w-full bg-white border-b border-uancv-border shadow-sm h-[72px]">
      <div class="max-w-screen-xl w-full flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 h-full">

        <div class="flex items-center space-x-8">
          <router-link to="/" class="flex-shrink-0">
            <img class="h-12 w-auto" src="https://economia.uancv.edu.pe/web/escuela/logos_uancv/logo_uancv.png" alt="Logo UANCV">
          </router-link>

          <ul class="flex items-center space-x-1">
            <li>
              <router-link to="/" class="inline-flex items-center h-[72px] px-4 text-sm font-semibold border-b-4 transition-colors duration-200 text-uancv-text-secondary border-transparent hover:text-uancv-red hover:border-uancv-red/50 focus:outline-none focus:text-uancv-red router-link-exact-active:text-uancv-red router-link-exact-active:border-uancv-red">Inicio</router-link>
            </li>
            
            <li class="relative group">
              <button class="inline-flex items-center h-[72px] px-4 text-sm font-semibold border-b-4 transition-colors duration-200 text-uancv-text-secondary border-transparent group-hover:text-uancv-red group-hover:border-uancv-red/50 focus:outline-none focus:text-uancv-red">
                <span>Programas Académicos</span>
                <svg class="w-4 h-4 ml-1.5 text-slate-400 group-hover:text-slate-500 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </button>
              <div class="absolute left-0 top-full min-w-[240px] bg-white shadow-xl rounded-b-lg mt-0 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30 border border-uancv-border/75 border-t-0">
                <router-link to="/programas/contabilidad" class="block w-full text-left px-4 py-2.5 text-sm font-medium text-uancv-text-secondary hover:bg-uancv-bg hover:text-uancv-red focus:bg-uancv-bg focus:text-uancv-red focus:outline-none transition-colors duration-150 router-link-active:text-uancv-red">Contabilidad</router-link>
                <router-link to="/programas/administracion" class="block w-full text-left px-4 py-2.5 text-sm font-medium text-uancv-text-secondary hover:bg-uancv-bg hover:text-uancv-red focus:bg-uancv-bg focus:text-uancv-red focus:outline-none transition-colors duration-150 router-link-active:text-uancv-red">Administración</router-link>
                <div class="my-1 border-t border-uancv-border"></div>
                <router-link to="/posgrado" class="block w-full text-left px-4 py-2.5 text-sm font-medium text-uancv-text-secondary hover:bg-uancv-bg hover:text-uancv-red focus:bg-uancv-bg focus:text-uancv-red focus:outline-none transition-colors duration-150 router-link-active:text-uancv-red">Escuela de Posgrado</router-link>
              </div>
            </li>

            <li>
              <router-link to="/admision" class="inline-flex items-center h-[72px] px-4 text-sm font-semibold border-b-4 transition-colors duration-200 text-uancv-text-secondary border-transparent hover:text-uancv-red hover:border-uancv-red/50 focus:outline-none focus:text-uancv-red router-link-active:text-uancv-red router-link-active:border-uancv-red">Admisión</router-link>
            </li>
            
            <li class="relative group">
              <button class="inline-flex items-center h-[72px] px-4 text-sm font-semibold border-b-4 transition-colors duration-200 text-uancv-text-secondary border-transparent group-hover:text-uancv-red group-hover:border-uancv-red/50 focus:outline-none focus:text-uancv-red">
                <span>Nuestra Universidad</span>
                <svg class="w-4 h-4 ml-1.5 text-slate-400 group-hover:text-slate-500 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </button>
              <div class="absolute left-0 top-full min-w-[240px] bg-white shadow-xl rounded-b-lg mt-0 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30 border border-uancv-border/75 border-t-0">
                <router-link to="/historia" class="block w-full text-left px-4 py-2.5 text-sm font-medium text-uancv-text-secondary hover:bg-uancv-bg hover:text-uancv-red focus:bg-uancv-bg focus:text-uancv-red focus:outline-none transition-colors duration-150 router-link-active:text-uancv-red">Historia y Misión</router-link>
                <router-link to="/licenciamiento" class="block w-full text-left px-4 py-2.5 text-sm font-medium text-uancv-text-secondary hover:bg-uancv-bg hover:text-uancv-red focus:bg-uancv-bg focus:text-uancv-red focus:outline-none transition-colors duration-150 router-link-active:text-uancv-red">Proceso de Licenciamiento</router-link>
                <router-link to="/campus" class="block w-full text-left px-4 py-2.5 text-sm font-medium text-uancv-text-secondary hover:bg-uancv-bg hover:text-uancv-red focus:bg-uancv-bg focus:text-uancv-red focus:outline-none transition-colors duration-150 router-link-active:text-uancv-red">Campus y Filiales</router-link>
              </div>
            </li>
            <li>
              <router-link to="/contacto" class="inline-flex items-center h-[72px] px-4 text-sm font-semibold border-b-4 transition-colors duration-200 text-uancv-text-secondary border-transparent hover:text-uancv-red hover:border-uancv-red/50 focus:outline-none focus:text-uancv-red router-link-active:text-uancv-red router-link-active:border-uancv-red">Contacto</router-link>
            </li>
          </ul>
        </div>
        
        <div class="relative ml-auto w-64 flex-shrink-0"> 
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="w-4 h-4 text-uancv-text-secondary/60" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            </div>
            <input
              type="search"
              :value="busquedaStore.termino"
              @input="handleBusquedaInput"
              placeholder="Buscar en el sitio..."
              class="w-full pl-9 pr-3 py-2 border border-uancv-border rounded-md text-sm text-uancv-blue-dark bg-white placeholder:text-uancv-text-secondary/80 focus:outline-none focus:ring-2 focus:ring-uancv-red/50 focus:border-uancv-red transition"
              @focus="resultadosStore.mostrarResultados = true"
              @blur="handleBlur"
              aria-label="Buscar en el sitio"
              autocomplete="off"
            />
          </div>
        </div>

      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { useBusquedaStore } from "@/stores/busqueda";
import { useBusquedaResultadosStore } from "@/stores/busquedaResultados";

const busquedaStore = useBusquedaStore();
const resultadosStore = useBusquedaResultadosStore();
const resultadosDropdown = ref(null);

const handleBusquedaInput = (event) => {
    const nuevoTermino = event.target.value;
    busquedaStore.actualizarTermino(nuevoTermino);
    if (nuevoTermino.length >= 3 || nuevoTermino.length === 0) {
      resultadosStore.buscarResultados(nuevoTermino);
    } else {
       resultadosStore.limpiarResultados();
    }
};

const handleBlur = () => {
    setTimeout(() => {
        if (!resultadosDropdown.value?.contains(document.activeElement)) {
             resultadosStore.ocultarResultados();
        }
    }, 200);
};

const handleResultadoClick = () => {
    resultadosStore.limpiarYocultarResultados();
    busquedaStore.limpiarTermino();
}

const tipoResultadoTexto = (tipo) => {
    const map = {
        noticia: 'Noticia',
        evento: 'Evento',
        programa: 'Programa',
        pagina: 'Página',
    };
    return map[tipo] || tipo;
};

watch(() => busquedaStore.termino, (nuevoTermino) => {
    if (!nuevoTermo) {
        resultadosStore.limpiarYocultarResultados();
    }
});
</script>