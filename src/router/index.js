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
        path: "programas/administracion",
        name: "administracion",
        // Asegúrate de que este componente exista o créalo
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
  // Esto hace que la página suba al principio cada vez que cambias de ruta
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;