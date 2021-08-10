import Vue from 'vue'
import VueRouter from 'vue-router'

import CreateRouter from "@/views/createRoom/route.js"

Vue.use(VueRouter)

const routes = [
    {
        path: "",
        redirect: '/hall'
    },
    {
        path: "/hall",
        name: 'hall',
        component: () => import("@/views/main/hall.vue"),
    },
    {
        path: "/mine",
        name: 'mine',
        component: () => import("@/views/main/mine.vue")
    },
    ...CreateRouter,
    {
        path: "*",
        redirect: {
            name: "hall"
        }
    }
]

const router = new VueRouter({
    routes,
    mode: "hash",
    bash: ""
})

export default router
