import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '../theme/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

import './mock/mock'
import './mock/proData'

import '@/style/common.css'

import "@/style/move.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
