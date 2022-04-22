import { gql } from "@apollo/client";

export const GET_USERS = gql`
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
`;

export const GET_USER = gql`
  query Query($username: String!) {
    user(username: $username) {
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
`;

export const GET_DOGS = gql`
  query Query {
    dogs {
      _id
      name
      age
      gender
      description
      neuteredOrSpayed
    }
  }
`;

export const GET_DOG = gql`
  query Query($id: ID!) {
    dog(_id: $id) {
      _id
      name
      age
      gender
      description
      neuteredOrSpayed
    }
  }
`;

export const GET_EVENTS = gql`
  query Query {
    events {
      _id
      date
      time
      location
    }
  }
`;

export const GET_EVENT = gql`
  query Query($id: ID!) {
    event(_id: $id) {
      _id
      date
      time
      location
    }
  }
`;
