import UserInfoStatus from './UserInfo.Status'
import ProfileImageStatus from './UserInfo.ProfileImage'
import UserInfoUserName from './UserInfo.UserName'
import UserInfoMemberSince from './UserInfo.MemberSince'
import UserInfoSocialButtons from './UserInfo.SocialButtons'
import UserInfoCopy from './UserInfo.Copy'
import UserInfoChat from './UserInfo.Chat'
import { UserInfo } from 'types/IUser'



export interface UserInfoProps extends UserInfo {

    disableChat?: boolean
}

const extractUsernameAndPlatform = (user: UserInfo) => {
    const [steamUserName, platform] = user.email.split('@')

    const isSteam = platform === 'steam'
    const platformName = isSteam ? steamUserName : user.userName

    return {
        platform,
        userName: user.userName,
        link: isSteam ? `https://steamcommunity.com/profiles/${platformName}` : `https://www.reddit.com/user/${platformName}`
    }
}

export default (props: UserInfoProps) => {
    const { userImageUrl, isPro, epochTimeCreated, location, isBanned, disableChat = false, } = props
    const { userName, platform, link } = extractUsernameAndPlatform(props)

    return <>
        <ProfileImageStatus src={userImageUrl} />
        <UserInfoUserName userName={userName} isPremium={isPro} />
        <UserInfoMemberSince epochTimeCreated={epochTimeCreated} />
        <UserInfoSocialButtons socialLinks={[{ link, platform }]} />
        <UserInfoStatus country={location.country} state={location.state} isBanned={isBanned} />
        {disableChat ? null : <UserInfoChat userName={userName} />}
        <UserInfoCopy userName={userName} />

    </>
}