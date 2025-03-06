<template>
    <div>
        <h1>主应用</h1>
        <micro-app
            v-if="currentApp"
            :name="currentApp.name"
            :url="currentApp.url"
            iframe
            keep-router-state
            disable-memory-router
            route-mode="pure"
        >
        </micro-app>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'microLayout' })
import microApp from '@micro-zoe/micro-app'
import { useRoute } from 'vue-router'

const route = useRoute()

const microApps = [
    {
        name: 'vue-sub-app',
        url: 'http://localhost:4001',
        baseroute: '/sub-vue',
        activeRule: '/sub-vue',
    },
    {
        name: 'react-sub-app',
        url: 'http://localhost:5173',
        baseroute: '/react-sub',
        activeRule: '/react-sub',
    },
]

const currentApp = computed(() => {
    return (
        microApps.find((app) => route.path.startsWith(app.activeRule)) || null
    )
})
</script>
<style scoped lang="scss"></style>
