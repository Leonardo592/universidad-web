<template>
  <aside
    id="mobile-sidebar"
    class="fixed top-0 left-0 h-full w-72 bg-gray-900 text-gray-300 transform transition-transform duration-300 ease-in-out z-50 flex flex-col"
    :class="{ 'translate-x-0': layoutStore.isMobileMenuOpen, '-translate-x-full': !layoutStore.isMobileMenuOpen }"
    aria-label="Menú lateral principal"
  >
    <div class="flex items-center justify-between px-4 h-[60px] sm:h-[72px] border-b border-gray-700/50 flex-shrink-0 sticky top-0 bg-gray-900 z-10">
      <router-link to="/" @click="cerrarMenuCompleto" class="text-xl font-bold text-white hover:text-gray-200 transition-colors">
        UGEL Puno
      </router-link>
      <button
        @click="layoutStore.closeMobileMenu"
        aria-label="Cerrar menú"
        class="p-1 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-custom-red"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>

    <div class="flex-grow flex flex-col overflow-hidden">
      <div class="px-4 pt-4 pb-3 flex-shrink-0">
         <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
              </div>
              <input
                  type="search"
                  :value="busquedaStore.termino"
                  @input="handleBusquedaInput"
                  placeholder="Buscar..."
                  class="w-full pl-9 pr-3 py-1.5 border border-gray-700 rounded-md text-sm text-gray-200 bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-custom-red focus:border-custom-red transition duration-150 ease-in-out"
                  @focus="resultadosStore.mostrarResultados = true"
                  @blur="handleBlur"
                  aria-label="Buscar en el sitio"
                  autocomplete="off"
              />
               <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <div
                      v-if="resultadosStore.mostrarResultados && (resultadosStore.isLoading || resultadosStore.error || resultadosStore.resultados.length > 0 || busquedaStore.termino.length >= 3)"
                      class="absolute top-full left-0 right-0 mt-1 w-full bg-gray-800 rounded-md shadow-lg border border-gray-700 z-40 max-h-60 overflow-y-auto"
                      ref="resultadosDropdown"
                  >
                      <div v-if="resultadosStore.isLoading" class="p-3 text-center text-xs text-gray-400">Buscando...</div>
                      <div v-else-if="resultadosStore.error" class="p-3 text-center text-xs text-red-400">{{ resultadosStore.error }}</div>
                      <ul v-else-if="resultadosStore.resultados.length > 0" class="divide-y divide-gray-700">
                          <li v-for="resultado in resultadosStore.resultados" :key="resultado.tipo + '-' + resultado.id">
                              <router-link :to="resultado.url" class="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors" @click="handleResultadoClick">
                                  <span v-if="resultado.tipo" class="text-xs uppercase font-medium text-gray-500 mr-1.5">{{ tipoResultadoTexto(resultado.tipo) }}</span>
                                  <span class="font-medium line-clamp-1">{{ resultado.titulo }}</span>
                              </router-link>
                          </li>
                      </ul>
                      <div v-else-if="busquedaStore.termino.length >= 3" class="p-3 text-center text-xs text-gray-400">
                          No hay resultados para "{{ busquedaStore.termino }}".
                      </div>
                  </div>
              </transition>
         </div>
      </div>

      <nav class="px-4 flex-grow overflow-y-auto pb-4 sidebar-scrollbar">
        <ul class="space-y-1">
          <li>
            <router-link to="/" class="sidebar-link" exact @click="cerrarMenuCompleto">
               Inicio
            </router-link>
          </li>
          <li>
            <button @click="toggleSubmenu('noticias')" class="sidebar-link-toggle" :aria-expanded="submenus.noticias">
              <span>Noticias</span>
              <svg :class="{'rotate-180': submenus.noticias}" class="submenu-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
            </button>
            <ul v-show="submenus.noticias" class="sidebar-submenu">
              <li><router-link to="/noticias" class="sidebar-sublink" @click="cerrarMenuCompleto">Noticias</router-link></li>
              <li><router-link to="/comunicados" class="sidebar-sublink" @click="cerrarMenuCompleto">Comunicados</router-link></li>
              <li><router-link to="/videos" class="sidebar-sublink" @click="cerrarMenuCompleto">Videos</router-link></li>
            </ul>
          </li>
           <li>
            <button @click="toggleSubmenu('direccion')" class="sidebar-link-toggle" :aria-expanded="submenus.direccion">
              <span>Dirección</span>
              <svg :class="{'rotate-180': submenus.direccion}" class="submenu-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
            </button>
            <ul v-show="submenus.direccion" class="sidebar-submenu">
               <li><router-link to="/gestion-pedagogica" class="sidebar-sublink" @click="cerrarMenuCompleto">Gestión Pedagógica</router-link></li>
               <li><router-link to="/gestion-institucional" class="sidebar-sublink" @click="cerrarMenuCompleto">Gestión Institucional</router-link></li>
               <li><router-link to="/gestion-administrativa" class="sidebar-sublink" @click="cerrarMenuCompleto">Gestión Administrativa</router-link></li>
               <li><router-link to="/asesoria-legal" class="sidebar-sublink" @click="cerrarMenuCompleto">Asesoría Legal</router-link></li>
               <li><router-link to="/control-interno" class="sidebar-sublink" @click="cerrarMenuCompleto">Control Interno</router-link></li>
            </ul>
          </li>
          <li>
             <router-link to="/portalTransparencia" class="sidebar-link" @click="cerrarMenuCompleto">
                Portal de Transparencia
            </router-link>
          </li>
          <li>
             <router-link to="/directorio" class="sidebar-link" @click="cerrarMenuCompleto">
                Directorio
            </router-link>
          </li>
          <li>
            <router-link to="/contacto" class="sidebar-link" @click="cerrarMenuCompleto">
                Contacto
            </router-link>
          </li>
        </ul>
      </nav>

    </div>
  </aside>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, watch } from 'vue';
