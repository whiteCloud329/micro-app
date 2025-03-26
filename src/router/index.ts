import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { createRouter, createWebHistory } from 'vue-router'
import microLayout from '@/layout/index.vue'
import { getCookie } from '@/libs/cokkies'
import { useUserStore } from '@/store/user.ts'
import mock from '@/router/mock.ts'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: microLayout,
            children: [
                {
                    path: 'sub-vue/:microPath*', // 使用参数捕获所有子路径
                    name: 'microAppVueView',
                    component: () =>
                        import('@/views/micro-app/micro-app-vue.vue'),
                },
            ],
        },
        {
            path: '/login',
            name: 'loginView',
            component: () => import('@/views/login/index.vue'),
        },
    ],
    history: createWebHistory(),
})
router.beforeEach((to, _from, next) => {
    nProgress.start()
    // 公共页面，任何时候都可以跳转
    if (to.path === '/404') {
        next()
        return
    }
    // 验证登录
    const token = getCookie(import.meta.env.VITE_APP_TOKEN_NAME)
    if (!token) {
        useUserStore().logout()
        if (to.path === '/login') {
            next()
        } else {
            next({ path: '/login' })
        }
        return
    }
    // 登录页，则跳转到首页
    if (to.path === '/login') {
        next({ path: '/' })
        return
    }

    // 首页（ 需要登录 ，但不需要验证权限）
    if (to.path === '/') {
        useUserStore().setUserLoginInfo(mock.data)
        next()
        return
    }
    next()
})
router.afterEach(() => {
    nProgress.done()
})
export default router
