import { createRouter, createWebHistory } from "vue-router";
import Landing from "@/pages/Landing.vue";

const routes = [
  {
    path: "/",
    component: Landing,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
