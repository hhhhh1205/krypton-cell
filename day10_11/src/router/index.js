import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main.vue')
  },
  {
    path: '*',
    redirect: {
      name: "main"
    }
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: "",
  routes
})

export default router
