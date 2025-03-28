import { LyEnumType } from '@/types/layout-enum.ts'

export const LAYOUT_ENUM: LyEnumType<string> = {
    SIDE: {
        value: 'side',
        desc: '传统',
    },
    SIDE_EXPAND: {
        value: 'side-expand',
        desc: '展开',
    },
    TOP: {
        value: 'top',
        desc: '顶部',
    },
}

export const PAGE_TAG_ENUM: LyEnumType<string> = {
    DEFAULT: {
        value: 'default',
        desc: '默认',
    },
    ANTD: {
        value: 'antd',
        desc: 'Ant Design',
    },
}
