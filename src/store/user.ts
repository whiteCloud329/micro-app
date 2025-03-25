import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('userStore', () => {
    const userInfo = reactive({
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
    const setUserLoginInfo = (userInfo: any) => {
        console.log(userInfo)
    }
    // 获取菜单&按钮权限
    const buildMenusAndButtons = (list: any) => {
        console.log(list)
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
        buildMenusAndButtons,
    }
})
