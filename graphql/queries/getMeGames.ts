import { gql } from 'apollo-boost'

const getUserGames = gql`
query UserGame {
    me {
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
}`

export default getUserGames