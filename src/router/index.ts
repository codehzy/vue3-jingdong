import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import Home from "../components/Home.vue";
// import Login from "../components/login/index.vue";
// import Register from "../components/register/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: import(/* webpackChunkName: "home" */ "../components/Home.vue"),
  },
  {
    path: "/shop/:id",
    name: "Shop",
    component: import(
      /* webpackChunkName: "about" */ "../components/shop/index.vue"
    ),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "login" */ "../components/shop/index.vue"),
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.isLogin;
      isLogin ? next({ name: "Home" }) : next();
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../components/login/index.vue"),
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.isLogin;
      isLogin ? next({ name: "Home" }) : next();
    },
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // 验证Login,否则访问首页也自动跳转Login
  const isLogin: boolean = localStorage.isLogin;
  const { name } = to;
  const isLoginOrRegister = name === "Login" || name === "Register";
  isLogin || isLoginOrRegister ? next() : next({ name: "Login" });
});

export default router;
