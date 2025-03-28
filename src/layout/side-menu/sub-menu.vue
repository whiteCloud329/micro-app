<template>
    <el-sub-menu :index="menuInfo.id">
        <template #title>
            {{ menuInfo.menuName }}
        </template>
        <template v-for="item in menuInfo.children">
            <template v-if="item.children">
                <sub-menu :menu-info="item"></sub-menu>
            </template>
            <template v-else>
                <el-menu-item>{{ item.menuName }}</el-menu-item>
            </template>
        </template>
    </el-sub-menu>
</template>
<script setup lang="ts">
import { MenuItemType } from '@/types/system/user.ts'

defineOptions({ name: 'sub-menu' })
const props = defineProps({
    menuInfo: {
        type: Object,
        default: () => {},
    },
}) as { menuInfo: MenuItemType }
</script>
<style scoped lang="scss"></style>
