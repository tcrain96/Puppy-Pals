// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    dogs: [Dog]
    events: [Event]
  }

  type Dog {
    _id: ID
    name: String
    age: String
    gender: String
    description: String
  }

  type Event {
    _id: ID
    date: String
    time: String
    location: String
    attendees: [Dog]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    dogs: [Dog]
    dog(name: String): Dog
    events: [Event]
    event(_id: ID!): Event
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    deleteUser(username: String, email: String, password: String): User
    addDog(
      name: String!
      age: String!
      gender: String!
      description: String!
    ): Dog
    updateDog(
      name: String
      age: String
      gender: String
      description: String
    ): Dog
    deleteDog(
      name: String
      age: String
      gender: String
      description: String
    ): Dog
    addEvent(date: String!, time: String!, location: String!): Event
    updateEvent(date: String, time: String, location: String): Event
    deleteEvent(date: String, time: String, location: String): Event
  }
`;

// export the typeDefs
module.exports = typeDefs;
