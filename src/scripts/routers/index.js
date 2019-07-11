import Vue from 'vue'
import Router from 'vue-router'

import components from './components'

Vue.use(Router)

const routers = new Router({
  routes: [{
    path: `/`,
    redirect: `/components/home`
  }, {
    path: '/login',
    component: () => import('pages/login'),
    meta: {
      title: '管理员登录'
    }
  }, components ]
})

routers.beforeEach((to, from, next) => {
  const meta = to.meta || {}
  document.title = `${meta.title}-WOOKADMIN` || 'WOOKADMIN'

  next()
})

export default routers
