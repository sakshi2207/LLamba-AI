import { gql } from '@apollo/client';

// Define your GraphQL query here
export const GET_USER_QUERY = gql`
  query GetUserQuery($userId: ID!) {
    user(id: $userId) {
      id
      name
      email
    }
  }
`;
export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;
