export default [
    // {
    //     path: "/createRoom",
    //     name: "createRoom",
    //     component: () => import("./createRoom.vue"),
    // },
    {
        path: "/personal",
        name: "personal",
        component: () => import("./personal.vue"),
    },
    {
        path: "/discussion",
        name: "discussion",
        component: () => import("./discussion.vue"),
    },
    {
        path: "/upMic",
        name: "upMic",
        component: () => import("./upMic.vue"),
    },
]