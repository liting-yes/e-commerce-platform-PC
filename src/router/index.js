import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('../views/Layout.vue')
const HomePage = () => import('../views/home/HomePage.vue')

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                component: HomePage
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router