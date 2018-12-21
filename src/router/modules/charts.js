export default [
  {
    path: '/charts/moorline',
    name: '折线图',
    component: () => import(/* webpackChunkName: "moorline" */ '@/views/charts/moor-line.vue')
  }
]
