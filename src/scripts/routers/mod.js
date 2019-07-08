export default {
  path: '/mod',
  redirect: '/mod/home',
  component: () =>
    import('./RouterView.vue'),
  children: [{
    path: 'home',
    component: () =>
      import('@/pages/Home.vue')
  }]
}
