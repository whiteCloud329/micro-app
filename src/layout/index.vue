<template>
    <div class="layout">
        <div class="layout-header">
            <layout-header></layout-header>
        </div>
        <div class="layout-container">
            <div class="layout-aside">侧边栏</div>
            <div class="layout-main">
                <router-view></router-view>
                <!--                <micro-app-->
                <!--                    v-if="currentApp"-->
                <!--                    :name="currentApp.name"-->
                <!--                    :url="currentApp.url"-->
                <!--                    iframe-->
                <!--                    keep-router-state-->
                <!--                    disable-memory-router-->
                <!--                    route-mode="pure"-->
                <!--                >-->
                <!--                </micro-app>-->
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
// import { computed } from 'vue'

defineOptions({ name: 'microLayout' })
// import microApp from '@micro-zoe/micro-app'
// import { useRoute } from 'vue-router'
import LayoutHeader from '@/layout/layout-header.vue'

// const route = useRoute()

// const microApps = [
//     {
//         name: 'vue-sub-app',
//         url: 'http://localhost:4001',
//         baseroute: '/sub-vue',
//         activeRule: '/sub-vue',
//     },
//     {
//         name: 'react-sub-app',
//         url: 'http://localhost:5173',
//         baseroute: '/react-sub',
//         activeRule: '/react-sub',
//     },
// ]
//
// const currentApp = computed(() => {
//     return (
//         microApps.find((app) => route.path.startsWith(app.activeRule)) || null
//     )
// })
</script>
<style scoped lang="scss">
.layout {
    width: calc(100vw);
    height: 100%;

    .layout-header {
        width: 100%;
        height: 50px;
        background-color: red;
    }

    .layout-container {
        display: flex;

        .layout-aside {
            width: 220px;
            height: calc(100vh - 50px);
        }

        .layout-main {
            flex: 1;
        }
    }
}
</style>
