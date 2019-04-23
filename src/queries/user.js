import { gql } from 'apollo-boost'

export const addUser = gql`
    mutation AddUser($name: String!, $email: String!){
      createCommonUser (data: { name: $name, email: $email  }){
            name
            email
        }
    }
`

export default addUser
