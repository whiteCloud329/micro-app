<template>
    <!--左侧菜单 模式-->
    <SideLayout v-if="layout === LAYOUT_ENUM.SIDE.value" />
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/app.ts'
import { computed } from 'vue'
import SideLayout from '@/layout/side-layout.vue'
import { LAYOUT_ENUM } from '@/constants/layout-const.ts'

defineOptions({ name: 'layout-view' })
const layout = computed(() => useAppStore().appConfig.layout)
</script>
<style scoped lang="scss"></style>
