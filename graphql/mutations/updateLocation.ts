import { gql } from 'apollo-boost'

export default gql`
mutation updateLocation ($location:UserInfoLocationInput!) {
    updateUserInfo (input:{info:{location:$location}}){
        result{
          location {
              country,
              state
          }
        }
        error {
            message
            type
            id
        }
      }
}

`