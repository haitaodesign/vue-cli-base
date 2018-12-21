import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/index.js'
import 'normalize.css'
import '@/plugins/element.js'
import '@/plugins/v-charts.js'
import '@/mock/index.js'
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
