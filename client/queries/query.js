import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation Register($newUser: newUser) {
    Register(newUser: $newUser) {
      name
      username
      email
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      access_token
    }
  }
`;
