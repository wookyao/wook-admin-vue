import Vue from 'vue'
import Router from 'vue-router'

import mod from './mod'

Vue.use(Router)

const routers = new Router({
  routes: [
    {
      path: `/`,
      redirect: `/mod/home`
    },
    mod
  ]
})

export default routers
