<template>
    <section class="relative w-full h-screen flex items-center justify-center">
        <!-- Imagen de fondo -->
        <img src="https://d19i1lccnoz5a9.cloudfront.net/img/article/como-se-relacionan-la-administracion-y-la-mercadotecnia.webp"
            alt="Carrera de Administración" class="absolute inset-0 w-full h-full object-cover" />

        <!-- Capa oscura -->
        <div class="absolute inset-0 bg-blue-900/40"></div>

        <!-- Contenido principal -->
        <div class="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-10">
            <!-- Texto descriptivo -->
            <div class="text-white lg:w-1/2 text-center lg:text-left">
                <h1 class="text-5xl font-bold mb-4">Administración y Marketing</h1>
                <p class="text-lg mb-2">Construimos tu mejor versión</p>
            </div>

            <!-- Formulario -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 w-full max-w-sm">
                <h2 class="text-xl font-bold mb-4 text-gray-800">Recibe asesoría</h2>
                <form class="space-y-1">
                    <div>
                        <label class="block text-sm font-medium">Nombre *</label>
                        <input type="text" class="input" required />
                    </div>
                    <div>
                        <label class="block text-sm font-medium">Apellidos</label>
                        <input type="text" class="input" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium">Número de DNI</label>
                        <input type="text" class="input" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium">Correo Electrónico *</label>
                        <input type="email" class="input" required />
                    </div>
                    <div>
                        <label class="block text-sm font-medium">Número de Celular</label>
                        <input type="tel" class="input" />
                    </div>
                    <div class="flex items-center">
                        <input type="checkbox" class="mr-2" />
                        <span class="text-sm text-gray-600">Acepto el consentimiento</span>
                    </div>
                    <button type="submit"
                        class="w-full bg-uancv-red hover:bg-uancv-gold text-white py-2 rounded font-bold">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    </section>


    <!-- Sección informativa -->
    <section class="py-16 bg-gray-50">
        <div class="text-center">
            <h2 class="text-3xl font-bold text-uancv-blue-dark inline-block relative">
                <span class="block h-1 w-20 bg-uancv-red mb-2"></span>
                ¿Por qué estudiar Administración?
            </h2>
        </div>




        <div class="container mx-auto px-6 max-w-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <!-- Texto -->
            <div>


                <div class="max-w-3xl mx-auto py-8">
                    <div v-for="(item, i) in items" :key="i" class="border border-uancv-red rounded-lg mb-3">
                        <button @click="toggleAccordion(i)" class="w-full flex items-center gap-4 p-4 text-left">
                            <span class="text-3xl font-bold text-uancv-red">{{ i + 1 }}</span>
                            <span class="flex-1 font-bold">{{ item.title }}</span>
                            <span id="icon-1" class="text-slate-800 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                    class="w-4 h-4">
                                    <path
                                        d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                </svg>
                            </span>
                        </button>
                        <div ref="contents" class="max-h-0 overflow-hidden transition-all duration-500 ease-in-out"
                            :style="{ maxHeight: openIndex === i ? contentHeights[i] + 'px' : '0px' }">
                            <div class="px-12 pb-4 text-gray-700 text-sm">
                                {{ item.text }}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Imagen -->
            <div class="flex justify-center">
                <img src="https://usap.edu/2024/wp-content/uploads/2024/02/administrator-business-people-financial-inspector-2023-11-27-05-19-50-utc-2048x1365.jpg"
                    alt="Estudiar Administración" class="w-full h-full object-cover shadow-2xl" />
            </div>

        </div>
    </section>

    <section class="bg-uancv-red py-16">
        <div class="container mx-auto px-6 text-center">
            <!-- Título -->
            <h2 class="text-3xl font-bold text-white bg-uancv-red inline-block px-6 py-2 rounded">
                Competencias específicas
            </h2>

            <!-- Cards -->
            <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 
                    justify-items-center max-w-[900px] mx-auto">

                <div class="group bg-gray-50 text-gray-700 p-5 rounded-lg shadow-lg flex flex-col items-center w-36
              transition-all duration-300 hover:bg-amber-300 hover:text-blue-900 cursor-pointer">
                    <img src="@/assets/servicesImg/boleta.png" alt="Administración" class="w-10 h-10 mb-4 transform transition-transform duration-300 
                           group-hover:scale-110 group-hover:-translate-y-1" />
                    <p class="font-medium text-sm">Administración y liderazgo</p>
                </div>

                <div class="group bg-gray-50 text-gray-700 p-5 rounded-lg shadow-lg flex flex-col items-center w-36
              transition-all duration-300 hover:bg-amber-300 hover:text-blue-900 cursor-pointer">
                    <img src="@/assets/servicesImg/boleta.png" alt="Gestión del talento" class="w-10 h-10 mb-4 transform transition-transform duration-300 
                           group-hover:scale-110 group-hover:-translate-y-1" />
                    <p class="font-medium text-sm">Gestión del talento</p>
                </div>

                <div class="group bg-gray-50 text-gray-700 p-5 rounded-lg shadow-lg flex flex-col items-center w-36
              transition-all duration-300 hover:bg-amber-300 hover:text-blue-900 cursor-pointer">
                    <img src="@/assets/servicesImg/boleta.png" alt="Marketing" class="w-10 h-10 mb-4 transform transition-transform duration-300 
                           group-hover:scale-110 group-hover:-translate-y-1" />
                    <p class="font-medium text-sm">Marketing</p>
                </div>

                <div class="group bg-gray-50 text-gray-700 p-5 rounded-lg shadow-lg flex flex-col items-center w-36
              transition-all duration-300 hover:bg-amber-300 hover:text-blue-900 cursor-pointer">
                    <img src="@/assets/servicesImg/boleta.png" alt="Finanzas" class="w-10 h-10 mb-4 transform transition-transform duration-300 
                           group-hover:scale-110 group-hover:-translate-y-1" />
                    <p class="font-medium text-sm">Finanzas</p>
                </div>

                <div class="group bg-gray-50 text-gray-700 p-5 rounded-lg shadow-lg flex flex-col items-center w-36
              transition-all duration-300 hover:bg-amber-300 hover:text-blue-900 cursor-pointer">
                    <img src="@/assets/servicesImg/boleta.png" alt="Investigación" class="w-10 h-10 mb-4 transform transition-transform duration-300 
                           group-hover:scale-110 group-hover:-translate-y-1" />
                    <p class="font-medium text-sm">Investigación</p>
                </div>

            </div>
        </div>
    </section>


    <section class="bg-white py-16">
        <div class="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl">

            <!-- Imagen -->
            <div class="flex justify-center">
                <img src="https://img.freepik.com/foto-gratis/crecimiento-mi-empresa-es-impresionante_329181-11409.jpg?semt=ais_hybrid&w=360&q=40"
                    alt="Profesional" class="w-full h-full object-cover shadow-2xl rounded-lg" />
            </div>

            <!-- Texto -->
            <div>
                <!-- Título -->
                <div class="mb-6">
                    <div class="h-1 w-20 bg-uancv-red mb-2"></div>
                    <h2 class="text-3xl font-bold text-uancv-blue-dark">Campo laboral</h2>
                </div>

                <!-- Caja con contenido -->
                <div class="bg-uancv-bg p-8 shadow-lg rounded-lg relative">
                    <div class="absolute top-0 right-0 w-1.5 h-full bg-uancv-red rounded-r-lg"></div>

                    <h3 class="text-xl font-bold text-uancv-blue-dark mb-4">Podrás trabajar en:</h3>

                    <ul class="text-uancv-text-secondary list-disc list-inside space-y-2">
                        <li>Empresas de producción y servicios.</li>
                        <li>Organizaciones de asesoría y consultoría.</li>
                        <li>Centros de investigación de mercado.</li>
                        <li>Departamentos de recursos humanos.</li>
                        <li>Áreas de control y calidad.</li>
                        <li>Asesoría de desarrollo de talento.</li>
                        <li>Estudios de consultoría financiera.</li>
                        <li>Instituciones educativas.</li>
                        <li>Hospitales.</li>
                        <li>Organizaciones nacionales e internacionales.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>


    <section class="bg-uancv-red text-white py-16">
        <div class="max-w-6xl mx-auto px-8">
            <div>
                <div class="w-24 border-t-4 border-white"></div>
                <h2 class="text-3xl font-bold mt-4 mb-12 text-white">
                    Malla curricular de Administración y Marketing
                </h2>
            </div>

            <!-- Carrusel -->
            <Swiper :modules="[Navigation]" :slides-per-view="4" :slides-per-group="1" :space-between="20" navigation
                :loop="false" class="pb-10" :breakpoints="{
                    320: { slidesPerView: 1, slidesPerGroup: 1 },
                    768: { slidesPerView: 2, slidesPerGroup: 1 },
                    1024: { slidesPerView: 4, slidesPerGroup: 1 }
                }">
                <SwiperSlide v-for="(ciclo, index) in malla" :key="index"
                    class="bg-white text-black rounded-lg overflow-hidden shadow-lg">
                    <div class="bg-uancv-blue-dark text-white flex items-center px-4 py-2">
                        <span class="text-2xl font-bold mr-2">{{ ciclo.numero }}</span>
                        <span class="uppercase font-semibold">ciclo</span>
                    </div>

                    <ul>
                        <li v-for="(curso, i) in ciclo.cursos" :key="i" class="px-4 py-2 border-b border-gray-200">
                            {{ curso }}
                        </li>
                    </ul>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>


