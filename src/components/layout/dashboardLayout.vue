<template>
  <div class="min-h-screen flex flex-col bg-gray-50 font-sans">

    <div
      class="fixed top-0 left-0 w-full bg-white z-30 transition-opacity duration-300"
      :class="{ 'opacity-0 pointer-events-none': isScrolledDown && !layoutStore.isMobileMenuOpen }"
      aria-label="Cabecera principal del sitio"
    >
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-[60px] sm:h-[72px]">
          <div class="flex items-center h-full">
            <button
                v-if="!isLargeScreen"
                @click="layoutStore.toggleMobileMenu"
                class="p-2 -ml-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-custom-red lg:hidden self-center"
                aria-label="Abrir menú principal"
                aria-controls="mobile-sidebar"
                :aria-expanded="layoutStore.isMobileMenuOpen.toString()"
            >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <a href="/"
   class="flex items-center space-x-2 sm:space-x-3 ps-1 pe-2 py-1 rounded-md transition-colors duration-150 ease-in-out group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-red"
   aria-label="Ir a la página de inicio de UGEL Puno">

    <img src="@/assets/img/redesSociales/Logo_Ugel.svg"
         alt="Logo UGEL Puno"
         class="h-9 sm:h-10 w-auto flex-shrink-0"
         aria-hidden="true" />

    <div class="flex-shrink-0">
        <h1 class="text-xl sm:text-2xl font-bold text-custom-red group-hover:text-custom-red-darker transition-colors">
            UGEL PUNO
        </h1>
    </div>
</a>
          </div>
          <div class="hidden lg:flex items-center h-full">
              <div class="flex items-center space-x-3 sm:space-x-4 pr-3 sm:pr-4">
                <a href="https://www.youtube.com/channel/UCbQGKVIib_DrRi-N0BQVFrg?view_as=subscriber" target="_blank" rel="noopener noreferrer" aria-label="Suscríbete en YouTube" data-tooltip="YouTube" class="social-link-header">
                  <img src="@/assets/img/redesSociales/youtube.png" alt="" class="social-icon-img-header" />
                </a>
                <a href="https://www.facebook.com/ugelpunooficial/" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Facebook" data-tooltip="Facebook" class="social-link-header">
                  <img src="@/assets/img/redesSociales/facebook.png" alt="" class="social-icon-img-header" />
                </a>
                <a href="https://twitter.com/UgelPuno" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Twitter" data-tooltip="Twitter" class="social-link-header">
                  <img src="@/assets/img/redesSociales/twiter.png" alt="" class="social-icon-img-header" />
                </a>
                <a href="https://soundcloud.com/ugel-puno" target="_blank" rel="noopener noreferrer" aria-label="Escúchanos en SoundCloud" data-tooltip="SoundCloud" class="social-link-header">
                    <img src="@/assets/img/redesSociales/soundcloud.png" alt="" class="social-icon-img-header" />
                </a>
                <a href="https://www.flickr.com/photos/144045150@N06/" target="_blank" rel="noopener noreferrer" aria-label="Mira nuestras fotos en Flickr" data-tooltip="Flickr" class="social-link-header">
                    <img src="@/assets/img/redesSociales/flickr.png" alt="" class="social-icon-img-header" />
                </a>
              </div>
              <div class="bg-custom-red text-white px-4 h-full flex items-center">
                  <span class="text-xs font-semibold uppercase tracking-wider whitespace-nowrap">Unidad Ejecutora 311</span>
              </div>
          </div>
        </div>
      </div>
    </div>

    <header
      class="fixed left-0 w-full z-20 transition-transform duration-300 bg-gray-50/90 backdrop-blur-sm "
      :class="{ 'top-0': isScrolledDown, 'top-[60px] sm:top-[72px]': !isScrolledDown }"
    >
      <Navbar />
    </header>

    <Sidebar id="mobile-sidebar" />

    <div
        v-if="layoutStore.isMobileMenuOpen"
        @click="layoutStore.closeMobileMenu"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        aria-hidden="true" role="button" aria-label="Cerrar menú"
    ></div>

    <div :class="spacerHeightClass"></div>

    <main class="flex-grow w-full relative z-10">
      <router-view />
    </main>

    <Footer class="relative z-10"/>

    <button
      v-if="!isLargeScreen"
      @click="isSocialBarOpen = !isSocialBarOpen"
      class="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-gray-700/80 backdrop-blur-sm text-white p-2 rounded-l-md shadow-lg transition-transform duration-300 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center"
      :class="{ 'translate-x-0': !isSocialBarOpen, 'translate-x-[-56px]': isSocialBarOpen }"
      aria-label="Mostrar redes sociales"
      aria-controls="floating-social-bar"
      :aria-expanded="isSocialBarOpen"
     >
       <img src="@/assets/img/redesSociales/redes-sociales.png" alt="" class="w-5 h-5" aria-hidden="true" />
    </button>

    <div
      id="floating-social-bar"
      v-if="!isLargeScreen"
      class="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 w-14 bg-gray-700/80 backdrop-blur-sm rounded-l-md shadow-lg p-1 transition-transform duration-300 ease-in-out"
      :class="{ 'translate-x-0': isSocialBarOpen, 'translate-x-full': !isSocialBarOpen }"
    >
        <ul class="flex flex-col items-center space-y-1">
          <li> <a href="https://www.youtube.com/channel/UCbQGKVIib_DrRi-N0BQVFrg?view_as=subscriber" target="_blank" rel="noopener noreferrer" aria-label="Suscríbete en YouTube" data-tooltip="YouTube" class="social-link-floating"> <img src="@/assets/img/redesSociales/youtube.png" alt="" class="social-icon-img-floating" /> </a> </li>
           <li> <a href="https://www.facebook.com/ugelpunooficial/" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Facebook" data-tooltip="Facebook" class="social-link-floating"> <img src="@/assets/img/redesSociales/facebook.png" alt="" class="social-icon-img-floating" /> </a> </li>
           <li> <a href="https://twitter.com/UgelPuno" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Twitter" data-tooltip="Twitter" class="social-link-floating"> <img src="@/assets/img/redesSociales/twiter.png" alt="" class="social-icon-img-floating" /> </a> </li>
           <li> <a href="https://soundcloud.com/ugel-puno" target="_blank" rel="noopener noreferrer" aria-label="Escúchanos en SoundCloud" data-tooltip="SoundCloud" class="social-link-floating"> <img src="@/assets/img/redesSociales/soundcloud.png" alt="" class="social-icon-img-floating" /> </a> </li>
           <li> <a href="https://www.flickr.com/photos/144045150@N06/" target="_blank" rel="noopener noreferrer" aria-label="Mira nuestras fotos en Flickr" data-tooltip="Flickr" class="social-link-floating"> <img src="@/assets/img/redesSociales/flickr.png" alt="" class="social-icon-img-floating" /> </a> </li>
        </ul>
    </div>

    <button
      v-show="showScrollTopButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-custom-red-darker text-white p-3 rounded-full shadow-lg hover:bg-custom-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-custom-red-darker focus:ring-white transition-all duration-300 ease-in-out z-50"
      aria-label="Volver arriba"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useLayoutStore } from "@/stores/layout";
