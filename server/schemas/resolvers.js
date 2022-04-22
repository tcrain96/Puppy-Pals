const { AuthenticationError } = require("apollo-server-express");
const { User, Dog, Event } = require("../models");
const { signToken } = require("../utils/auth");

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
    events: async () => {
      return Event.find();
    },

    //Get One Event
    event: async (parents, { _id }) => {
      return Event.findOne({ _id });
    },
  },
  Mutation: {
    //login to account
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    //create an account
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    //update an account
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    //delete an account
    deleteUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndDelete(context.user._id);
      }

      throw new AuthenticationError("Not logged in");
    },

    //add a dog to account
    addDog: async (parent, args, context) => {
      if (context.user) {
        const dog = await Dog.create(args);

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { dogs: dog._id } },
          { new: true }
        );
        return dog;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    //update a dog
    updateDog: async (parent, args, context) => {
      if (context.user) {
        return await Dog.findByIdAndUpdate(args._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    //delete a dog
    deleteDog: async (parent, args, context) => {
      if (context.user) {
        return await Dog.findByIdAndDelete(args._id);
      }

      throw new AuthenticationError("Not logged in");
    },

    //add an event to account
    addEvent: async (parent, args, context) => {
      if (context.user) {
        const event = await Event.create(args);

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { events: event._id } },
          { new: true }
        );
        return event;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    //update an event
    updateEvent: async (parent, args, context) => {
      if (context.user) {
        return await Event.findByIdAndUpdate(args._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    //delete an event
    deleteEvent: async (parent, args, context) => {
      if (context.user) {
        return await Event.findByIdAndDelete(args._id);
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