</template>


<script setup>
import { ref, onMounted, watch, nextTick } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const items = ref([
    {
        title: 'Formación integral en gestión empresarial',
        text: 'Aprende a planificar, organizar y dirigir estrategias para el éxito de cualquier tipo de organización.'
    },
    {
        title: 'Enfoque en liderazgo y toma de decisiones',
        text: 'Desarrolla habilidades para liderar equipos, gestionar recursos y resolver problemas de manera efectiva.'
    },
    {
        title: 'Conocimiento en finanzas, marketing y recursos humanos',
        text: 'Domina las áreas clave para el funcionamiento y crecimiento de una empresa.'
    },
    {
        title: 'Oportunidades laborales en múltiples sectores',
        text: 'Accede a un amplio campo de trabajo en empresas privadas, organismos públicos o emprendimientos propios.'
    }
])

const openIndex = ref(null)
const contentHeights = ref([])
const contents = ref([])

const toggleAccordion = async (index) => {
    if (openIndex.value === index) {
        openIndex.value = null
    } else {
        openIndex.value = index
        await nextTick()
        contentHeights.value[index] = contents.value[index].scrollHeight
    }
}

onMounted(() => {
    contents.value = contents.value.slice()
})

const malla = ref([
    { numero: 1, cursos: ["Matemática I", "Física I", "Introducción a la Aeronáutica"] },
    { numero: 2, cursos: ["Matemática II", "Física II", "Aerodinámica I"] },
    { numero: 3, cursos: ["Mecánica de Fluidos", "Termodinámica", "Estructuras I"] },
    { numero: 4, cursos: ["Electrónica", "Materiales", "Propulsión"] },
    { numero: 5, cursos: ["Control de Vuelo", "Sistemas Aeronáuticos", "Aerodinámica II"] },
    { numero: 6, cursos: ["Diseño Aeronáutico", "Simulación de Vuelo", "Taller Avanzado"] },
    { numero: 7, cursos: ["Gestión Aeronáutica", "Mantenimiento", "Seguridad Aérea"] },
    { numero: 8, cursos: ["Proyecto Final", "Práctica Profesional", "Examen de Grado"] }
]);


</script>

<style scoped>
.lg\:sticky {
    position: sticky;
}

.lg\:top-24 {
    top: 6rem;
}

.lg\:self-start {
    align-self: flex-start;
}

.input {
    @apply w-full pl-4 pr-10 py-2 border border-uancv-border text-sm text-uancv-blue-dark placeholder:text-uancv-text-secondary/80 focus:outline-none focus:ring-2 focus:ring-uancv-red/50 focus:border-uancv-red transition;
}

.accordion-enter-active,
.accordion-leave-active {
    transition: max-height 0.4s ease;
}

.accordion-enter-from,
.accordion-leave-to {
    max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
    max-height: 500px;
    /* suficiente para mostrar el contenido */
}

.swiper-button-prev,
.swiper-button-next {
    background-color: rgba(0, 0, 0, 0.7);
    /* Fondo oscuro */
    color: white;
    /* Color de la flecha */
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

/* Cambiar tamaño de la flecha interna */
.swiper-button-prev::after,
.swiper-button-next::after {
    font-size: 18px;
    font-weight: bold;
}

/* Botón desactivado (cuando no hay más slides) */
.swiper-button-disabled {
    opacity: 0.3;
    cursor: not-allowed;
}
</style>