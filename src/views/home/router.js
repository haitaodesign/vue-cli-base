export default [
  {
    path: '/home',
    home: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue')
  }
]
