import { defineStore } from 'pinia'
import { ElLoading } from 'element-plus'
import { ref } from 'vue'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

export const useSpinStore = defineStore('spinStore', () => {
    const loading = ref<LoadingInstance>()
    const show = () => {
        loading.value = ElLoading.service({
            lock: true,
            text: '加载中',
            background: 'rgba(0, 0, 0, 0.7)',
        })
    }
    const hide = () => {
        if (loading.value) {
            loading.value.close()
        }
    }
    return { show, hide }
})
