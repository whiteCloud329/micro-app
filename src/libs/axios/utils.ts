import { ElMessage, ElMessageBox } from 'element-plus'

export const handleAuthError = (logout: () => void) => {
    ElMessage.closeAll()
    ElMessage.error('您没有登录，请重新登录')
    setTimeout(logout, 300)
}

export const showSecurityAlert = (msg: string, logout?: () => void): void => {
    ElMessage.closeAll()
    ElMessageBox({
        title: '重要提醒',
        type: 'error',
        message: msg,
    }).then(() => {})
    if (logout) {
        setTimeout(logout, 300)
    }
}
