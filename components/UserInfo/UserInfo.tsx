import UserInfoStatus from './UserInfo.Status'
import ProfileImageStatus from './UserInfo.ProfileImage'
import UserInfoUserName from './UserInfo.UserName'
import UserInfoMemberSince from './UserInfo.MemberSince'
import UserInfoSocialButtons from './UserInfo.SocialButtons'
import UserInfoCopy from './UserInfo.Copy'
import UserInfoChat from './UserInfo.Chat'



interface Props {
    userName: string
    userImage: string
    isPremium: boolean
    epochTimeCreated: string
    disableChat?: boolean
}

export default ({ userName, userImage, isPremium, epochTimeCreated, disableChat = false }: Props) => {

    return <>
        <ProfileImageStatus src={userImage} />
        <UserInfoUserName userName={userName} isPremium={isPremium} />
        <UserInfoMemberSince epochTimeCreated={epochTimeCreated} />
        <UserInfoSocialButtons socialLinks={[{ link: `https://www.reddit.com/user/${userName}`, platform: 'reddit' }]} />
        <UserInfoStatus />
        {disableChat ? null : <UserInfoChat userName={userName} />}
        <UserInfoCopy />

    </>
}