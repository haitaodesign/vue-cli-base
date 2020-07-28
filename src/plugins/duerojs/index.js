
import Vue from 'vue'

import { loaderComponents, loaderUtils } from '@duerojs'

export default function () {
  loaderComponents(Vue)
  // 将工具方法注册到 Vue 实例原型上
  Vue.prototype.$utils = loaderUtils()
}
