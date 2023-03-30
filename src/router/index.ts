import {createRouter,createWebHashHistory} from "vue-router"
import Index from '../pages/index.vue'
import Left from '../pages/left.vue'
const routes =[
    { path: "/", redirect: "/index" },
    {
        path:'/index',
        name:'Index',
        component:Index
    },
    {
        path:'/left',
        name:'Left',
        component:Left
    },
];

export const router=createRouter({
    history:createWebHashHistory(),
    routes:routes
})