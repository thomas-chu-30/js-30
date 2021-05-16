import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Day1",
    name: "Day1",
    component: () => import("../views/Day1.vue"),
  },
  {
    path: "/Day2",
    name: "Day2",
    component: () => import("../views/Day2.vue"),
  },
  {
    path: "/Day3",
    name: "Day3",
    component: () => import("../views/Day3.vue"),
  },
  {
    path: "/Day4",
    name: "Day4",
    component: () => import("../views/Day4.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
