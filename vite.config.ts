import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'node:path'
import * as process from 'process'
import UnoCSS from 'unocss/vite'

function pathResolver(dir: string) {
    return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => /^micro-app/.test(tag),
                },
            },
        }),
        vueDevTools(),
        UnoCSS(),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler', // 或 "modern"，"legacy"
                importers: [
                    // ...
                ],
            },
        },
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './src'),
            },
            {
                find: '_vi',
                replacement: pathResolver('/src/views'),
            },
        ],
    },
    server: {
        host: 'localhost.baiyunby.cn',
        proxy: {
            '/smart-admin-api': {
                target: 'https://smart-admin.baiyunby.cn',
                changeOrigin: true,
            },
        },
    },
})
