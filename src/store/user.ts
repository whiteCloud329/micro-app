import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { MenuItemType, MenuType, UserInfoType } from '@/types/system/user.ts'

export const useUserStore = defineStore('userStore', () => {
    const userInfo = reactive<UserInfoType>({
        token: '',
        // 员工id
        employeeId: '',
        // 头像
        avatar: '',
        // 登录名
        loginName: '',
        // 姓名
        actualName: '',
        // 手机号
        phone: '',
        // 部门id
        departmentId: '',
        // 部门名词
        departmentName: '',
        // 是否需要修改密码
        needUpdatePwdFlag: false,
        // 是否为超级管理员
        administratorFlag: true,
        // 上次登录ip
        lastLoginIp: '',
        // 上次登录ip地区
        lastLoginIpRegion: '',
        // 上次登录 设备
        lastLoginUserAgent: '',
        // 上次登录时间
        lastLoginTime: '',
        // 左侧菜单树形结构
        menuTree: [],
        // 存在页面路由的菜单集合
        menuRouterList: [],
        // 是否完成menuRouter初始化
        menuRouterInitFlag: false,
        // 父类菜单集合
        menuParentIdListMap: new Map(),
        // 功能点集合
        pointsList: [],
        // 标签页
        tagNav: null,
        // 缓存
        keepAliveIncludes: [],
        // 未读消息数量
        unreadMessageCount: 0,
        // 待办工作数
        toBeDoneCount: 0,
    })
    // 获取token
    const getToken = () => {
        if (userInfo.token) {
            return userInfo.token
        }
        return null
    }
    //
    const setUserLoginInfo = (data: UserInfoType) => {
        if (data.menuList) {
            userInfo.menuTree = buildMenus(data.menuList)
            userInfo.pointsList = getPoints(data.menuList)
        }
        // userInfo
        console.log(userInfo)
    }
    // 获取菜单&按钮权限
    const buildMenus = (menuList: MenuType) => {
        console.log(menuList)
        //1 获取所有 有效的 目录和菜单
        let catalogAndMenuList = menuList.filter(
            (menu: MenuItemType) =>
                menu.menuType !== 3 && menu.visibleFlag && !menu.disabledFlag,
        )

        //2 获取顶级目录
        let topCatalogList = catalogAndMenuList.filter(
            (menu: MenuItemType) => menu.parentId === 0,
        )
        for (const topCatalog of topCatalogList) {
            buildMenuChildren(topCatalog, catalogAndMenuList)
        }
        return topCatalogList
    }

    function buildMenuChildren(menu: MenuItemType, allMenuList: MenuType) {
        let children = allMenuList.filter(
            (e: any) => e.parentId === menu.menuId,
        )
        if (children.length === 0) {
            return
        }
        menu.children = children
        for (const item of children) {
            buildMenuChildren(item, allMenuList)
        }
    }

    function getPoints(menuList: MenuType) {
        return menuList
            .filter(
                (menu: MenuItemType) =>
                    menu.menuType == 3 &&
                    menu.visibleFlag &&
                    !menu.disabledFlag,
            )
            .map((menu: MenuItemType) => menu.webPerms)
    }

    // 退出系统
    const logout = () => {
        userInfo.token = ''
        userInfo.unreadMessageCount = 0
    }
    return {
        userInfo,
        getToken,
        logout,
        setUserLoginInfo,
    }
})
