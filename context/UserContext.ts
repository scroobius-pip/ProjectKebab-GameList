import React from 'react'
import User from 'types/IUser'

const UserContext = React.createContext<User>(null)

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext