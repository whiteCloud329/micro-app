<template></template>
<script setup lang="ts">
import { useAppStore } from '@/store/app.ts'
import { computed } from 'vue'

defineOptions({ name: 'layout-view' })

const appConfig = computed(() => useAppStore().appConfig)
console.log(appConfig.value)
</script>
<style scoped lang="scss"></style>
