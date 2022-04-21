const { AuthenticationError } = require("apollo-server-express");
const { User, Dog, Event } = require("../models");

const resolvers = {
  Query: {
    //Get All Users
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("dogs")
        .populate("events");
    },

    //Get One Users
    user: async (parents, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("dogs")
        .populate("events");
    },

    //Get All Dogs
    dogs: async () => {
      return Dog.find();
    },

    //Get One Dog
    dog: async (parents, { _id }) => {
      return Dog.findOne({ _id });
    },

    //Get All Events
    dogs: async () => {
      return Event.find();
    },

    //Get One Event
    dog: async (parents, { _id }) => {
      return Event.findOne({ _id }).populate("dogs");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      return user;
    },
  },
};

module.exports = resolvers;
