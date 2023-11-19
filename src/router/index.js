import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'

import Search from '../views/Search.vue'
import ByIndex from '../views/ByIndex.vue'
import ByIngredient from '../views/ByIngredient.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/search/:searchh?",
    name: "Search",
    component: Search,
  },
  {
    path: "/byIndex/:indexx?",
    name: "ByIndex",
    component: ByIndex,
  },
  {
    path: "/byIngredient/:ingredient?",
    name: "ByIngredient",
    component: ByIngredient,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
