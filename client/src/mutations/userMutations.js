import { gql } from '@apollo/client';

const REGISTER_USER = gql`
  mutation AddUser(
    $username: String!
    $email: String!
    $password: String!
    $clientId: ID!
  )
`;

export { REGISTER_USER };