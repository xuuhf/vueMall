import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        name: 'home',
        path: '/home',
        component: () => import('../pages/home/index.vue'),
    },
    {
        name: 'personal',
        path: '/personal',
        component: () => import('../pages/personal/index.vue'),
    }
]

const router = new Router({
    routes
})

router.afterEach((to, from, next) => {
    document.title = to.name;
})
export default router
