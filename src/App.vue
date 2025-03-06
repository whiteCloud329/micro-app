<script setup lang="ts">
// import microApp, { getActiveApps } from '@micro-zoe/micro-app'
import MicroLayout from '@/layout/index.vue'
// import MicroAppVueView from '@/views/micro-app/micro-app-vue.vue'
// import MicroLayout from '@/layout/index.vue'

// const pushDemo = () => {
//     console.log(getActiveApps())
//     // 主应用通过下发data数据控制子应用跳转
//     microApp.setData(getActiveApps()[0], { path: '/vue/demo' })
// }
</script>

<template>
    <microLayout></microLayout>
    <!--    <micro-app-vue-view></micro-app-vue-view>-->
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
