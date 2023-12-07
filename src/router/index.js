import { createRouter, createWebHistory } from "vue-router";
import AppAbout from "@/components/AppAbout.vue";
import AppTechStacks from "@/components/AppTechStacks.vue";
import AppProjects from "@/components/AppProjects.vue";
import AppExperiences from "@/components/AppExperiences.vue";

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
  {
    path: "/profile",
    name: "Profile",
    component: AppExperiences,
  },
];

const router = createRouter({
  history: createWebHistory(),
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
