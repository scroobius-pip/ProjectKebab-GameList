
export default interface User {
    id: string
    info: UserInfo
}

export interface UserInfo {

    description?: string
    isPro?: boolean
    epochTimeCreated?: string
    location?: UserInfoLocation
    email?: string
    // noOfSuccessfulExchanges?: number
    userImageUrl?: string
    userName?: string
    isBanned?: boolean
    setting_matchNotifications?: boolean
    location: {
        country: string
        state: string
    }
}


export interface UserInfoLocation {
    state: string
    country: string
}
