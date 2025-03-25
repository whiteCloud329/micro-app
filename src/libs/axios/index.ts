import axios, {
    AxiosInstance,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios'
import { ElMessage } from 'element-plus'
import { config } from './config.ts'

import { getCookie } from '@/libs/cokkies'
import { logout } from '@/libs/axios/logout.ts'
import { handleAuthError, showSecurityAlert } from '@/libs/axios/utils.ts'

const { base_url, request_timeout, default_headers } = config
// token的消息头
const TOKEN_HEADER = 'x-access-token'

const service: AxiosInstance = axios.create({
    baseURL: base_url,
    timeout: request_timeout,
    headers: {
        'Content-Type': default_headers,
    },
})

// 请求拦截
service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // 在发送请求之前消息头加入token
    const token = getCookie(TOKEN_HEADER)
    if (token) {
        config.headers[TOKEN_HEADER] = token
    } else {
        delete config.headers[TOKEN_HEADER]
    }
    return config
})

// 响应拦截
service.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse['data'] | Promise<never> => {
        const res = response.data
        const { data } = response
        // 业务状态码处理
        switch (data.code) {
            case 1:
                return data.data // 直接返回有效数据
            case 30007:
            case 30008:
                handleAuthError(logout)
                return Promise.reject(response)
            case 30010:
            case 30011:
                showSecurityAlert(data.msg)
                return Promise.reject(response)
            case 30012:
                showSecurityAlert(data.msg, logout)
                return Promise.reject(response)
            default:
                return Promise.resolve(res)
        }
    },
    (error) => {
        // 对响应错误做点什么
        if (error.message.indexOf('timeout') !== -1) {
            ElMessage.closeAll()
            ElMessage.error('网络超时')
        } else if (error.message === 'Network Error') {
            ElMessage.closeAll()
            ElMessage.error('网络连接错误')
        } else if (error.message.indexOf('Request') !== -1) {
            ElMessage.closeAll()
            ElMessage.error('网络发生错误')
        }
        return Promise.reject(error)
    },
)
// 封装get请求
export const getService = (url: string, params: object) => {
    return service.get(url, params)
}

// 封装post请求
export const postService = (url: string, params: object) => {
    return service.post(url, { data: params })
}

// export default service
