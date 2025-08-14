<template>
    <button
      :type="type"
      :class="computedClasses"
      :disabled="disabled"
      @click="handleClick"
    >
      <slot />
    </button>
  </template>
  
  <script setup>
  import { computed } from "vue";
  
  const props = defineProps({
    type: { type: String, default: "button" },
    variant: { type: String, default: "default" }, // "default", "primary", "secondary"
    disabled: { type: Boolean, default: false },
  });
  
  const emit = defineEmits(["click"]);
  
  const baseClasses = "py-2.5 px-5 me-2 mb-2 text-sm font-medium rounded-lg focus:outline-none focus:z-10 focus:ring-4 transition-all";
  
  // Definiendo variantes
  const variantClasses = {
    default: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    primary: "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800",
    secondary: "text-white bg-gray-600 hover:bg-gray-700 focus:ring-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800",
  };
  
  // Computed property para aplicar clases según la variante
  const computedClasses = computed(() => `${baseClasses} ${variantClasses[props.variant]}`);
  
  const handleClick = () => {
    if (!props.disabled) {
      emit("click");
    }
  };
  </script>
  