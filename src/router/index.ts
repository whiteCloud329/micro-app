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
        // {
        //     path: '/vue', // 关键点：需要同时配置有/无斜杠的路径
        //     children: [
        //         {
        //             path: '', // 处理 /vue 根路径
        //             redirect: '/vue/', // 强制重定向到带斜杠路径
        //         },
        //         {
        //             path: '/vue:microPath*', // 使用参数捕获所有子路径
        //             name: 'microAppVueView',
        //             component: () =>
        //                 import('@/views/micro-app/micro-app-vue.vue'),
        //         },
        //     ],
        // },
        {
            path: '/vue:microPath*', // 使用参数捕获所有子路径
            name: 'microAppVueView',
            component: () => import('@/views/micro-app/micro-app-vue.vue'),
        },
    ],
    history: createWebHistory(),
})

export default router
