<template>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th v-for="(header, index) in headers" :key="index" class="px-6 py-3">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" class="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
            <td v-for="(value, key) in item" :key="key" class="px-6 py-4">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  defineProps({
    headers: Array,
    items: Array
  });
  </script>
  