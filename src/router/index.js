import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('../views/Layout.vue')
const HomePage = () => import('../views/home/HomePage.vue')
const TopCategory = () => import('../views/category/TopCategory.vue')
const SubCategory = () => import('../views/category/SubCategory.vue')

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                component: HomePage
            },
            {
                path: '/category/:id',
                component: TopCategory
            },
            {
                path: '/category/sub/:id',
                component: SubCategory
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router