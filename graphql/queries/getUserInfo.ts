import { gql } from 'apollo-boost'

const getUserInfo = gql`
query getUserInfo{
    me{
      id
       info{
        userName
        email
        userImageUrl
        description
        email
        isPro
        isBanned
        setting_matchNotifications 
        epochTimeCreated
      }
    }
  }
`
export default getUserInfo