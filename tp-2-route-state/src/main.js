import { createApp } from 'vue'

// importation des principaux packages vue-router/ Si web history ne marche pas: WebHashHistory/ >>>>>
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'

// création du router / History / Route: liste des routes
const router = createRouter({
    history: createWebHistory(),
    route:[]
});

// utilisation de .use(router)
createApp(App)
    .use(router) // importation de plugin
    .mount('#app')
