import { createRouter, createWebHistory } from "vue-router";
import AppAbout from "@/components/AppAbout.vue";
import AppTechStacks from "@/components/AppTechStacks.vue";
import AppProjects from "@/components/AppProjects.vue";

const routes = [
  {
    path: "/about",
    name: "About",
    component: AppAbout,
  },
  {
    path: "/tech",
    name: "Tech",
    component: AppTechStacks,
  },
  {
    path: "/projects",
    name: "Projects",
    component: AppProjects,
  },
];

const router = createRouter({
  history: createWebHistory(), // use a base URL aqui se necessário
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
