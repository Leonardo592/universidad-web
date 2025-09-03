<template>
  <div class="min-h-screen bg-uancv-bg">
    <Navbar class="hidden lg:block" />

    <header class="lg:hidden sticky top-0 left-0 w-full bg-white z-40 shadow-sm border-b border-uancv-border">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-[72px]">
          <div class="flex items-center">
            <button
                @click="layoutStore.toggleMobileMenu"
                class="p-2 -ml-2 text-slate-600 hover:bg-uancv-bg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-uancv-red"
                aria-label="Abrir menú principal"
            >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
          
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 class="text-lg font-bold text-uancv-blue-dark capitalize">{{ pageTitle }}</h1>
          </div>

          <div class="flex items-center">
             <button
                class="p-2 -mr-2 text-slate-600 hover:bg-uancv-bg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-uancv-red"
                aria-label="Buscar en el sitio"
            >
               <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            </button>
          </div> 
        </div>
      </div>
    </header>

    <Sidebar />

    <div
        v-if="layoutStore.isMobileMenuOpen"
        @click="layoutStore.closeMobileMenu"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        aria-hidden="true"
    ></div>

    <main class="flex-grow w-full relative z-10">
      <router-view />
    </main>

    <Footer class="relative z-10"/>

    <button
      v-show="showScrollTopButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-uancv-red text-white p-3 shadow-lg hover:bg-uancv-red/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-uancv-bg focus:ring-uancv-red transition-opacity duration-300 z-50"
      aria-label="Volver arriba"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from 'vue-router';
import { useLayoutStore } from "@/stores/layout";
import Navbar from "@/components/common/navbar.vue";
import Sidebar from "@/components/common/sidebar.vue";
import Footer from "@/components/common/footer.vue";

const layoutStore = useLayoutStore();
const route = useRoute();
const showScrollTopButton = ref(false);

const pageTitle = computed(() => {
  return route.name ? route.name.toString().replace(/-/g, ' ') : 'UANCV';
});

const handleScroll = () => { showScrollTopButton.value = window.scrollY > 300; };
const handleResize = () => { if (window.innerWidth >= 1024 && layoutStore.isMobileMenuOpen) { layoutStore.closeMobileMenu(); }};
const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});
</script>