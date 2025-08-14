<template>
  <div>
    <Carousel />
    <Services />

    <div class="bg-white py-8">
      <div class="max-w-screen-xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-9 gap-0">
          <div class="lg:col-span-6 px-4 sm:px-6 lg:px-0 lg:pr-4">
            <Noticias />
          </div>
          <div class="lg:col-span-3 px-4 sm:px-6 lg:px-0">
            <Comunicados />
          </div>
        </div>
      </div>
    </div>

    <SeccionVideosRecientes />

    <div class="bg-gray-100 py-8 sm:py-12 lg:py-16">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          <div class="flex flex-col space-y-6 lg:space-y-8">
            <div class="bg-white p-6 shadow-md flex-1 flex flex-col relative overflow-hidden rounded-lg">
              <div class="absolute inset-0 bg-cover bg-center opacity-5" :style="{ backgroundImage: `url(${fondoMisionVision})` }"></div>
              <div class="relative z-10 flex flex-col flex-grow">
                <h2 class="text-xl font-bold text-gray-900 mb-3">Nuestra Misión</h2>
                <p class="text-gray-600 leading-relaxed text-sm flex-grow">
                  Garantizar un servicio educativo de calidad en todos los niveles y modalidades, fortaleciendo la gestión escolar, el desempeño docente y la participación comunitaria para formar ciudadanos competentes, críticos y comprometidos con el desarrollo sostenible de Puno.
                </p>
              </div>
            </div>
            <div class="bg-white p-6 shadow-md flex-1 flex flex-col relative overflow-hidden rounded-lg">
              <div class="absolute inset-0 bg-cover bg-center opacity-5" :style="{ backgroundImage: `url(${fondoMisionVision})` }"></div>
              <div class="relative z-10 flex flex-col flex-grow">
                <h2 class="text-xl font-bold text-gray-900 mb-3">Nuestra Visión</h2>
                <p class="text-gray-600 leading-relaxed text-sm flex-grow">
                  Ser una Unidad de Gestión Educativa Local líder en la región, reconocida por su excelencia, innovación y transparencia, que contribuye activamente a la formación integral de personas y al desarrollo social, cultural y económico de la provincia de Puno.
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-white shadow-md flex flex-col  overflow-hidden">
            <div class="p-6">
              <h2 class="text-xl font-bold text-gray-900">Síguenos en Facebook</h2>
              <hr class="border-custom-red/30 my-3">
            </div>
            <div class="px-1 pb-1 pt-0 flex-grow flex justify-center items-start">
              <div class="w-full max-w-[340px] h-[460px]">
                <iframe
                  :src="facebookPageUrl"
                  style="border:none;overflow:hidden;width:100%;height:100%;"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Página de Facebook de UGEL Puno Oficial"
                ></iframe>
              </div>
            </div>
          </div>

          <AsistenciaTecnica />
        </div>
      </div>
    </div>

    <EntidadesAdjuntas />
  </div>
</template>

<script setup>
import Carousel from "@/components/layout/carousel.vue";
import Services from "@/components/common/services.vue";
import Noticias from "@/components/page/noticias/noticias.vue";
import Comunicados from "@/components/page/comunicados/comunicados.vue";
import SeccionVideosRecientes from '@/components/home/SeccionVideosRecientes.vue';
import EntidadesAdjuntas from '@/components/layout/entidadesAdjuntas.vue';
import AsistenciaTecnica from '@/components/layout/AsistenciaTecnica.vue';
import fondoMisionVision from '@/assets/img/fondo.png';

const facebookPageUrl = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fugelpunooficial&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId";
</script>