import { createRouter, createWebHistory } from "vue-router";
import DashboardLayout from "@/components/layout/dashboardLayout.vue";
import Inicio from "@/components/home/inicio.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "inicio",
        component: Inicio,
      },
      {
        path: "noticias",
        name: "noticias",
        component: () => import("@/components/page/noticias/noticiasPadre.vue"),
      },
      {
        path: "noticias/:id",
        name: "noticiaCompleta",
        component: () => import("@/components/page/noticias/noticiaCompleta.vue"),
      },
      {
        path: "comunicados",
        name: "comunicados",
        component: () => import("@/components/page/comunicados/comunicadosPadre.vue"),
      },
      {
        path: "comunicados/:id",
        name: "comunicadoCompleto",
        component: () => import("@/components/page/comunicados/comunicadoCompleto.vue"),
      },
      {
        path: "videos",
        name: "videos",
        component: () => import("@/components/page/videos.vue"),
      },
      {
        path: "servicios",
        name: "servicios",
        component: () => import("@/components/common/services.vue"),
      },
      {
        path: "gestion-institucional",
        name: "gestion-institucional",
        component: () => import("@/components/page/gestionInstitucional.vue"),
      },
      {
        path: "gestion-pedagogica",
        name: "gestion-pedagogica",
        component: () => import("@/components/page/GestionPedagogica.vue"),
      },
      {
        path: "gestion-administrativa",
        name: "gestion-administrativa",
        component: () => import("@/components/page/GestionAdministrativa.vue"),
      },
      {
        path: "asesoria-legal",
        name: "asesoria-legal",
        component: () => import("@/components/page/asesoriaLegal.vue"),
      },
      {
        path: "control-interno",
        name: "control-interno",
        component: () => import("@/components/page/controlInterno.vue"),
      },
      {
        path: "directorio",
        name: "directorio",
        component: () => import("@/components/page/directorio.vue"),
      },
      {
        path: "contacto",
        name: "contacto",
        component: () => import("@/components/page/contacto.vue"),
      },
      {
        path: "portalTransparencia",
        name: "portalTransparencia",
        component: () => import("@/components/page/portalTransparencia.vue"),
      },

      {
        path: "administracion-marketing",
        name: "administracion-marketing",
        component: () => import("@/components/page/carreras/administracionMarketing.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/components/common/notFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;