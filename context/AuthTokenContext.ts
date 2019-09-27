import React from 'react'

const AuthTokenContext = React.createContext<string>('')

export const AuthTokenProvider = AuthTokenContext.Provider
export const AuthTokenConsumer = AuthTokenContext.Consumer

export default AuthTokenContext