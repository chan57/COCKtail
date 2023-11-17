import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'
import Latter from '../views/Latter.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/letter/:letter",
    name: "Bylatter",
    component: Latter,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
