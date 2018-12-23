import Vue from "vue";
import Router from "vue-router";
import needLogin from "./member";
import visitor from "./visitor";

const routerList = [];

/* 遍历路由 */
function pushRouter(router, requiresAuth = false) {
  for (let key in router) {
    /* 为member文件中路由添加登录标识 */
    if (requiresAuth) {
      router[key].meta
        ? (router[key].meta.requiresAuth = true)
        : (router[key].meta = {
            requiresAuth: trues
          });
    }

    routerList.push(router[key]);
  }
}

pushRouter(needLogin, true);
pushRouter(visitor);

Vue.use(Router);

export default new Router({
  routes: routerList
});
