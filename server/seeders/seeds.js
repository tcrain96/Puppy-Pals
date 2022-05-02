const faker = require("faker");

const db = require("../config/connection");
const { User, Dog, Event } = require("../models");

db.once("open", async () => {
  await Dog.deleteMany({});
  await User.deleteMany({});
  await Event.deleteMany({});

  console.log("all done!");
  process.exit(0);
});
