/**
 * 应用默认配置
 */
import { AppConfig } from '@/types/app-type.ts'

export const appDefaultConfig: AppConfig = {
    // i18n 语言选择
    language: 'zh_CN',
    // 布局: side 或者 side-expand 或者 top
    layout: 'side',
    // 侧边菜单宽度 ， 默认为200px
    sideMenuWidth: 220,
    sideMiniMenuWidth: 50,
    // 菜单主题
    sideMenuTheme: 'dark',
    // 主题颜色索引
    colorIndex: 0,
    // 顶部菜单页面宽度
    pageWidth: '99%',
    // 圆角
    borderRadius: 6,
    // 标签页
    pageTagFlag: true,
    // 标签页样式: default、
    pageTagStyle: 'default',
    // 面包屑
    breadCrumbFlag: true,
    // 页脚
    footerFlag: true,
    // 水印
    watermarkFlag: true,
    // 网站名称
    websiteName: 'Micro-app',
    // 主题颜色
    primaryColor: '#1677ff',
    // 紧凑
    compactFlag: false,
}
