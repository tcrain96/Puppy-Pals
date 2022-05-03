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
    userId: ID
    name: String
    age: String
    gender: String
    description: String
  }

  type Event {
    _id: ID
    userId: ID
    date: String
    time: String
    location: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(_id: ID!): User
    dogs: [Dog]
    dog(_id: ID!): Dog
    events: [Event]
    event(_id: ID!): Event
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    deleteUser(username: String, email: String, password: String): User
    addDog(
      userId: ID!
      name: String!
      age: String!
      gender: String!
      description: String!
    ): Dog
    updateDog(
      _id:ID
      userId: ID
      name: String
      age: String
      gender: String
      description: String
    ): Dog
    deleteDog(_id: ID): Dog
    addEvent(userId: ID, date: String!, time: String!, location: String!): Event
    updateEvent(_id:ID, userId: ID, date: String, time: String, location: String): Event
    deleteEvent(_id: ID): Event
  }
`;

// export the typeDefs
module.exports = typeDefs;
