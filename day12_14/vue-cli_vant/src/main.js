import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './mock/index'

// 引入 Vant UI 
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);  //全局注册使用

// 淘宝适配 meta
import "lib-flexible"

// 全局的样式
import "@/styles/index.scss"

import "@/utils/global"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
