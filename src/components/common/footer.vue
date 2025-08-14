<template>
  <footer class="bg-uancv-blue-dark text-white">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Columna 1: Logo y Contacto -->
        <div class="space-y-4">
          <router-link to="/" class="inline-block">
            <img class="h-14 w-auto" src="https://economia.uancv.edu.pe/web/escuela/logos_uancv/logo_uancv.png" alt="Logo UANCV">
          </router-link>
          <p class="text-sm text-slate-300 leading-relaxed">
            Comprometidos con la excelencia académica y el desarrollo profesional de la región sur del Perú.
          </p>
          <div class="flex space-x-4">
            <a href="#" aria-label="Facebook" class="text-slate-300 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" class="text-slate-300 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.791 4.649-.69.188-1.432.23-2.164.084.616 1.923 2.394 3.315 4.491 3.354-1.786 1.394-4.049 2.162-6.522 1.835 2.318 1.491 5.077 2.353 8.046 2.353 8.4 0 12.997-7.311 12.6-13.36 1.007-.723 1.875-1.624 2.572-2.673z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" class="text-slate-300 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>

        <!-- Columna 2: Navegación -->
        <div class="md:justify-self-center">
          <h3 class="text-sm font-bold tracking-wider uppercase text-white">Navegación</h3>
          <ul class="mt-4 space-y-3">
            <li><router-link to="/programas" class="text-sm text-slate-300 hover:text-white transition-colors">Programas Académicos</router-link></li>
            <li><router-link to="/admision" class="text-sm text-slate-300 hover:text-white transition-colors">Admisión</router-link></li>
            <li><router-link to="/licenciamiento" class="text-sm text-slate-300 hover:text-white transition-colors">Proceso de Licenciamiento</router-link></li>
            <li><router-link to="/noticias" class="text-sm text-slate-300 hover:text-white transition-colors">Noticias y Eventos</router-link></li>
            <li><router-link to="/contacto" class="text-sm text-slate-300 hover:text-white transition-colors">Contacto</router-link></li>
          </ul>
        </div>

        <!-- Columna 3: Enlaces Institucionales -->
        <div class="md:justify-self-center">
          <h3 class="text-sm font-bold tracking-wider uppercase text-white">Institucional</h3>
          <ul class="mt-4 space-y-3">
            <li><a href="#" class="text-sm text-slate-300 hover:text-white transition-colors">Portal de Transparencia</a></li>
            <li><a href="#" class="text-sm text-slate-300 hover:text-white transition-colors">Convenios</a></li>
            <li><a href="#" class="text-sm text-slate-300 hover:text-white transition-colors">Directorio Institucional</a></li>
            <li><a href="#" class="text-sm text-slate-300 hover:text-white transition-colors">Repositorio Institucional</a></li>
            <li><a href="#" class="text-sm text-slate-300 hover:text-white transition-colors">Libro de Reclamaciones</a></li>
          </ul>
        </div>
        
        <!-- Columna 4: Boletín -->
        <div>
          <h3 class="text-sm font-bold tracking-wider uppercase text-white">Boletín Informativo</h3>
          <p class="mt-4 text-sm text-slate-300">
            Suscríbete para recibir las últimas noticias y eventos de nuestra comunidad.
          </p>
          <form class="mt-4 flex flex-col sm:flex-row gap-2">
            <label for="email-address" class="sr-only">Correo electrónico</label>
            <input type="email" name="email-address" id="email-address" autocomplete="email" required placeholder="tu.correo@email.com" class="w-full px-4 py-2 border-0 rounded-md bg-white/10 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-uancv-red">
            <button type="submit" class="bg-uancv-red hover:bg-uancv-red/90 text-white font-bold px-4 py-2 rounded-md transition-colors">
              Suscribirse
            </button>
          </form>
        </div>

      </div>

      <!-- Sub-Footer -->
      <div class="mt-12 pt-8 border-t border-white/10 text-center">
        <p class="text-xs text-slate-400">
          &copy; {{ new Date().getFullYear() }} Universidad Andina Néstor Cáceres Velásquez. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No se necesita lógica de script para este componente de footer estático.
</script>