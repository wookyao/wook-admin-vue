/**
 * 状态管理
 */
import Vue from 'vue'
import Vuex from 'vuex'

// 引入模块
import doctor from './modules/doctor'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    doctor
  }
})
