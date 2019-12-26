import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("@/views/Login.vue")
    },
    {
      path: "/admin",
      redirect: "/admin/home",
      component: () => import("@/containers/DefaultContainer.vue"),
      children: [
        /* Rotas Usuário */
        {
          path: "home",
          name: "Home",
          component: () => import("@/components/Home.vue")
        },
        {
          path: "usuarios",
          name: "Usuarios",
          component: () => import("@/components/ListUsers.vue"),
          beforeEnter: (to, from, next) => {
            const {settings: data} = JSON.parse(localStorage.vuex || "{}");
            const {loginUser: user} = data;
            if (user.auth === true && user.token) {
              next()
            } else {
              next(false)
            }
          }
        },
        {
          path: "usuario/cadastro",
          name: "Usuario",
          component: () => import("@/components/InsertUser.vue"),
          beforeEnter: (to, from, next) => {
            const {settings: data} = JSON.parse(localStorage.vuex || "{}");
            const {loginUser: user} = data;
            if (user.auth === true && user.token) {
              next()
            } else {
              next(false)
            }
          }
        },
        {
          path: "usuario/editar/:id",
          name: "Usuario",
          component: () => import("@/components/InsertUser.vue")
        }
      ]
    }
  ]
});
