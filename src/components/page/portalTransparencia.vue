<template>
  <div>
    <section class="bg-uancv-blue-dark text-white py-12">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl sm:text-4xl font-bold font-sans">Portal de Transparencia</h1>
        <p class="mt-2 text-lg text-slate-300">Navega y encuentra la documentación oficial de la universidad.</p>
      </div>
    </section>

    <section class="py-16 sm:py-20 bg-uancv-bg">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Breadcrumbs (Migas de Pan) -->
        <nav class="bg-white p-3 shadow-sm mb-8">
          <ol class="flex items-center space-x-2 text-sm">
            <li><button @click="navigateTo(0)" class="font-semibold text-uancv-red hover:underline">Transparencia</button></li>
            <li v-for="(crumb, index) in breadcrumbs" :key="index">
              <span class="text-uancv-text-secondary/50">/</span>
              <button @click="navigateTo(index + 1)" class="ml-2 font-semibold" :class="index === breadcrumbs.length - 1 ? 'text-uancv-blue-dark' : 'text-uancv-red hover:underline'">{{ crumb }}</button>
            </li>
          </ol>
        </nav>

        <!-- Contenido (Carpetas y Archivos) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <!-- Renderizar Carpetas -->
          <div v-for="item in currentItems.folders" :key="item.name" @click="openFolder(item.name)" class="folder-card group">
            <svg class="w-12 h-12 text-uancv-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>
            <h3 class="mt-2 font-bold text-uancv-blue-dark group-hover:text-uancv-red">{{ item.name }}</h3>
          </div>

          <!-- Renderizar Archivos -->
          <a v-for="item in currentItems.files" :key="item.title" :href="item.url" target="_blank" class="file-card group">
            <div class="flex-shrink-0">
              <svg class="w-10 h-10 text-uancv-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
            </div>
            <div class="ml-4">
              <h3 class="font-semibold text-uancv-blue-dark group-hover:text-uancv-red">{{ item.title }}</h3>
              <span class="text-xs text-uancv-text-secondary">PDF</span>
            </div>
          </a>
        </div>
        
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const structure = {
  folders: [
    {
      name: 'Normativa General',
      content: {
        folders: [
          {
            name: 'Reglamentos',
            content: {
              folders: [],
              files: [
                { title: 'Reglamento General v017', url: '#' },
                { title: 'Reglamento de Responsabilidad Social v013', url: '#' },
              ]
            }
          }
        ],
        files: [
          { title: 'Estatuto Universitario', url: '#' },
        ]
      }
    },
    {
      name: 'Gestión Institucional',
      content: {
        folders: [],
        files: [
          { title: 'Plan Estratégico Institucional (PEI)', url: '#' },
          { title: 'Texto Único de Procedimientos (TUPA)', url: '#' },
        ]
      }
    }
  ],
  files: []
};

const currentPath = ref([]);

const breadcrumbs = computed(() => currentPath.value);

const currentItems = computed(() => {
  let currentLevel = structure;
  for (const folderName of currentPath.value) {
    const nextFolder = currentLevel.folders.find(f => f.name === folderName);
    if (nextFolder) {
      currentLevel = nextFolder.content;
    } else {
      return { folders: [], files: [] };
    }
  }
  return currentLevel;
});

const openFolder = (folderName) => {
  currentPath.value.push(folderName);
};

const navigateTo = (index) => {
  currentPath.value = currentPath.value.slice(0, index);
};

</script>

<style scoped>
.folder-card {
  @apply bg-white p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-b-4 border-transparent hover:border-uancv-gold;
}
.file-card {
  @apply flex items-center bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 border-transparent hover:border-uancv-red;
}
</style>