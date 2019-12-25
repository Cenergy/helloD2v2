import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// import Home from "../pages/Home/Home.vue";

const router = new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("pages/Home/Home"),
      meta: {
        keepAlive: true,
        title: "首页"
      }
    },
    {
      path: "/hello",
      component: () => import("components/hello/hello")
    },
    {
      path: "/world",
      component: import("components/world/world")
    },
    {
      path: "/about",
      component: () => import("pages/About/About")
    },
    {
      path: "/map",
      component: () => import("pages/map/Map")
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
