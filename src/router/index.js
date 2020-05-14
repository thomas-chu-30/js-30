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
    component: () => import(/* webpackChunkName: "about" */ "../views/Day1.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
