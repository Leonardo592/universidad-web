<template>
    <Teleport to="body">
      <div v-if="modelValue" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-sm max-w-2xl w-full p-5">
          <div class="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-3">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ title }}</h3>
            <button @click="$emit('update:modelValue', false)" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              ✖
            </button>
          </div>
          <div class="py-4">
            <slot />
          </div>
        </div>
      </div>
    </Teleport>
  </template>
  
  <script setup>
  defineProps({
    modelValue: Boolean,
    title: { type: String, default: "Modal Title" }
  });
  defineEmits(["update:modelValue"]);
  </script>
  