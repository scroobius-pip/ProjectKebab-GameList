
export default interface User {
    id: string
    info: UserInfo
}

export interface UserInfo {

    description?: string
    isPro?: boolean
    epochTimeCreated?: number
    location?: UserInfoLocation
    // noOfSuccessfulExchanges?: number
    userImageUrl?: string
    userName?: string
    isBanned?: boolean
}


export interface UserInfoLocation {
    city: string
    country: string
}
