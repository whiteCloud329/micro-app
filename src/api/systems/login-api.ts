import { getService, postService } from '@/libs/axios'
import { loginType } from '@/types/api/systems/login-api-type.ts'

export const LoginApi = {
    /* 登录
     *  @params
     *   captchaCode <string> string 必需
     *   captchaUuid <string> 验证码uuid标识 必需
     *   loginName <string> 登录账号 必需
     *   password <string> 密码 必需
     *   loginDevice <integer>  可选
     *  */
    login: (params: loginType) => {
        return postService('/login', params)
    },
    getCaptcha: () => {
        return getService('/login/getCaptcha', {})
    },
}
