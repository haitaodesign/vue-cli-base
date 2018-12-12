import RouterModules from './modules'
const commonRoute = [{
  path: '/',
  redirect: '/dashboard',
  hidden: true
}]
export default commonRoute.concat(RouterModules)
