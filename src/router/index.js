import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)

const router = new VueRouter({
  // 默认为 hash
  mode: 'history',
  routes
})

export default router
