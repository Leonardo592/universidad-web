<template>
    <input
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder"
      class="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2 bg-transparent text-gray-900 dark:text-white dark:border-gray-600 dark:focus:border-blue-400"
    />
  </template>
  
  <script setup>
  defineProps({
    modelValue: String,
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "Escribe aquí..." }
  });
  defineEmits(["update:modelValue"]);
  </script>
  