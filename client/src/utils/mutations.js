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

export const DELETE_USER = gql`
  mutation Mutation($username: String, $email: String, $password: String) {
    deleteUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
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

export const ADD_DOG = gql`
  mutation Mutation(
    $name: String!
    $age: String!
    $gender: String!
    $description: String!
    $neuteredOrSpade: Boolean!
  ) {
    addDog(
      name: $name
      age: $age
      gender: $gender
      description: $description
      neuteredOrSpade: $neuteredOrSpade
    ) {
      _id
      name
      age
      gender
      description
      neuteredOrSpayed
    }
  }
`;

export const UPDATE_DOG = gql`
  mutation Mutation(
    $name: String
    $age: String
    $gender: String
    $neuteredOrSpade: Boolean
    $description: String
  ) {
    updateDog(
      name: $name
      age: $age
      gender: $gender
      neuteredOrSpade: $neuteredOrSpade
      description: $description
    ) {
      _id
      name
      age
      gender
      description
      neuteredOrSpayed
    }
  }
`;

export const DELETE_DOG = gql`
  mutation Mutation(
    $neuteredOrSpade: Boolean!
    $name: String
    $age: String
    $gender: String
    $description: String
  ) {
    deleteDog(
      neuteredOrSpade: $neuteredOrSpade
      name: $name
      age: $age
      gender: $gender
      description: $description
    ) {
      _id
      name
      age
      gender
      description
      neuteredOrSpayed
    }
  }
`;

export const ADD_EVENT = gql`
  mutation Mutation($date: String!, $time: String!, $location: String!) {
    addEvent(date: $date, time: $time, location: $location) {
      _id
      date
      time
      location
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation Mutation($date: String, $time: String, $location: String) {
    updateEvent(date: $date, time: $time, location: $location) {
      _id
      date
      time
      location
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation Mutation($date: String, $time: String, $location: String) {
    deleteEvent(date: $date, time: $time, location: $location) {
      _id
      date
      time
      location
    }
  }
`;
