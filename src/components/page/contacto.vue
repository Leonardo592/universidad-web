<template>
  <section class="py-12 md:py-16 bg-gray-50">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-10 md:mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Contáctanos</h1>
        <p class="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Encuéntranos o envíanos un mensaje.
        </p>
         <div class="mt-4 inline-block w-20 h-1 bg-custom-red rounded"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">

        
        <div class="bg-white p-6 sm:p-8 rounded-lg shadow-lg order-2 lg:order-1">
          <h2 class="text-2xl font-semibold text-gray-800 mb-5">Información de Contacto</h2>
          <div class="space-y-5 text-gray-700">
            <div class="flex items-start">
              <BuildingOffice2Icon class="w-6 h-6 mr-3 mt-0.5 text-custom-red flex-shrink-0" aria-hidden="true" />
              <div>
                  <p class="font-semibold">UNIDAD DE GESTIÓN EDUCATIVA LOCAL DE PUNO</p>
                  <p class="text-sm text-gray-500">(UNIDAD EJECUTORA 311)</p>
              </div>
            </div>
            <div class="flex items-start">
               <MapPinIcon class="w-6 h-6 mr-3 mt-0.5 text-custom-red flex-shrink-0" aria-hidden="true" />
              <div>
                  <p>Jirón Joaquín Inclán, Puno 21002</p>
                  <a :href="googleMapsUrlCode" target="_blank" rel="noopener noreferrer" class="text-sm text-indigo-600 hover:underline">
                     Código Plus: <strong>4XWQ+5XJ</strong> (Ver Mapa)
                  </a>
              </div>
            </div>
            <div class="flex items-start">
               <PhoneIcon class="w-6 h-6 mr-3 mt-0.5 text-custom-red flex-shrink-0" aria-hidden="true" />
              <a href="tel:051368114" class="hover:underline">Teléfono: 051-368114</a>
            </div>
             <div class="flex items-start">
               <ClockIcon class="w-6 h-6 mr-3 mt-0.5 text-custom-red flex-shrink-0" aria-hidden="true" />
               <p>Horario: Lunes a Viernes - 8:00 AM a 5:00 PM</p>
             </div>
          </div>

          <form @submit.prevent="enviarMensaje" class="mt-8 pt-6 border-t border-gray-200 space-y-4">
             <h3 class="text-xl font-semibold text-gray-800">Envíanos un mensaje</h3>
             <div>
                 <label for="contact-nombre" class="sr-only">Nombre</label>
                 <input type="text" id="contact-nombre" v-model="contactForm.nombre" placeholder="Tu Nombre" required :class="formInputContacto">
             </div>
              <div>
                 <label for="contact-email" class="sr-only">Email</label>
                 <input type="email" id="contact-email" v-model="contactForm.email" placeholder="Tu Email" required :class="formInputContacto">
             </div>
              <div>
                 <label for="contact-mensaje" class="sr-only">Mensaje</label>
                 <textarea id="contact-mensaje" v-model="contactForm.mensaje" rows="4" placeholder="Tu Mensaje" required :class="formTextareaContacto"></textarea>
             </div>
              <button type="submit" :disabled="enviandoForm" class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-custom-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-red disabled:opacity-50">
                <span v-if="enviandoForm">Enviando...</span>
                <span v-else>Enviar Mensaje</span>
              </button>
              <p v-if="mensajeFormEnviado" class="text-sm text-green-600 text-center">{{ mensajeFormEnviado }}</p>
              <p v-if="errorForm" class="text-sm text-red-600 text-center">{{ errorForm }}</p>
          </form>
        </div>

 
        <div class="rounded-lg shadow-lg overflow-hidden order-1 lg:order-2">
          <iframe
            :src="googleMapsEmbedUrl"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Ubicación UGEL Puno"
            class="min-h-[300px] md:min-h-[450px]"
          ></iframe>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
// ✨ Importa los iconos de Heroicons que necesitas ✨
import { BuildingOffice2Icon, MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/vue/24/outline'; // O usa /20/solid, /24/solid, etc.

// URLs Google Maps (verifica que sean correctas)
const googleMapsUrlCode = "https://www.google.com/maps/place/UGEL+Puno/@-15.8545625,-70.0226875,17z/data=!4m10!1m2!2m1!1s4XWQ+5XJ!3m6!1s0x915d6a3601a0c8cd:0x5c752e2f60a8c9a0!8m2!3d-15.8545886!4d-70.022586!15sCgg0WFdRKzVYSiIDiAEBkgEQZWR1Y2F0aW9uX2NlbnRlcuABAA!16s%2Fg%2F11gbz8z1g0?entry=ttu";
const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.842030204165!2d-70.0251609851421!3d-15.854588589125785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915d6a3601a0c8cd%3A0x5c752e2f60a8c9a0!2sUGEL%20Puno!5e0!3m2!1ses-419!2spe!4v1678886655555!5m2!1ses-419!2spe"; // Reemplaza con tu URL de embed

// Estado Formulario Contacto
const contactForm = ref({ nombre: '', email: '', mensaje: '' });
const enviandoForm = ref(false);
const mensajeFormEnviado = ref('');
const errorForm = ref('');

// Función Envío (Simulada - Requiere Backend)
const enviarMensaje = async () => {
  enviandoForm.value = true;
  mensajeFormEnviado.value = '';
  errorForm.value = '';
  try {
    // Lógica de envío a backend aquí (axios.post...)
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulación
    mensajeFormEnviado.value = '¡Mensaje enviado con éxito!';
    contactForm.value = { nombre: '', email: '', mensaje: '' };
  } catch (error) {
    errorForm.value = 'No se pudo enviar el mensaje.';
  } finally {
    enviandoForm.value = false;
  }
};

// Clases de Estilos Formulario
const formInputContacto = 'block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom-red focus:border-custom-red sm:text-sm';
const formTextareaContacto = formInputContacto + ' resize-vertical';

</script>

<style scoped>
/* Estilos específicos si son necesarios */
.prose p { text-align: justify !important; margin-bottom: 1em; } /* Si usaras v-html */
</style>