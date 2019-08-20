import HomeRouters from './home'
import LoginRouters from './login'
const commonRoute = [{
  path: '/',
  name: 'root',
  redirect: '/home',
  component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/index.vue'),
  children: HomeRouters
}]
// TODO: 模块多到一定的规模，可以通过按需构建达到加快开发环境体验的目的
export default commonRoute.concat(LoginRouters)
