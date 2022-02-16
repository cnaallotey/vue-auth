import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', name:"Home", component:Home
        },
        {
            path: '/dashboard', name:"Dashboard", component:Dashboard
        },
        {
            path: '/login', name:"Login", component:Login
        },
        {
            path: '/register', name:"Signup", component:Signup
        },
    ]
})

createApp(App).use(router).mount('#app')
