import { gql } from "@apollo/client";

export const QUERIES = {
  GET_USERS: gql`
    query Query {
      users {
        _id
        username
        email
        dogs {
          _id
          name
          age
          gender
          description
          neuteredOrSpayed
        }
        events {
          _id
          date
          time
          location
        }
      }
    }
  `,
  GET_USER: gql`
    query Users {
      users {
        _id
        username
        email
      }
    }
  `,
};
