import { gql } from 'apollo-boost'

export default gql`
mutation addUserGames ($games:[AddGamesInput!]!){
    addUserGames(input: {games:$games}) {
        result
        error {
            message
            type
            id
        }
    }
   
}`