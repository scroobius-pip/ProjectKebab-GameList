import { gql } from 'apollo-boost'

export default gql`
mutation updateUserGames ($games:[UpdateGamesInput!]!){
    updateUserGames(input: {games:$games}) {
        result
       
    }
   
}`