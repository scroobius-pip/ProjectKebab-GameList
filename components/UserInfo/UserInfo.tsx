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

export default ({ userName, userImageUrl, isPro, epochTimeCreated, location, isBanned, disableChat = false }: UserInfoProps) => {

    return <>
        <ProfileImageStatus src={userImageUrl} />
        <UserInfoUserName userName={userName} isPremium={isPro} />
        <UserInfoMemberSince epochTimeCreated={epochTimeCreated} />
        <UserInfoSocialButtons socialLinks={[{ link: `https://www.reddit.com/user/${userName}`, platform: 'reddit' }]} />
        <UserInfoStatus country={location.country} state={location.state} isBanned={isBanned} />
        {disableChat ? null : <UserInfoChat userName={userName} />}
        <UserInfoCopy />

    </>
}