import { createRouter, createWebHistory } from "vue-router";
import DashboardLayout from "@/components/layout/dashboardLayout.vue";
import Inicio from "@/components/home/inicio.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    children: [
      { path: "", name: "inicio", component: Inicio },
      { path: "nosotros", name: "nosotros", component: () => import("@/components/page/nosotros.vue") },
      { path: "transparencia", name: "transparencia", component: () => import("@/components/page/portalTransparencia.vue") },
      { path: "programas/administracion", name: "administracion", component: () => import("@/components/page/carreras/administracionMarketing.vue") },
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
      // { path: "admision", name: "admision", component: () => import("@/components/page/admision.vue") },
    
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
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router; 