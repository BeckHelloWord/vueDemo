import Vue from "vue";
import App from "./App";
import router from "./router";
import "@/assets/icons/iconfont.css";
import "normalize.css";

Vue.config.productionTip = false;

// const loginToken = localStorage.getItem("token");

/* 全局路由导航 */
/* router.beforeEach((to, from, next) => {
  if (
    to.matched.some(res => {
      return res.meta.requiresAuth;
    })
  ) {
    if (loginToken) {
      next();
    } else {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
}); */

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
