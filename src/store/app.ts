import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { appDefaultConfig } from '@/config/app.ts'

export const useAppStore = defineStore('appStore', () => {
    const appConfig = reactive({
        ...appDefaultConfig,
    })
    const collapsed = ref(false)
    const setCollapsed = (value: boolean) => {
        collapsed.value = value
    }
    return { appConfig, collapsed, setCollapsed }
})
