import Cookies from 'js-cookie'

interface CustomCookieAttributes {
    expires?: number | Date
    path?: string
    domain?: string
    secure?: boolean
    sameSite?: 'Strict' | 'Lax' | 'None'
}

export function setCookie(
    name: string,
    value: string,
    attributes?: CustomCookieAttributes,
) {
    Cookies.set(name, value, attributes)
}

export function getCookie(name: string): any {
    return Cookies.get(name)
}

export function removeCookie(name: string): void {
    return Cookies.remove(name)
}
