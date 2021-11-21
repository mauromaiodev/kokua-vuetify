import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginTela from "../components/LoginTela.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      subtitulo: "Home",
    },
  },
  {
    path: "/atividade-2",
    name: "Atividade2",
    component: LoginTela,
    meta: {
      subtitulo: "Cadastro",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
