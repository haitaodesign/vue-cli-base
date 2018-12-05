import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router.js'
import store from '@/store/index.js'
import '@/plugins/element.js'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
