import { gql } from 'apollo-boost'

export default gql`
mutation removeUserGames ($games:[RemoveGamesInput!]!){
    removeUserGames(input: {games:$games}) {
        result
       
    }
   
}`