<template>
  <div @click="emitSelectVideo" class="group flex h-full cursor-pointer flex-col overflow-hidden bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
    
    <div class="relative aspect-video bg-gray-200">
      <img v-if="video && video.id_video_youtube" :src="`https://img.youtube.com/vi/${video.id_video_youtube}/hqdefault.jpg`" :alt="video.titulo" class="h-full w-full object-cover" loading="lazy" />
      <div v-else class="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>
      </div>
      <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 opacity-0 transition-all duration-300 group-hover:bg-opacity-40 group-hover:opacity-100">
        <svg class="h-12 w-12 transform text-white transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 18V6L18 12L7 18Z" /></svg>
      </div>
    </div>

    <div class="flex flex-grow flex-col p-3">
      <h3 v-if="video && video.titulo" class="text-sm font-semibold text-gray-800 line-clamp-2 transition-colors group-hover:text-custom-red" :title="video.titulo">
        {{ video.titulo }}
      </h3>
      <h3 v-else class="text-sm font-semibold text-gray-500 line-clamp-2">
        Video sin título
      </h3>

      <p v-if="video && video.descripcion" class="mt-1 flex-grow text-xs text-gray-600 line-clamp-3" :title="video.descripcion">
        {{ video.descripcion }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  video: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['select-video']);

const emitSelectVideo = () => {
  if (props.video && props.video.id) {
    emit('select-video', props.video);
  }
};
</script>

<style scoped>
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>