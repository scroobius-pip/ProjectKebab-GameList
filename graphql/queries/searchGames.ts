import { gql } from 'apollo-boost'

const searchGames = gql`
query searchGames($input:SearchGamesQueryInput!){
searchGames(input:$input ) {
   result {
     consoleType
     id
     imageUrl
     name 
   }
}
}
`

export default searchGames