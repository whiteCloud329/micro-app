<template></template>
<script setup lang="ts">
import { useUserStore } from '@/store/user.ts'
import { computed } from 'vue'

defineOptions({ name: 'layout-side' })

// 获取菜单树
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)

console.log(userInfo.value)
</script>
<style scoped lang="scss"></style>
