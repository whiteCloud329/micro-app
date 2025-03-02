<script setup lang="ts">
import microApp, { getActiveApps } from '@micro-zoe/micro-app'

const pushDemo = () => {
    console.log(getActiveApps())
    // 主应用通过下发data数据控制子应用跳转
    microApp.setData(getActiveApps()[0], { path: '/vue/demo' })
}
</script>

<template>
    <router-link to="/vue/demo">demo</router-link>
    <button @click="pushDemo">跳转到demo</button>
    <router-view :key="$route.name"></router-view>
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
