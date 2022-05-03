import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        dogs {
          _id
          userId
          name
          age
          gender
          description
        }
        events {
          _id
          userId
          date
          time
          location
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        dogs {
          _id
          userId
          name
          age
          gender
          description
        }
        events {
          _id
          userId
          date
          time
          location
        }
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation Mutation($username: String, $email: String, $password: String) {
    updateUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
      dogs {
        _id
        userId
        name
        age
        gender
        description
      }
      events {
        _id
        userId
        date
        time
        location
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation Mutation($username: String, $email: String, $password: String) {
    deleteUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
      dogs {
        _id
        userId
        name
        age
        gender
        description
      }
      events {
        _id
        userId
        date
        time
        location
      }
    }
  }
`;

export const ADD_DOG = gql`
  mutation Mutation(
    $userId: ID!
    $name: String!
    $age: String!
    $gender: String!
    $description: String!
  ) {
    addDog(
      userId: $userId
      name: $name
      age: $age
      gender: $gender
      description: $description
    ) {
      _id
      userId
      name
      age
      gender
      description
    }
  }
`;

export const UPDATE_DOG = gql`
  mutation Mutation(
    $id: ID
    $userId: ID
    $name: String
    $age: String
    $gender: String
    $description: String
  ) {
    updateDog(
      _id:$id
      userId: $userId
      name: $name
      age: $age
      gender: $gender
      description: $description
    ) {
      _id
      userId
      name
      age
      gender
      description
    }
  }
`;

export const DELETE_DOG = gql`
  mutation Mutation($id: ID) {
    deleteDog(_id: $id) {
      _id
    }
  }
`;

export const ADD_EVENT = gql`
  mutation Mutation(
    $userId: ID!
    $date: String!
    $time: String!
    $location: String!
  ) {
    addEvent(userId: $userId, date: $date, time: $time, location: $location) {
      userId
      date
      time
      location
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation Mutation(
    $id:ID
    $userId: ID
    $date: String
    $time: String
    $location: String
  ) {
    updateEvent(
      _id:$id
      userId: $userId
      date: $date
      time: $time
      location: $location
    ) {
      _id
      userId
      date
      time
      location
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation Mutation($id: ID) {
    deleteEvent(_id: $id) {
      _id
    }
  }
`;
