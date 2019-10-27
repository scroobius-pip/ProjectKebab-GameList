import { gql } from 'apollo-boost'

export default gql`
mutation updateUserDescription ($description:String!) {
    updateUserInfo (input:{info:{description:$description}}){
        result{
          description
        }
        error {
            message
            type
            id
        }
      }
}

`