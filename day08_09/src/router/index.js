import Vue from 'vue'
import VueRouter from 'vue-router'
import informantList from '../views/informantList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/informantList',
    name: 'informantList',
    component: informantList
  },
  {
    path: '/labelList',
    name: 'labelList',
    component: () => import('../views/labelList.vue')
  },
  {
    path: "*",
    redirect: {
      name: "informantList"
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: "",
  routes
})

export default router
