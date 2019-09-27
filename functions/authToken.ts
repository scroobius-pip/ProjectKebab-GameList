import { NextPageContext } from 'next'
import cookies from 'next-cookies'
import jwt from 'jsonwebtoken'
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
    const { authToken = '' } = cookies(ctx)
    return authToken
}

const setAuthToken = (token: string) => {
    if (typeof document !== 'undefined')
        document.cookie = `authToken=${token}; path=/`
}

export {
    getAuthToken,
    setAuthToken,
    isExpired
}