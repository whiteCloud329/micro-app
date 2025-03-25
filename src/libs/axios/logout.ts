// 退出系统
import { useUserStore } from '@/store/user.ts'

export const logout = () => {
    useUserStore().logout()
    location.href = '/'
}
