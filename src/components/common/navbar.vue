<template>
  <nav class="hidden lg:flex bg-white border-b border-gray-200/80 shadow-sm h-[60px] sticky top-0 z-50">
    <div class="max-w-screen-xl w-full flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">

      <div class="flex items-center">
        <ul class="flex items-center space-x-1 xl:space-x-2">
          <li><router-link to="/" class="menu-item">Inicio</router-link></li>
          <li class="relative group">
            <button class="menu-item flex items-center">Noticias<svg class="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></button>
            <ul class="submenu">
              <li><router-link to="/noticias" class="submenu-item">Noticias</router-link></li>
              <li><router-link to="/comunicados" class="submenu-item">Comunicados</router-link></li>
              <li><router-link to="/videos" class="submenu-item">Videos</router-link></li>
            </ul>
          </li>
          <li class="relative group">
            <button class="menu-item flex items-center">Dirección<svg class="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></button>
            <ul class="submenu">
              <li><router-link to="/gestion-pedagogica" class="submenu-item">Gestión Pedagógica</router-link></li>
              <li><router-link to="/gestion-institucional" class="submenu-item">Gestión Institucional</router-link></li>
              <li><router-link to="/gestion-administrativa" class="submenu-item">Gestión Administrativa</router-link></li>
              <li><router-link to="/asesoria-legal" class="submenu-item">Asesoría Legal</router-link></li>
              <li><router-link to="/control-interno" class="submenu-item">Control Interno</router-link></li>
            </ul>
          </li>
          <li><router-link to="/portalTransparencia" class="menu-item">Portal de Transparencia</router-link></li>
          <li><router-link to="/directorio" class="menu-item">Directorio</router-link></li>
          <li><router-link to="/contacto" class="menu-item">Contacto</router-link></li>
        </ul>
      </div>

      <div class="relative ml-auto w-60 xl:w-64 flex-shrink-0"> 
        <div class="relative">
          <div class="absolute inset-y-0 left-0 ps-3 flex items-center pointer-events-none">
            <svg class="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
          </div>
          <input type="search" :value="busquedaStore.termino" @input="handleBusquedaInput" placeholder="Buscar noticia o comunicado..." class="w-full ps-9 pe-3 py-1.5 border border-gray-300/80 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-custom-red" @focus="resultadosStore.mostrarResultados = true" @blur="handleBlur" autocomplete="off" />
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <div v-if="resultadosStore.mostrarResultados && busquedaStore.termino.length >= 3" class="absolute top-full left-0 right-0 mt-1 w-full bg-white rounded-md shadow-lg border z-40 max-h-80 overflow-y-auto">
            <div v-if="resultadosStore.isLoading" class="p-3 text-center text-xs text-gray-500">Buscando...</div>
            <ul v-else-if="resultadosStore.todosLosResultados.length > 0" class="divide-y divide-gray-100">
              <li v-for="resultado in resultadosStore.todosLosResultados" :key="resultado.tipo + '-' + resultado.id">
                <router-link :to="resultado.url" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-custom-red" @click="handleResultadoClick">
                  <span class="text-xs uppercase font-semibold mr-1.5" :class="resultado.tipo === 'noticia' ? 'text-blue-500' : 'text-sky-500'">{{ resultado.tipo }}</span>
                  <span class="font-medium line-clamp-1">{{ resultado.titulo }}</span>
                </router-link>
              </li>
            </ul>
            <div v-else class="p-3 text-center text-xs text-gray-500">No se encontraron resultados.</div>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useBusquedaStore } from "@/stores/busqueda";
import { useBusquedaResultadosStore } from "@/stores/busquedaResultados";

const busquedaStore = useBusquedaStore();
const resultadosStore = useBusquedaResultadosStore();

const handleBusquedaInput = (event) => {
  const nuevoTermino = event.target.value;
  busquedaStore.actualizarTermino(nuevoTermino);
  resultadosStore.buscarResultados(nuevoTermino);
};

const handleBlur = () => {
  setTimeout(() => {
    resultadosStore.ocultarResultados();
  }, 200);
};

const handleResultadoClick = () => {
  resultadosStore.limpiarResultados();
  busquedaStore.limpiarTermino();
};
</script>

<style scoped>
.menu-item { @apply inline-flex items-center h-[60px] px-3 xl:px-4 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-custom-red hover:border-custom-red; }
.menu-item.router-link-exact-active { @apply text-custom-red font-semibold border-custom-red; }
li.group:hover > button.menu-item { @apply text-custom-red bg-gray-50; }
.submenu { @apply absolute left-0 top-full min-w-[220px] bg-white shadow-lg rounded-b-md mt-0 py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30 border border-t-0; }
.submenu-item { @apply block w-full text-left px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-50 hover:text-custom-red; }
.submenu-item.router-link-active { @apply text-custom-red font-medium bg-gray-100; }
.line-clamp-1 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; }
</style>