import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'HomeView',
            component: () => import('@/views/Home.vue'),
        },
        {
            path: '/demo',
            name: 'DemoView',
            component: () => import('@/views/demo.vue'),
        },
    ],
    history: createWebHistory(),
})

export default router
