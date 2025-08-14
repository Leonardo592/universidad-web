import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
  const isMobileMenuOpen = ref(false);

  function openMobileMenu() {
    isMobileMenuOpen.value = true;
    document.body.style.overflow = 'hidden';
  }
  function closeMobileMenu() {
    isMobileMenuOpen.value = false;
    document.body.style.overflow = '';
  }
  function toggleMobileMenu() {
    isMobileMenuOpen.value ? closeMobileMenu() : openMobileMenu();
  }
  return { isMobileMenuOpen, openMobileMenu, closeMobileMenu, toggleMobileMenu };
});