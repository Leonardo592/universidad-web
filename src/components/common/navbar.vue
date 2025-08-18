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
          <router-link to="/transparencia" class="hover:text-white/80 transition-colors">Transparencia</router-link>
        </div>
      </div>
    </div>
    
    <nav class="w-full bg-white border-b border-uancv-border shadow-sm h-[72px]">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full relative">

        <div class="flex items-center h-full">
          <router-link to="/" class="flex-shrink-0 flex items-center space-x-3 group pr-8">
            <img class="h-12 w-auto transition-transform duration-300 group-hover:scale-110" src="https://economia.uancv.edu.pe/web/escuela/logos_uancv/logo_uancv.png" alt="Logo UANCV">
            <div class="hidden xl:block">
              <span class="block text-lg font-bold text-uancv-blue-dark leading-tight">UANCV</span>
              <span class="block text-xs text-uancv-text-secondary leading-tight">Al servicio del pueblo</span>
            </div>
          </router-link>

          <ul class="flex items-center h-full space-x-1">
            <li class="h-full">
              <router-link to="/" class="nav-link">Inicio</router-link>
            </li>
            
            <li class="h-full group">
              <button class="nav-link-button">
                <span>Programas Académicos</span>
                <svg class="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </button>
              <div class="mega-menu">
                <div class="grid grid-cols-3 gap-8 p-8">
                  <div>
                    <h4 class="mega-menu-title">Pregrado</h4>
                    <ul class="mt-4 space-y-3">
                      <li><router-link to="/programas/administracion" class="mega-menu-link">Contabilidad y Finanzas</router-link></li>
                      <li><router-link to="/programas/administracion" class="mega-menu-link">Administración de Empresas</router-link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="mega-menu-title">Posgrado</h4>
                    <ul class="mt-4 space-y-3">
                      <li><router-link to="/posgrado/maestrias" class="mega-menu-link">Maestrías</router-link></li>
                      <li><router-link to="/posgrado/doctorados" class="mega-menu-link">Doctorados</router-link></li>
                    </ul>
                  </div>
                  <div class="bg-uancv-bg p-6">
                     <h4 class="mega-menu-title">Proceso de Admisión</h4>
                     <p class="text-sm mt-2 text-uancv-text-secondary">Tu futuro profesional comienza aquí. Postula ahora.</p>
                     <router-link to="/admision" class="inline-block mt-4 bg-uancv-red text-white font-bold text-sm px-5 py-2 hover:bg-uancv-red/90">Postular Ahora</router-link>
                  </div>
                </div>
              </div>
            </li>

            <li class="h-full">
              <router-link to="/admision" class="nav-link">Admisión</router-link>
            </li>
            
            <li class="h-full group">
              <button class="nav-link-button">
                <span>Nuestra Universidad</span>
                <svg class="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </button>
               <div class="mega-menu">
                <div class="grid grid-cols-4 gap-8 p-8">
                  <div>
                    <h4 class="mega-menu-title">Sobre Nosotros</h4>
                    <ul class="mt-4 space-y-3">
                      <li><router-link to="/nosotros" class="mega-menu-link">Historia y Misión</router-link></li>
                      <li><router-link to="/autoridades" class="mega-menu-link">Autoridades</router-link></li>
                      <li><router-link to="/campus" class="mega-menu-link">Campus y Filiales</router-link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="mega-menu-title">Normativa</h4>
                    <ul class="mt-4 space-y-3">
                      <li><router-link to="/licenciamiento" class="mega-menu-link">Proceso de Licenciamiento</router-link></li>
                      <li><router-link to="/transparencia" class="mega-menu-link">Portal de Transparencia</router-link></li>
                      <li><router-link to="/reglamentos" class="mega-menu-link">Reglamentos</router-link></li>
                    </ul>
                  </div>
                   <div>
                    <h4 class="mega-menu-title">Gestión Institucional</h4>
                    <ul class="mt-4 space-y-3">
                      <li><router-link to="/gestion-institucional" class="mega-menu-link">Área de Gestión Institucional</router-link></li>
                      <li><router-link to="/gestion-pedagogica" class="mega-menu-link">Área de Gestión Pedagógica</router-link></li>
                      <li><router-link to="/gestion-administrativa" class="mega-menu-link">Área de Gestión Administrativa</router-link></li>
                    </ul>
                  </div>
                   <div>
                    <h4 class="mega-menu-title">Comunidad</h4>
                    <ul class="mt-4 space-y-3">
                      <li><router-link to="/convenios" class="mega-menu-link">Convenios</router-link></li>
                      <li><router-link to="/noticias" class="mega-menu-link">Noticias y Eventos</router-link></li>
                      <li><router-link to="/servicios" class="mega-menu-link">Servicios y Plataformas</router-link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="mega-menu-title">Oficinas</h4>
                    <ul class="mt-4 space-y-3">
                      <li><router-link to="/licenciamiento" class="mega-menu-link">Otit</router-link></li>
                      <li><router-link to="/transparencia" class="mega-menu-link">oficina General de Investigación</router-link></li>
                      <li><router-link to="/reglamentos" class="mega-menu-link">Oficina de Planificación</router-link></li>
                      <li><router-link to="/reglamentos" class="mega-menu-link">Bienestar Universitario</router-link></li>
                      <li><router-link to="/reglamentos" class="mega-menu-link">Responsabilidad Social</router-link></li>
                      <li><router-link to="/reglamentos" class="mega-menu-link">Defensoría Universitaria</router-link></li>
                      <li><router-link to="/reglamentos" class="mega-menu-link">Registro Central</router-link></li>
                      <li><router-link to="/reglamentos" class="mega-menu-link">Gestión de Calidad</router-link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        
        <div class="relative w-64 flex-shrink-0"> 
          <input 
            type="search" 
            placeholder="Buscar en el sitio..." 
            class="w-full pl-4 pr-10 py-2 border border-uancv-border text-sm text-uancv-blue-dark placeholder:text-uancv-text-secondary/80 focus:outline-none focus:ring-2 focus:ring-uancv-red/50 focus:border-uancv-red transition"
            :value="busquedaStore.termino"
            @input="handleBusquedaInput"
            @focus="resultadosStore.mostrarResultados = true"
            @blur="handleBlur"
            aria-label="Buscar en el sitio"
            autocomplete="off"
          >
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-uancv-text-secondary/60" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
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
    if (!nuevoTermino) {
        resultadosStore.limpiarYocultarResultados();
    }
});
</script>

<style scoped>
.nav-link, .nav-link-button {
  @apply flex items-center h-full px-4 text-sm font-semibold border-b-4 transition-colors duration-200 text-uancv-text-secondary border-transparent;
}
.nav-link:hover, .nav-link-button:hover,
.group:hover .nav-link-button {
  @apply text-uancv-red border-uancv-red/50 bg-uancv-bg;
}
.nav-link.router-link-exact-active {
  @apply text-uancv-red border-uancv-red;
}
.mega-menu {
  @apply absolute top-full left-0 w-full bg-white shadow-xl mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30 border-x border-b border-uancv-border;
}
.mega-menu-title {
  @apply font-bold text-uancv-blue-dark tracking-wide;
}
.mega-menu-link {
  @apply block text-sm text-uancv-text-secondary hover:text-uancv-red hover:translate-x-1 transition-all;
}
</style>