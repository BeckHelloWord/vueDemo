
const login = () => import(/* webpackChunkName: 'login' */'@/views/login/login');  //懒加载
const index = () => import(/* webpackChunkName: 'index' */'@/views/index/index');  //懒加载
export default [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    // component: reslove => require(["../views/index/index"], reslove)
    component:index
  },
  {
    path: "/login",
    // component: reslove => require(["../views/login/login"], reslove),
    component: login
  }
];
