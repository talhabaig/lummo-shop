import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";

import defaultLayout from "../layouts/default.vue";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: defaultLayout,
      children: [
        {
          path: "/",
          component: Home,
        },
        {
          path: "/main",
          component: Main,
        },
      ],
    },
  ],
});
