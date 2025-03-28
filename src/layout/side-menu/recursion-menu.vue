<template>
    <el-menu :collapse="collapsed">
        <template v-for="item in menuTree">
            <template v-if="!item.children">
                <el-menu-item>
                    {{ item.menuName }}
                </el-menu-item>
            </template>
            <template v-else>
                <sub-menu :menu-info="item"></sub-menu>
            </template>
        </template>
    </el-menu>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/app.ts'
import { computed } from 'vue'
import { useUserStore } from '@/store/user.ts'
import SubMenu from '@/layout/side-menu/sub-menu.vue'

defineOptions({ name: 'recursion-menu' })
const appStore = useAppStore()
const collapsed = computed(() => appStore.collapsed)

const userStore = useUserStore()
const menuTree = computed(() => userStore.userInfo.menuTree)
</script>
<style scoped lang="scss"></style>
