import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/index.js'
import 'normalize.css'
import _ from '@/plugins/lodash/index.js'
import util from '@/utils/index.js'
Vue.prototype._ = _
Vue.prototype.util = util
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
