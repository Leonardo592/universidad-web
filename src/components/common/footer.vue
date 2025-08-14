<template>
  <footer class="bg-gray-800 text-gray-300">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Columna 1: Logo e Información Principal -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <img class="h-12 w-auto" src="@/assets/img/logo2025.png" alt="Logo UGEL Puno">
            <div>
              <p class="font-bold text-white text-lg leading-tight">UGEL PUNO</p>
              <p class="text-xs text-gray-400">Unidad Ejecutora 311</p>
            </div>
          </div>
          <p class="text-sm">
            Jr. Cesar Augusto Sandino N° 225, Urb. Chanu Chanu – Puno
          </p>
          <p class="text-sm">
            Teléfono: (051) 368114
          </p>
        </div>

        <!-- Columna 2: Enlaces de Navegación -->
        <div class="md:col-start-2 lg:col-start-auto">
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Navegación</h3>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/noticias" class="hover:text-white transition-colors">Noticias</router-link></li>
            <li><router-link to="/comunicados" class="hover:text-white transition-colors">Comunicados</router-link></li>
            <li><router-link to="/directorio" class="hover:text-white transition-colors">Directorio</router-link></li>
            <li><router-link to="/portalTransparencia" class="hover:text-white transition-colors">Transparencia</router-link></li>
          </ul>
        </div>

        <!-- Columna 3: Enlaces de Interés -->
        <div >
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Enlaces de Interés</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white transition-colors">MINEDU</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Plataforma PerúEduca</a></li>
            <li><a href="#" class="hover:text-white transition-colors">SIAGIE</a></li>
          </ul>
        </div>
        
        <!-- Columna 4: Libro de Reclamaciones -->
        <div>
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Atención al Ciudadano</h3>
          <a href="#" class="inline-block bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors w-full">
            <div class="flex items-center space-x-3">
              <img class="h-10 w-10 flex-shrink-0" src="@/assets/img/libro-con-marcapaginas.png" alt="Libro de Reclamaciones">
              <div>
                <p class="font-semibold text-white">Libro de Reclamaciones</p>
                <p class="text-xs text-gray-400">Reglamento D.S. N° 007-2020-PCM</p>
              </div>
            </div>
          </a>
        </div>

      </div>

      <div class="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
        <p class="text-sm text-gray-400 text-center sm:text-left">
          &copy; {{ new Date().getFullYear() }} UGEL Puno. Todos los derechos reservados.
        </p>
        <div class="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://www.facebook.com/UgelPunoOficial/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
          </a>
          <a href="https://www.youtube.com/@UGELPUNO" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM9.999 15.199l4.987-3.2-4.987-3.2v6.4z" clip-rule="evenodd" /></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No necesita lógica de JS, todo es estático o usa router-link
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>