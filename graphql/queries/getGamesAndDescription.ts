import { gql } from 'apollo-boost'

export default gql`
query getMyDescriptionAndGames{
    me{
    id
     info{
      description
    }
    
    hasGames {
      id
      details {
          description
          status
          tradeType
      }
      game {
          consoleType
          id
          imageUrl
          name
      }
  }
  
  wantedGames {
      id
      details {
          description
          status
          tradeType
      }
      game {
          consoleType
          id
          imageUrl
          name
      }
  }


}
}

`