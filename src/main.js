import Vue from 'vue'
import App from './App.vue'
import router from 'scripts/routers/'
import store from 'scripts/store/'
import request from 'scripts/utils/request'

Vue.config.productionTip = false
Vue.prototype.$request = request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
