import UserInfoStatus from './UserInfo.Status'
import ProfileImageStatus from './UserInfo.ProfileImage';
import UserInfoUserName from './UserInfo.UserName';
import UserInfoMemberSince from './UserInfo.MemberSince'
import UserInfoSocialButtons from './UserInfo.SocialButtons';
import UserInfoCopy from './UserInfo.Copy';
import UserInfoChat from './UserInfo.Chat';

export default () => {
    const userName = 'IncredibleGonzo'
    return <>
        <ProfileImageStatus src='https://www.redditstatic.com/avatars/avatar_default_08_0079D3.png' />
        <UserInfoUserName username='IncredibleGonzo' isPremium />
        <UserInfoMemberSince epochTimeCreated={1504224000 * 1000} />
        <UserInfoSocialButtons sociallinks={[{ link: `https://www.reddit.com/user/${userName}`, platform: 'reddit' }]} />
        <UserInfoStatus />
        <UserInfoChat userName={userName} />
        <UserInfoCopy />

    </>
}