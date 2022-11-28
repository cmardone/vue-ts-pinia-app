import { createRouter, createWebHistory } from "vue-router";

import CounterValuePage from "@/counter/pages/CounterOptionsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "counter-value",
      component: CounterValuePage,
    },
  ],
});

export default router;
