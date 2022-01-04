import {createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Etudier from '../views/Etudier.vue'
import Vivre from '../views/Vivre.vue'
import Contacter from '../views/Contacter.vue'
import Plan from '../views/Plan.vue'
import Formations from '../views/Formations.vue'
import Bibliothèques from '../views/Bibliotheques.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/etudier',
        name:'Etudier',
        component:Etudier
    }
    ,
    {
        path:'/formations',
        name:'Formations',
        component:Formations
    }
    ,
    {
        path:'/plan',
        name:'PLan',
        component:Plan
    },
    {
        path:'/vivre',
        name:'Vivre',
        component:Vivre
    },
    {
        path:'/contacter',
        name:'Contacter',
        component:Contacter
    },
    {
        path:'/bibliotheques',
        name:'Bibliothèques',
        component:Bibliothèques
    },
    
]

const router =  createRouter({
    history:createWebHistory(process.env.PUBLIC_URL),
    routes
})

export default router