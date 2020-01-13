import { gql } from 'apollo-boost'

const getMatches = gql`

query getMatches($input:MatchQueryInput!) {
matches(input:$input){
    result{
        id
        userImageUrl
       userName
        matchRate
        wantedGameNames
        hasGameNames
        state
        country
        
      }
      error {
          type
      }

}


}


`

export default getMatches