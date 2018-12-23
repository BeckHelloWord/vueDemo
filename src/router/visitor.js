export default [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    component: reslove => require(["../views/index/index"], reslove)
  },
  {
    path: "/login",
    component: reslove => require(["../views/login/login"], reslove)
  }
];
