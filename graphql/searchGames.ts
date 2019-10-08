import { gql } from 'apollo-boost'

const searchGames = gql`
query Games($input:SearchGamesQueryInput!){
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