import HomeRouters from './home'
import LoginRouters from './login'
import { loaderRouters } from '@duerojs'
const bizRouters = loaderRouters()
const commonRoute = [{
  path: '/',
  name: 'root',
  redirect: '/home',
  component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/index.vue'),
  children: [...HomeRouters, ...bizRouters]
}]
// TODO: 模块多到一定的规模，可以通过按需构建达到加快开发环境体验的目的
export default commonRoute.concat(LoginRouters)
