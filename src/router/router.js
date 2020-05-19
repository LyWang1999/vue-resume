export default [
  {
    path: '/',
    alias: '/profile',
    name: 'profile',
    component: () => import('@/views/profile')
  },
  {
    // 匹配所有匹配不到的静态资源
    path: '*',
    component: () => import('@/views/404.vue')
  }
]
