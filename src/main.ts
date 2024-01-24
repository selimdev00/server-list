import { createApp } from "vue";
import App from "@/App.vue";

import { createRouter, createWebHistory } from "vue-router";

import "@/assets/styles/main.scss";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/HomePage.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/pages/AboutPage.vue"),
    },
  ],
});

app.use(router);

app.mount("#app");
