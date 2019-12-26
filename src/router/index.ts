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
      path: "/page/403",
      name: "403",
      component: () => import("@/views/Page403.vue")        
    },
    {
      path: "/admin",
      redirect: "/admin/home",
      name: "DefaultContainer",
      component: () => import("@/containers/DefaultContainer.vue"),
      children: [
        /* Rotas Usuário */
        {
          path: "home",
          name: "Home",
          component: () => import("@/components/Home.vue"),
          beforeEnter: (to, from, next) => {
            const { settings: data } = JSON.parse(localStorage.vuex || "{}");
            const { loginUser: user } = data;
            if (user.auth === true && user.token) {
              next();
            } else {
              next({ path: '/page/403' });
            }
          }
        },
        {
          path: "usuarios",
          name: "Usuarios",
          component: () => import("@/components/ListUsers.vue"),
          beforeEnter: (to, from, next) => {
            const { settings: data } = JSON.parse(localStorage.vuex || "{}");
            const { loginUser: user } = data;
            if (user.auth === true && user.token) {
              next();
            } else {
              next("/page/403");
            }
          }
        },
        {
          path: "usuario/cadastro",
          name: "Usuario",
          component: () => import("@/components/InsertUser.vue"),
          beforeEnter: (to, from, next) => {
            const { settings: data } = JSON.parse(localStorage.vuex || "{}");
            const { loginUser: user } = data;
            if (user.auth === true && user.token) {
              next();
            } else {
              next("/page/403");
            }
          }
        },
        {
          path: "usuario/editar/:id",
          name: "EditarUsuario",
          component: () => import("@/components/InsertUser.vue"),
          beforeEnter: (to, from, next) => {
            const { settings: data } = JSON.parse(localStorage.vuex || "{}");
            const { loginUser: user } = data;
            if (user.auth === true && user.token) {
              next();
            } else {
              next("/page/403");
            }
          }
        },
      ]
    }
  ]
});
