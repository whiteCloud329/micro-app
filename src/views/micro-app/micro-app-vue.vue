<template>
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
</template>
<script setup lang="ts">
import microApp from '@micro-zoe/micro-app'
// import { reactive } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({ name: 'microAppVueView' })
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
