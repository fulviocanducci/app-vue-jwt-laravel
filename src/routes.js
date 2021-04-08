import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Exit from "./components/Exit";

Vue.use(VueRouter);

const routes = [
  { name: "home", path: "/", component: Home },
  { name: "login", path: "/login", component: Login },
  { name: "about", path: "/about", component: About },
  { name: "exit", path: "/exit", component: Exit },
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  const isAuthenticated = window.localStorage.getItem("@token");
  if (to.name !== "login" && !isAuthenticated) {
    next({ name: "login" });
  } else {
    next();
  }
});

export { router };
