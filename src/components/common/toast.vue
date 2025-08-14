<template>
    <div class="fixed top-5 right-5 space-y-3">
      <div v-if="toast.visible" 
           :class="toastClass" 
           class="flex items-center w-full max-w-xs p-4 rounded-lg shadow-sm">
        <div :class="iconClass" class="inline-flex items-center justify-center w-8 h-8 rounded-lg">
          <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path :d="iconPath" />
          </svg>
        </div>
        <div class="ms-3 text-sm font-normal">{{ toast.message }}</div>
        <button @click="toast.visible = false" 
                class="ms-auto p-1.5 text-gray-400 hover:text-gray-900 rounded-lg">
          <svg class="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>
    </div>
  
    <!-- Botones para probar -->
    <div class="mt-10 flex gap-2">
      <button @click="showToast('success', '¡Éxito! Acción completada.')" class="px-4 py-2 bg-green-500 text-white rounded-lg">Éxito</button>
      <button @click="showToast('error', '¡Error! Algo salió mal.')" class="px-4 py-2 bg-red-500 text-white rounded-lg">Error</button>
      <button @click="showToast('warning', 'Advertencia: Verifica tu información.')" class="px-4 py-2 bg-yellow-500 text-white rounded-lg">Advertencia</button>
    </div>
  </template>
  
  <script>
  import { ref, computed } from "vue";
  
  export default {
    setup() {
      const toast = ref({
        visible: false,
        type: "",
        message: "",
      });
  
      const showToast = (type, message) => {
        toast.value = { visible: true, type, message };
        setTimeout(() => (toast.value.visible = false), 3000); // Ocultar en 3s
      };
  
      const toastClass = computed(() => {
        switch (toast.value.type) {
          case "success": return "bg-green-100 text-green-700";
          case "error": return "bg-red-100 text-red-700";
          case "warning": return "bg-yellow-100 text-yellow-700";
          default: return "bg-gray-100 text-gray-700";
        }
      });
  
      const iconClass = computed(() => {
        switch (toast.value.type) {
          case "success": return "bg-green-500 text-white";
          case "error": return "bg-red-500 text-white";
          case "warning": return "bg-yellow-500 text-white";
          default: return "bg-gray-500 text-white";
        }
      });
  
      const iconPath = computed(() => {
        switch (toast.value.type) {
          case "success":
            return "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z";
          case "error":
            return "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z";
          case "warning":
            return "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z";
          default:
            return "";
        }
      });
  
      return { toast, showToast, toastClass, iconClass, iconPath };
    },
  };
  </script>
  