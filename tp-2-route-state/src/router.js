import {createRouter, createWebHistory} from 'vue-router'
import Index from "./pages/index.vue"
import Login from  "./pages/login.vue"


const routes = {
        path: '/',
        component: Index
    },{
        path:'/login',
        component:Login
    }];

// default: ce qui importe par défaut
export default createRouter({
    history:createWebHistory(),
    routes
})