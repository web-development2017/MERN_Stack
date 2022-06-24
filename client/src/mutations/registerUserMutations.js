import { gql } from '@apollo/client';

const REGISTER_USER = gql`
  mutation registerUser($username: String!, $email: String!, $password: String!) {
    registerUser(username: $name, email: $email, password: $password) {
      id
      name
      email
      phone
    }
  }
`;

export { REGISTER_USER };