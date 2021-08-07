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
    path: '/contentManagementPage',
    name: 'contentManagementPage',
    component: () => import('@/views/contentManagementPage.vue')
  },
  {
    path: '/personalManagementPage',
    name: 'personalManagementPage',
    component: () => import('@/views/personalManagementPage.vue')
  },
  {
    path: '/classification',
    name: 'classification',
    component: () => import('@/views/classification.vue')
  },
  {
    path: '/classification/personalAuthentication',
    name: 'personalAuthentication',
    component: () => import('@/views/personalAuthentication.vue')
  },
  {
    path: '/classification/agencyCertification',
    name: 'agencyCertification',
    component: () => import('@/views/agencyCertification.vue')
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
