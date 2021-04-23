import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../components/Login/Login.vue')
    },
    {
        path: '/Movies',
        name: 'Movies',
        component: () => import(/* webpackChunkName: "Movies" */ '../components/Movie/Movies.vue')
    },
    {
        path: '/profiles',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "profile" */ '../components/Profile/Profile.vue')
    }
        
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
}) 

export default router;