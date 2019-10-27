import { gql } from 'apollo-boost'

const getUser = gql`
query getUser($username:String!){
    
  user(input:{by:username,value:$username}){
    id
    info{
      email
      description
      noOfSuccessfulExchanges
      epochTimeCreated
      noOfSuccessfulExchanges
      userName
      isPro
      isBanned
      userImageUrl
      setting_matchNotifications
    }
    hasGames{
      id
      details{
        description
        status
        tradeType
        
      }
      game{
        id
        name
        consoleType
        imageUrl
        
      }
    }
        wantedGames{
      id
      details{
        description
        status
        tradeType
        
      }
      game{
        id
        name
        consoleType
        imageUrl
        
      }
    }
  }
  
       
  }
  
`
export default getUser