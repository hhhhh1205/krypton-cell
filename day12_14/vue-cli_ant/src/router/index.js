import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('@/views/homePage.vue')
  },
  {
    path: '/workManagement',
    name: 'workManagement',
    component: () => import('@/views/workManagement.vue'),
    props: true,
  },
  {
    path: '/videoData',
    name: 'videoData',
    component: () => import('@/views/videoData.vue')
  },
  {
    path: '*',
    redirect: {
      name: "homePage"
    }
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: "",
  routes
})

export default router
