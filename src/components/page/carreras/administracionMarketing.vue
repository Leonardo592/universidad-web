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
            <div class="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm">
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
        <div class="container mx-auto px-6 max-w-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <!-- Texto -->
            <div>
                <div class="text-center">
                    <h2 class="text-3xl font-bold mb-4 text-blue-900">
                        ¿Por qué estudiar Administración?
                    </h2>
                </div>


                <p class="text-gray-700 mb-4 text-justify">
                    La carrera de Administración te brinda las herramientas necesarias para liderar,
                    tomar decisiones estratégicas y gestionar recursos de forma eficiente en
                    organizaciones de todo tipo. Aprenderás sobre gestión de empresas, marketing,
                    finanzas y recursos humanos, desarrollando una visión integral del mundo empresarial.
                </p>
            </div>

            <!-- Imagen -->
            <div class="flex justify-center">
                <img src="https://usap.edu/2024/wp-content/uploads/2024/02/administrator-business-people-financial-inspector-2023-11-27-05-19-50-utc-2048x1365.jpg" alt="Estudiar Administración"
                    class="rounded-lg shadow-lg object-cover w-full max-w-md" />
            </div>

        </div>
    </section>

    <section class="bg-slate-700 py-16">
        <div class="container mx-auto px-6 text-center">
            <!-- Título -->
            <h2 class="text-3xl font-bold text-uancv-blue-dark bg-uancv-red inline-block px-6 py-2 rounded">
                Competencias específicas
            </h2>

            <!-- Cards -->
            <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">

                <div class="group bg-uancv-red text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-48 
                  transition-all duration-300 hover:bg-yellow-400 hover:text-blue-900 cursor-pointer">
                    <img src="@/assets/servicesImg/boleta.png" alt="Administración"
                        class="w-12 h-12 mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
                    <p class="font-medium">Administración y liderazgo</p>
                </div>

                <div class="group bg-uancv-red text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-48 
                  transition-all duration-300 hover:bg-yellow-400 hover:text-blue-900 cursor-pointer">
                    <img src="@/assets/servicesImg/boleta.png" alt="Gestión del talento"
                        class="w-12 h-12 mb-4 fill-current text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:text-blue-900" />
                    <p class="font-medium">Gestión del talento</p>
                </div>

                <div class="group bg-uancv-red text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-48 
                  transition-all duration-300 hover:bg-yellow-400 hover:text-blue-900 cursor-pointer">
                    <img src="@/assets/servicesImg/boleta.png" alt="Marketing"
                        class="w-12 h-12 mb-4 fill-current text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:text-blue-900" />
                    <p class="font-medium">Marketing</p>
                </div>

                <div class="group bg-uancv-red text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-48 
                  transition-all duration-300 hover:bg-yellow-400 hover:text-blue-900 cursor-pointer">
                    <img src="@/assets/servicesImg/boleta.png" alt="Finanzas"
                        class="w-12 h-12 mb-4 fill-current text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:text-blue-900" />
                    <p class="font-medium">Finanzas</p>
                </div>

                <div class="group bg-uancv-red text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-48 
                  transition-all duration-300 hover:bg-yellow-400 hover:text-blue-900 cursor-pointer">
                    <img src="@/assets/servicesImg/boleta.png" alt="Investigación"
                        class="w-12 h-12 mb-4 fill-current text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:text-blue-900" />
                    <p class="font-medium">Investigación</p>
                </div>

            </div>
        </div>
    </section>

    <section class="bg-white py-16">
        <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            <!-- Imagen con íconos -->
            <div class="relative flex justify-center">
                <div class="bg-gray-100 rounded-lg overflow-hidden p-4 relative">
                    <img src="https://www.autonoma.pe/wp-content/uploads/2023/08/web-2025_505-x-600-adm-y-mkt.png" alt="Profesional" class="rounded-lg" />

                    <!-- Ícono superior -->
                    <div class="absolute -top-4 -left-4 bg-cyan-400 p-3 rounded-lg shadow-lg">
                        <img src="@/assets/icons/handshake.svg" alt="Icono" class="w-6 h-6" />
                    </div>
                    <!-- Ícono inferior -->
                    <div class="absolute -bottom-4 -right-4 bg-green-400 p-3 rounded-lg shadow-lg">
                        <img src="@/assets/icons/key.svg" alt="Icono" class="w-6 h-6" />
                    </div>
                </div>
            </div>

            <!-- Texto -->
            <div>
                <p class="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                    Profesionales con principios
                </p>
                <h2 class="text-2xl font-bold text-uancv-blue-dark bg-uancv-gold inline-block px-4 py-1 mt-2 rounded">
                    Campo laboral
                </h2>

                <ol class="list-decimal list-inside mt-6 space-y-1 text-uancv-blue-dark">
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
                </ol>
            </div>

        </div>
    </section>


</template>


<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { useNoticiasStore } from "@/stores/noticias";
import { useCategoriasNoticiaStore } from "@/stores/categoriasNoticia";
import cardNotice from "@/components/Ui/cardNotice.vue";
import pagination from "@/components/common/pagination.vue";

const store = useNoticiasStore();
const storeCategorias = useCategoriasNoticiaStore();
const route = useRoute();
const router = useRouter();

const currentYear = new Date().getFullYear();
const filtroCategoriaId = ref(route.query.categoria_id ? parseInt(route.query.categoria_id) : null);
const filtroAnio = ref(route.query.anio ? parseInt(route.query.anio) : currentYear);
const ordenSeleccionado = ref(route.query.orden || "reciente");

const cargarNoticias = (query) => {
    store.fetchNoticias({
        page: query.page || 1,
        per_page: 12,
        categoria_id: query.categoria_id || undefined,
        anio: query.anio == currentYear ? undefined : query.anio,
        orden: query.orden || 'reciente',
    });
};

onMounted(() => {
    storeCategorias.fetchItems();
});

watch(() => route.query, (newQuery) => {
    filtroCategoriaId.value = newQuery.categoria_id ? parseInt(newQuery.categoria_id) : null;
    filtroAnio.value = newQuery.anio ? parseInt(newQuery.anio) : currentYear;
    ordenSeleccionado.value = newQuery.orden || "reciente";
    cargarNoticias(newQuery);
}, { immediate: true });

const aplicarFiltros = () => {
    const query = {};
    if (filtroCategoriaId.value) query.categoria_id = filtroCategoriaId.value;
    if (filtroAnio.value !== currentYear) query.anio = filtroAnio.value;
    if (ordenSeleccionado.value !== 'reciente') query.orden = ordenSeleccionado.value;

    router.push({ name: 'noticias', query });
};

const cambiarPagina = (newPage) => {
    router.push({ name: 'noticias', query: { ...route.query, page: newPage } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const verNoticia = (noticia) => {
    router.push({ name: 'noticiaCompleta', params: { id: noticia.id } });
};
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
    @apply w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-uancv-red;
}
</style>