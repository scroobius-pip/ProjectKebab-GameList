import { gql } from 'apollo-boost'

const getUserCount = gql`
query getUserCount {
    count
}
`

export default getUserCount