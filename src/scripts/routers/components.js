export default {
  path: '/components',
  redirect: '/components/home',
  component: () => import('pages/admin/index.vue'),
  children: [{
    path: 'home',
    component: () => import('views/components/home.vue'),
    meta: {
      title: '工作台',
      role: [0]
    }
  }]
}
