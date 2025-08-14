import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import apiClient, { STORAGE_URL } from '@/api/index';

export const useCarouselStore = defineStore('carousel', () => {
  const slides = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const currentIndex = ref(0);
  const intervalId = ref(null);

  const currentSlide = computed(() => {
    return slides.value.length > 0 ? slides.value[currentIndex.value] : null;
  });

  async function fetchSlides() {
    if (isLoading.value || slides.value.length > 0) return;

    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get('/carousels');
      
      const slidesData = response.data.data.map(slide => {
        return {
          ...slide,
          imagen_url: slide.imagen_url && !slide.imagen_url.startsWith('http')
            ? `${STORAGE_URL}${slide.imagen_url}`
            : slide.imagen_url
        };
      });

      slides.value = slidesData;
      
    } catch (err) {
      error.value = "No se pudo cargar la información del carrusel.";
      slides.value = [];
    } finally {
      isLoading.value = false;
    }
  }

  function nextSlide() {
    if (slides.value.length > 0) {
      currentIndex.value = (currentIndex.value + 1) % slides.value.length;
    }
  }

  function prevSlide() {
    if (slides.value.length > 0) {
      currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
    }
  }

  function goToSlide(index) {
    if (index >= 0 && index < slides.value.length) {
      currentIndex.value = index;
    }
  }

  function startAutoSlide(intervalTime = 7000) {
    stopAutoSlide();
    if (slides.value.length > 1) {
      intervalId.value = setInterval(nextSlide, intervalTime);
    }
  }

  function stopAutoSlide() {
    if (intervalId.value) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    }
  }

  return {
    slides,
    isLoading,
    error,
    currentIndex,
    currentSlide,
    fetchSlides,
    nextSlide,
    prevSlide,
    goToSlide,
    startAutoSlide,
    stopAutoSlide,
  };
});