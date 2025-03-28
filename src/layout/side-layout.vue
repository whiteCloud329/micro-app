<template>
    <el-container style="height: 100vh">
        <el-aside :style="{ width: sideMenuWidth + 'px' }">
            <side-menu></side-menu>
        </el-aside>
        <el-container style="height: 100vh">
            <el-header>顶部</el-header>
            <el-main
                :id="LAYOUT_ELEMENT_IDS.main"
                style="height: 100vh"
                class="overflow-scroll"
            >
                主要内容
                <div style="height: 100vh">主要内容1</div>
                <div style="height: 100vh">主要内容2</div>
                <div style="height: 100vh">主要内容3</div>
                <el-backtop
                    :bottom="100"
                    :target="`#${LAYOUT_ELEMENT_IDS.main}`"
                >
                    <!--                    <div-->
                    <!--                        style="-->
                    <!--                            height: 100%;-->
                    <!--                            width: 100%;-->
                    <!--                            background-color: var(&#45;&#45;el-bg-color-overlay);-->
                    <!--                            box-shadow: var(&#45;&#45;el-box-shadow-lighter);-->
                    <!--                            text-align: center;-->
                    <!--                            line-height: 40px;-->
                    <!--                            color: #1989fa;-->
                    <!--                        "-->
                    <!--                    >-->
                    <!--                        UP-->
                    <!--                    </div>-->
                </el-backtop>
            </el-main>
            <el-footer>底部</el-footer>
        </el-container>
    </el-container>
</template>
<script setup lang="ts">
import { LAYOUT_ELEMENT_IDS } from '@/layout/layout-const.ts'
import SideMenu from '@/layout/side-menu/index.vue'
import { computed } from 'vue'
import { useAppStore } from '@/store/app.ts'

const appStore = useAppStore()
const sideMenuWidth = computed(() => {
    return appStore.collapsed
        ? appStore.appConfig.sideMiniMenuWidth
        : appStore.appConfig.sideMenuWidth
})
defineOptions({ name: 'side-layout' })
</script>
<style scoped lang="scss"></style>
