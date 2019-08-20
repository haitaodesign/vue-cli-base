export default [
  {
    path: '/other',
    name: 'other',
    component: () => import(/* webpackChunkName: "other" */ '@/views/other/index.vue')
  }
]
