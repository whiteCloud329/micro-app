<template>
    <div class="login-container">
        <div class="login-box">
            <div class="login-title">欢迎登录</div>
            <el-form
                class="login-form"
                ref="loginFormRef"
                :model="loginForm"
                :rules="rules"
                label-width="100px"
            >
                <el-form-item label="用户名" prop="loginName">
                    <el-input
                        v-model.trim="loginForm.loginName"
                        placeholder="请输入用户名"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input
                        v-model.trim="loginForm.password"
                        :show-password="!showPassword"
                        placeholder="请输入密码"
                    />
                </el-form-item>
                <el-form-item label="验证码" prop="captchaCode">
                    <el-input
                        class="captcha-input"
                        v-model.trim="loginForm.captchaCode"
                        placeholder="请输入验证码"
                    />
                    <img
                        class="captcha-img"
                        :src="captchaBase64Image"
                        @click="getCaptcha"
                        alt=""
                    />
                </el-form-item>
                <el-form-item class="form-check">
                    <el-checkbox :checked="rememberPwd">记住密码</el-checkbox>
                    <span>( 账号：admin, 密码：123456)</span>
                </el-form-item>
                <div class="btn" type="primary" @click="onLogin">登录</div>
            </el-form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import { LoginApi } from '@/api/systems/login-api.ts'
import { useSpinStore } from '@/store/system/spin.ts'
import { encryptData } from '@/libs/encrypt.ts'
import { loginType } from '@/types/api/systems/login-api-type.ts'
import { useUserStore } from '@/store/user.ts'
import { setCookie } from '@/libs/cokkies'

defineOptions({ name: 'loginView' })

interface ruleForm {
    loginName: string
    password: string
    captchaCode: number | string
    captchaUuid: string
}

const loginFormRef = ref<FormInstance>()
const loginForm = reactive<loginType>({
    loginName: 'admin',
    password: '',
    captchaCode: '',
    captchaUuid: '',
    loginDevice: 1,
})
const showPassword = ref(false)
const router = useRouter()
const rememberPwd = ref(false)

const rules = reactive<FormRules<ruleForm>>({
    loginName: [{ required: true, message: '用户名不能为空' }],
    password: [{ required: true, message: '密码不能为空' }],
    captchaCode: [{ required: true, message: '验证码不能为空' }],
})

onMounted(() => {
    document.onkeyup = (e) => {
        if (e.keyCode === 13) {
            onLogin()
        }
    }
})

// 登录
const onLogin = () => {
    loginFormRef.value?.validate(async (valid) => {
        if (valid) {
            console.log('onLogin', loginForm)
            LoginApi.login(loginForm).then((res) => {
                console.log(res)
            })

            try {
                useSpinStore().show()
                // 密码加密
                let encryptPasswordForm = Object.assign({}, loginForm, {
                    password: encryptData(loginForm.password),
                })
                const res = await LoginApi.login(encryptPasswordForm)
                stopRefreshCaptchaInterval()
                setCookie(
                    import.meta.env.VITE_APP_TOKEN_NAME,
                    res.data.token ? res.data.token : '',
                )

                ElMessage.success('登录成功')
                // 更新用户信息到pinia
                useUserStore().setUserLoginInfo(res.data)
                // 构建系统的路由
                useUserStore().buildMenusAndButtons(res.data.menuList)
                await router.push('/')
            } catch (e: any) {
                if (e.data && e.data.code !== 0) {
                    loginForm.captchaCode = ''
                    await getCaptcha()
                }
                smartSentry.captureError(e)
            } finally {
                useSpinStore().hide()
            }
        }
    })
}

// 获取验证码
const captchaBase64Image = ref('')

async function getCaptcha() {
    try {
        let { data } = await LoginApi.getCaptcha()
        captchaBase64Image.value = data.captchaBase64Image
        loginForm.captchaUuid = data.captchaUuid
        beginRefreshCaptchaInterval(data.expireSeconds)
    } catch (e) {
        console.log(e)
    }
}

let refreshCaptchaInterval: any = null

function beginRefreshCaptchaInterval(expireSeconds: number) {
    if (refreshCaptchaInterval === null) {
        refreshCaptchaInterval = setInterval(
            getCaptcha,
            (expireSeconds - 5) * 1000,
        )
    }
}

function stopRefreshCaptchaInterval() {
    if (refreshCaptchaInterval != null) {
        clearInterval(refreshCaptchaInterval)
        refreshCaptchaInterval = null
    }
}

onMounted(() => {
    getCaptcha()
    // getTwoFactorLoginFlag()
})
</script>
<style scoped lang="scss">
@use './login' as login;
</style>
