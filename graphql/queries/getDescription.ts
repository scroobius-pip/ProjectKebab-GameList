import { gql } from 'apollo-boost'

export default gql`
query getDescription{
    me{
     info{
      description
    }
}
}

`