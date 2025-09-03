<template>
  <aside
    id="mobile-sidebar"
    class="sidebar"
    :class="{ 'translate-x-0': layoutStore.isMobileMenuOpen, '-translate-x-full': !layoutStore.isMobileMenuOpen }"
    aria-label="Menú principal"
  >
    <div class="sidebar-header">
      <router-link to="/" @click="cerrarMenuCompleto" class="flex items-center space-x-2">
        <img src="@/assets/img/logo_uancv.png" alt="Logo UANCV" class="h-10 w-auto">
        <span class="text-xl font-bold text-uancv-blue-dark">UANCV</span>
      </router-link>
      <button @click="layoutStore.closeMobileMenu" aria-label="Cerrar menú" class="sidebar-close-button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>

    <div class="flex-grow flex flex-col overflow-hidden">
      <nav class="px-2 flex-grow overflow-y-auto py-4 sidebar-scrollbar">
        <ul class="space-y-1">
          <li>
            <router-link to="/" class="sidebar-link" exact @click="cerrarMenuCompleto">Inicio</router-link>
          </li>
          
          <li>
            <button @click="toggleSubmenu('programas')" class="sidebar-link-toggle" :aria-expanded="submenus.programas">
              <span>Programas Académicos</span>
              <svg :class="{'rotate-180': submenus.programas}" class="submenu-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
            </button>
            <ul v-show="submenus.programas" class="sidebar-submenu">
              <li><router-link to="/programas/contabilidad" class="sidebar-sublink" @click="cerrarMenuCompleto">Contabilidad y Finanzas</router-link></li>
              <li><router-link to="/programas/administracion" class="sidebar-sublink" @click="cerrarMenuCompleto">Administración de Empresas</router-link></li>
              <li><router-link to="/posgrado/maestrias" class="sidebar-sublink" @click="cerrarMenuCompleto">Maestrías</router-link></li>
              <li><router-link to="/posgrado/doctorados" class="sidebar-sublink" @click="cerrarMenuCompleto">Doctorados</router-link></li>
            </ul>
          </li>

          <li>
            <router-link to="/admision" class="sidebar-link" @click="cerrarMenuCompleto">Admisión</router-link>
          </li>

          <li>
            <button @click="toggleSubmenu('universidad')" class="sidebar-link-toggle" :aria-expanded="submenus.universidad">
              <span>Nuestra Universidad</span>
              <svg :class="{'rotate-180': submenus.universidad}" class="submenu-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
            </button>
            <ul v-show="submenus.universidad" class="sidebar-submenu">
               <li><router-link to="/nosotros" class="sidebar-sublink" @click="cerrarMenuCompleto">Historia y Misión</router-link></li>
               <li><router-link to="/licenciamiento" class="sidebar-sublink" @click="cerrarMenuCompleto">Proceso de Licenciamiento</router-link></li>
               <li><router-link to="/campus" class="sidebar-sublink" @click="cerrarMenuCompleto">Campus y Filiales</router-link></li>
            </ul>
          </li>

          <li>
            <router-link to="/servicios" class="sidebar-link" @click="cerrarMenuCompleto">Servicios</router-link>
          </li>
          
          <li>
            <router-link to="/contacto" class="sidebar-link" @click="cerrarMenuCompleto">Contacto</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { reactive } from 'vue';
import { useLayoutStore } from '@/stores/layout';
const layoutStore = useLayoutStore();
const submenus = reactive({ programas: false, universidad: false });
const cerrarMenuCompleto = () => { layoutStore.closeMobileMenu(); };
const toggleSubmenu = (menu) => {
  const currentState = submenus[menu];
  for (const key in submenus) { submenus[key] = false; }
  submenus[menu] = !currentState;
};
</script>

<style scoped>
.sidebar { @apply fixed top-0 left-0 h-full w-72 bg-white text-uancv-blue-dark transform transition-transform duration-300 ease-in-out z-50 flex flex-col border-r border-uancv-border; }
.sidebar-header { @apply flex items-center justify-between px-4 h-[72px] border-b border-uancv-border flex-shrink-0; }
.sidebar-close-button { @apply p-1 text-slate-500 hover:bg-uancv-bg hover:text-uancv-red focus:outline-none focus:ring-2 focus:ring-inset focus:ring-uancv-red; }
.sidebar-link, .sidebar-link-toggle { @apply flex items-center justify-between w-full px-3 py-3 text-base font-semibold text-uancv-blue-dark hover:bg-uancv-bg hover:text-uancv-red focus:outline-none focus:bg-uancv-bg focus:text-uancv-red transition-colors duration-150; }
.sidebar-submenu { @apply mt-1 space-y-1 pl-4 border-l-2 border-uancv-border; }
.sidebar-sublink { @apply block w-full px-3 py-2 text-sm text-uancv-text-secondary hover:bg-uancv-bg hover:text-uancv-blue-dark focus:outline-none focus:bg-uancv-bg focus:text-uancv-blue-dark transition-colors duration-150; }
.sidebar-link.router-link-exact-active { @apply bg-uancv-red/10 text-uancv-red font-bold border-r-4 border-uancv-red; }
.sidebar-link-toggle:has(+ .sidebar-submenu .router-link-active) { @apply bg-uancv-bg text-uancv-blue-dark; }
.sidebar-sublink.router-link-active { @apply font-semibold text-uancv-red; }
.submenu-arrow { @apply w-4 h-4 text-uancv-text-secondary transition-transform duration-200; }
.sidebar-scrollbar::-webkit-scrollbar { @apply w-1.5; }
.sidebar-scrollbar::-webkit-scrollbar-track { @apply bg-transparent; }
.sidebar-scrollbar::-webkit-scrollbar-thumb { @apply bg-slate-300; }
.sidebar-scrollbar::-webkit-scrollbar-thumb:hover { @apply bg-slate-400; }
</style>