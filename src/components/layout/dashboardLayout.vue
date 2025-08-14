<template>
  <div class="min-h-screen bg-slate-50">
    <!-- El Navbar de escritorio es un solo componente que ya incluye la barra superior y la principal. Es sticky. -->
    <Navbar class="hidden lg:block" />

    <!-- Header solo para MÓVIL (reemplaza al Navbar de escritorio en pantallas pequeñas) -->
    <header class="lg:hidden sticky top-0 left-0 w-full bg-white z-40 shadow-sm">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-[72px]">
          <div class="flex items-center">
            <!-- Botón para abrir el Sidebar en móvil -->
            <button
                @click="layoutStore.toggleMobileMenu"
                class="p-2 -ml-2 rounded-md text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-uancv-red"
                aria-label="Abrir menú principal"
                aria-controls="mobile-sidebar"
                :aria-expanded="layoutStore.isMobileMenuOpen.toString()"
            >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
          
          <!-- Logo de la UANCV en el centro del header móvil -->
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <router-link to="/" aria-label="Ir a la página de inicio de UANCV">
              <img src="https://www.uancv.edu.pe/web/wp-content/uploads/2023/12/logo-uancv-slider.png"
                  alt="Logo UANCV"
                  class="h-10 w-auto"
                  aria-hidden="true" />
            </router-link>
          </div>

          <!-- Dejamos un div vacío a la derecha para balancear el layout y que el logo quede centrado -->
          <div class="w-6"></div> 
        </div>
      </div>
    </header>

    <!-- Sidebar para móvil, que se abre con el botón de arriba -->
    <Sidebar id="mobile-sidebar" />

    <!-- Overlay oscuro que aparece cuando el Sidebar está abierto en móvil -->
    <div
        v-if="layoutStore.isMobileMenuOpen"
        @click="layoutStore.closeMobileMenu"
        class="fixed inset-0 bg-black bg-opacity-60 z-40 lg:hidden"
        aria-hidden="true"
    ></div>

    <!-- Contenido Principal de la página -->
    <main class="flex-grow w-full relative z-10 pt-[72px] lg:pt-0">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer class="relative z-10"/>

    <!-- Botón para volver arriba -->
    <button
      v-show="showScrollTopButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-uancv-red text-white p-3 rounded-full shadow-lg hover:bg-uancv-red/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-uancv-red transition-opacity duration-300 z-50"
      aria-label="Volver arriba"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useLayoutStore } from "@/stores/layout";
import Navbar from "@/components/common/navbar.vue";
import Sidebar from "@/components/common/sidebar.vue";
import Footer from "@/components/common/footer.vue";

const layoutStore = useLayoutStore();
const showScrollTopButton = ref(false);

const handleScroll = () => {
  showScrollTopButton.value = window.scrollY > 300;
};

const handleResize = () => {
  if (window.innerWidth >= 1024 && layoutStore.isMobileMenuOpen) {
      layoutStore.closeMobileMenu();
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
  handleScroll();
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});
</script>