import Navbar from "@/components/common/navbar.vue";
import Sidebar from "@/components/common/sidebar.vue";
import Footer from "@/components/common/footer.vue";

const layoutStore = useLayoutStore();
const isScrolledDown = ref(false);
const windowWidth = ref(window.innerWidth);
const isSocialBarOpen = ref(false);
const showScrollTopButton = ref(false);

const isLargeScreen = computed(() => windowWidth.value >= 1024);

const handleScroll = () => {
  isScrolledDown.value = window.scrollY > 5;
  showScrollTopButton.value = window.scrollY > 200;
};

const handleResize = () => {
  windowWidth.value = window.innerWidth;
  if (isLargeScreen.value && layoutStore.isMobileMenuOpen) {
      layoutStore.closeMobileMenu();
  }
  if (isLargeScreen.value && isSocialBarOpen.value) {
      isSocialBarOpen.value = false;
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const spacerHeightClass = computed(() => {
  const topBarHeightMobile = 60;
  const topBarHeightDesktop = 72;
  const navBarHeight = 60;
  let paddingTopValue = 0;

  if (isLargeScreen.value) {
    paddingTopValue = isScrolledDown.value ? navBarHeight : topBarHeightDesktop + navBarHeight;
  } else {
    paddingTopValue = isScrolledDown.value ? 0 : topBarHeightMobile;
  }

  if (paddingTopValue === 60) return 'pt-[60px]';
  if (paddingTopValue === 72) return 'pt-[72px]';
  if (paddingTopValue === 132) return 'pt-[132px]';
  return 'pt-[0px]';
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
  handleResize();
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
  if (layoutStore.isMobileMenuOpen) {
    layoutStore.closeMobileMenu();
  }
});
</script>

<style scoped>
.font-sans {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.pt-\[60px\] { padding-top: 60px; }
.pt-\[72px\] { padding-top: 72px; }
.pt-\[132px\] { padding-top: 132px; }
.pt-\[0px\] { padding-top: 0px; }

#mobile-sidebar { }

.social-link-header {
  @apply relative block p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-sm;
}
.social-icon-img-header {
  @apply block w-5 h-5 sm:w-6 sm:h-6 object-contain transition-opacity duration-200 hover:opacity-80;
}
.social-link-header::after {
  content: attr(data-tooltip);
  position: absolute; top: 100%; left: 50%;
  transform: translateX(-50%) translateY(4px);
  background-color: rgba(31, 41, 55, 0.9); color: white;
  padding: 4px 8px; border-radius: 4px; font-size: 12px;
  white-space: nowrap; opacity: 0; visibility: hidden;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  z-index: 10; pointer-events: none;
}
.social-link-header:hover::after { opacity: 1; visibility: visible; }

.social-link-floating {
   @apply relative block p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-white;
}
.social-icon-img-floating {
   @apply block w-6 h-6 object-contain transition-opacity duration-200 hover:opacity-80;
}
.social-link-floating::after {
  content: attr(data-tooltip);
  position: absolute; top: 50%; right: 100%;
  transform: translateY(-50%) translateX(-8px);
  background-color: rgba(31, 41, 55, 0.9); color: white;
  padding: 4px 8px; border-radius: 4px; font-size: 12px;
  white-space: nowrap; opacity: 0; visibility: hidden;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  z-index: 10; pointer-events: none;
}
.social-link-floating:hover::after { opacity: 1; visibility: visible; }

.bg-custom-red {
  background-color: #9C3620;
}
/* No necesitas definir bg-custom-red-darker aquí si ya está en tu tailwind.config.js y Tailwind lo procesa */
/* Lo mismo para focus:ring-custom-red y focus:ring-custom-red-darker */
.focus\:ring-custom-red:focus {
  --tw-ring-color: #9C3620;
}
</style>