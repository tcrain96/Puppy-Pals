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
  query Query($id: ID!) {
    user(_id: $id) {
      _id
      username
      email
      dogs {
        _id
        name
        age
        gender
        description
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
      userId
      name
      age
      gender
      description
    }
  }
`;

export const GET_DOG = gql`
  query Query($id: ID!) {
    dog(_id: $id) {
      _id
      userId
      name
      age
      gender
      description
    }
  }
`;

export const GET_EVENTS = gql`
  query Query {
    events {
      _id
      userId
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
      userId
      date
      time
      location
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      dogs {
        _id
        name
        age
        gender
        description
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

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
