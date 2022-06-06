import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query Query {
    getAllUsers(id: 1) {
      id
      firstName
      lastName
      email
      password
    }
  }
`;
