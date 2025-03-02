<template>
    <micro-app
        name="micro-app-vue"
        url="http://localhost:3000/vue/"
        @mounted="handleMount"
        @error="handleError"
        iframe
        router-mode="pure"
        :data="microAppData"
    ></micro-app>
</template>
<script setup lang="ts">
import microApp, { removeDomScope } from '@micro-zoe/micro-app'
import { reactive } from 'vue'

defineOptions({ name: 'microAppVueView' })
const handleMount = () => {
    window.console.log('mounted,应用加载完毕')
}
const handleError = (e) => {
    window.console.error('加载失败:', e.detail.error)
}
const microAppData = reactive({
    pushState: (path) => {
        removeDomScope()
        console.log(path)
        // this.$router.push(path)
    },
})
</script>
<style scoped lang="scss"></style>
