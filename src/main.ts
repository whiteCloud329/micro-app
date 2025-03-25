import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import '@unocss/reset/normalize.css'
import '@/styles/index.scss'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import microApp from '@micro-zoe/micro-app'
import 'virtual:uno.css'
import '@unocss/reset/normalize.css'

microApp.start({
    'router-mode': 'pure', // 所有子应用都设置为pure模式
    'disable-memory-router': true, // 关闭虚拟路由
    'keep-router-state': true, // 保留路由状态,
    'plugins': {
        modules: {
            'sub-vue': [
                {
                    loader(code) {
                        // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
                        console.log(code, 'code')
                        code = code.replace(
                            /(from|import)(\s*['"])(\/sub-vue\/)/g,
                            (all) => {
                                return all.replace(
                                    '/sub-vue/',
                                    'http://localhost:4001/sub-vue/',
                                )
                            },
                        )
                        return code
                    },
                },
            ],
        },
    },
})
const app = createApp(App)

import router from './router'

app.use(router)

const pinia = createPinia()
// 数据持久化
pinia.use(piniaPluginPersistedState)

// 因为状态管理使用的是setup的方式构建所以我们重写一个$reset并挂载到pinia中
pinia.use(({ store }) => {
    const initialState = JSON.parse(JSON.stringify(store.$state))
    store.$reset = () => {
        store.$patch(initialState)
    }
})
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
