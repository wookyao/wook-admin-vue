import Vue from 'vue'
import Router from 'vue-router'
import mod from './mod'

Vue.use(Router)

const routers = new Router({
  routes: [
    {
      path: `/`,
      redirect: `/login`
    },
    mod,
    {
      path: '/login',
      component: () => import('pages/login'),
      meta: {
        title: '管理员登录'
      }
    }
  ]
})

routers.beforeEach((to, from, next) => {
  const meta = to.meta || {}
  document.title = meta.title || 'wook-admin'

  next()
})

export default routers
