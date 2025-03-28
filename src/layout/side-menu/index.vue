<template>
    <div class="logo">
        <img v-if="!collapsed" class="logo-image" :src="logo" alt="" />
        <img v-else class="logo-mini-image" :src="miniLogo" alt="" />
    </div>
    <div class="menu">
        <recursion-menu></recursion-menu>
    </div>
</template>
<script setup lang="ts">
import logo from '@/assets/images/logo/logo.png'
import miniLogo from '@/assets/images/logo/mini-logo.png'
import { computed } from 'vue'
import { useAppStore } from '@/store/app.ts'
import RecursionMenu from '@/layout/side-menu/recursion-menu.vue'

defineOptions({ name: 'side-menu' })
console.log(useAppStore().collapsed)
const collapsed = computed(() => useAppStore().collapsed)
</script>
<style scoped lang="scss">
.logo {
    width: 100%;
    height: 40px;
    @apply flex-center-center;
    .logo-image {
        width: auto;
        height: 30px;
    }

    .logo-mini-image {
        width: 25px;
        height: 25px;
    }
}
</style>
