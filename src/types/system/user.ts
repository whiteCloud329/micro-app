export type MenuItemType = {
    menuName: string // 菜单名称
    menuType: string | number // 菜单类型
    parentId: number // 父菜单id
    sort: number // 排序
    path: string // 路由地址
    component: string // 组件路径
    frameFlag: boolean // 是否外链
    frameUrl: string // 外链地址
    cacheFlag: boolean // 是否缓存
    visibleFlag: boolean // 是否显示
    disabledFlag: boolean // 是否禁用
    permsType: number // 权限类型
    webPerms: string // 前端权限字符串
    apiPerms: string // 后端权限字符串
    icon: string // 菜单图标
    contextMenuId: number // 功能点关联菜单ID
    menuId: number // 菜单id
    createTime: string // 创建时间
    createUserId: number // 创建人
    updateTime: string // 更新时间
    updateUserId: number // 更新人
    children?: MenuItemType[]
}

export interface MenuType extends Array<MenuItemType> {}

export type UserInfoType = {
    token: string
    employeeId: number | string
    avatar: string
    loginName: string
    actualName: string
    phone: string
    departmentId: number | string
    departmentName: string
    needUpdatePwdFlag: boolean
    administratorFlag: boolean
    lastLoginIp: string
    lastLoginIpRegion: string
    lastLoginUserAgent: string
    lastLoginTime: string
    menuTree: MenuType
    menuRouterList: []
    menuRouterInitFlag: boolean
    menuParentIdListMap: Map<any, any>
    pointsList: string[]
    tagNav: string | null
    keepAliveIncludes: string[]
    unreadMessageCount: number
    toBeDoneCount: number
    menuList?: MenuType
}
