import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/styles/index.scss' // global css
import './icons' // icon

import Cookies from 'js-cookie'

import Element from 'element-ui'
import './styles/element-variables.scss'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
