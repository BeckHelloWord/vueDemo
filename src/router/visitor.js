
const login = () => import(/* webpackChunkName: 'login' */'@/views/login/login');  //懒加载
const index = () => import(/* webpackChunkName: 'index' */'@/views/index/index');  //懒加载
export default [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    name:index,
    component:index
  },
  {
    path: "/login",
    name:login,
    component: login
  }
];
