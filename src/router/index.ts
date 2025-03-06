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
        {
            path: '/sub-vue:microPath*', // 使用参数捕获所有子路径
            name: 'microAppVueView',
            component: () => import('@/views/micro-app/micro-app-vue.vue'),
        },
    ],
    history: createWebHistory(),
})

export default router