import { useLayoutStore } from '@/stores/layout';
import { useBusquedaStore } from "@/stores/busqueda";
import { useBusquedaResultadosStore } from "@/stores/busquedaResultados";
import { useRouter } from 'vue-router'; // Se usa indirectamente para navegar

const layoutStore = useLayoutStore();
const busquedaStore = useBusquedaStore();
const resultadosStore = useBusquedaResultadosStore();
const resultadosDropdown = ref(null);

const submenus = reactive({ noticias: false, direccion: false });

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
        resultadosStore.ocultarResultados();
    }, 200);
};

const handleResultadoClick = () => {
    resultadosStore.limpiarYocultarResultados();
    busquedaStore.limpiarTermino();
    layoutStore.closeMobileMenu();
};

const cerrarMenuCompleto = () => {
    layoutStore.closeMobileMenu();
    if (busquedaStore.termino) {
        busquedaStore.limpiarTermino();
        resultadosStore.limpiarYocultarResultados();
    }
};

const toggleSubmenu = (menu) => {
  submenus[menu] = !submenus[menu];
};

const tipoResultadoTexto = (tipo) => {
    const map = { noticia: 'Noticia', comunicado: 'Comunicado', directorio: 'Directorio', video: 'Video' };
    return map[tipo] || tipo;
};

watch(() => busquedaStore.termino, (nuevoTermino) => {
    if (!nuevoTermino) {
        resultadosStore.limpiarYocultarResultados();
    }
});

</script>

<style scoped>
.sidebar-link, .sidebar-link-toggle {
  @apply flex items-center justify-between w-full px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white focus:outline-none focus:bg-gray-700/50 focus:text-white transition-colors duration-150;
}
.sidebar-submenu {
  @apply mt-1 space-y-1 pl-7; /* Indentación aumentada, sin borde */
}
.sidebar-sublink {
  @apply block w-full px-4 py-1.5 rounded-md text-sm text-gray-400 hover:bg-gray-700/50 hover:text-white focus:outline-none focus:bg-gray-700/50 focus:text-white transition-colors duration-150;
}

/* Estilo Activo Principal (Usando Clases por defecto de Vue Router) */
.sidebar-link.router-link-exact-active {
  @apply bg-gray-700/50 text-white border-l-4 border-custom-red pl-3; /* Borde izquierdo + Fondo sutil */
}
.sidebar-link-toggle:has(+ .sidebar-submenu .router-link-active) {
  @apply bg-gray-700/30 text-gray-100; /* Indica que un hijo está activo */
}

/* Estilo Activo Submenu (Usando Clases por defecto) */
.sidebar-sublink.router-link-active {
  @apply text-custom-red font-medium; /* Solo texto rojo y negrita */
}

.submenu-arrow {
  @apply w-4 h-4 text-gray-400 transition-transform duration-200;
}

.sidebar-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
.sidebar-scrollbar::-webkit-scrollbar-track { background: transparent; }
.sidebar-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(107, 114, 128, 0.4); border-radius: 3px; }
.sidebar-scrollbar::-webkit-scrollbar-thumb:hover { background-color: rgba(107, 114, 128, 0.6); }

.line-clamp-1 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; }
</style>