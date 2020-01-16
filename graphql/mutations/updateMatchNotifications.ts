import { gql } from 'apollo-boost'

export default gql`
mutation updateMatchNotifications($status:Boolean!){
    updateUserInfo(input:{
      info:{
        setting_matchNotifications:$status
      }
    }){
      result{
        setting_matchNotifications
      }
      error{
        message
        type
      }
    }
  }
`