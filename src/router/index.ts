import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("@/components/Login.vue")
    },
    {
      path: "/admin",
      component: () => import("@/containers/DefaultContainer.vue"),
      children: [
        /* Rotas Usuário */
        // {
        //   path: "usuario/cadastro",
        //   name: "Cadastro de Usuário",
        //   component: () => import("@/views/Admin/Usuario/CadUsuario")
        // },
        // {
        //   path: "usuarios",
        //   name: "Usuários",
        //   component: () => import("@/views/Admin/Usuario/ViewUsuario")
        // }
      ]
    }
  ]
});
