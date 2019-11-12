import { NextPageContext } from 'next'
import cookies from 'next-cookies'
import decode from 'jwt-decode'


const isExpired = (authToken: string): boolean => {
    try {
        const { exp } = decode(authToken)
        return (Date.now() >= exp * 1000)

    } catch (error) {
        return true
    }
}

const getAuthToken = (ctx: NextPageContext): string => {
    const { token = '' } = cookies(ctx)
    return token
}

const setAuthToken = (token: string) => {
    if (typeof document !== 'undefined')
        document.cookie = `token=${token}; path=/; max-age=2841782400;samesite `
}

export {
    getAuthToken,
    setAuthToken,
    isExpired
}