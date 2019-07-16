import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login";
import Intro from "@/views/Intro/Intro";
import Cookies from "js-cookie";
// import store from '@/store';
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "",
          name: "系统介绍",
          component: Intro,
          meta: {
            icon: "fa fa-home fa-lg",
            index: 0
          }
        }
      ]
    },
    {
      path: "/login",
      name: "登录",
      component: Login
    },
    {
      path: "/intro",
      name: "intro",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/Intro/Intro.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  let token = Cookies.get("token");
  let userName = sessionStorage.getItem("user");
  if (to.path === "/login") {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    if (token) {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    if (!token) {
      // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
      next({ path: "/login" });
      console.log("you need login first");
    } else {
      // 加载动态菜单和路由
      // addDynamicMenuAndRoutes(userName, to, from);
      // eslint-disable-next-line no-console
      console.log(userName, to, from);
      next();
    }
  }
});
export default router;
