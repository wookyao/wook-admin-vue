import Vue from 'vue'
import App from './App.vue'
import router from 'scripts/routers/'
import store from 'scripts/store/'
import request from 'scripts/utils/request'
import WeValidator from 'we-validator'
import { message, notification, Modal } from 'ant-design-vue'

Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
Vue.prototype.$confirm = Modal.confirm

WeValidator.onMessage = function (data) {
  data.msg && message.error(data.msg, 1.5)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
