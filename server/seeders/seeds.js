const faker = require("faker");

const db = require("../config/connection");
const { User, Dog, Event } = require("../models");

db.once("open", async () => {
  await Dog.deleteMany({});
  await User.deleteMany({});
  await Event.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create dogs
  let createdDogs = [];
  for (let i = 0; i < 100; i += 1) {
    const dogName = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const dogAge = (Math.random() * 20).toString();
    const dogGender = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const dogDescription = faker.lorem.words(
      Math.round(Math.random() * 20) + 1
    );
    const dogNeut = true;


    const createdDog = await Dog.create({
      name: dogName,
      age: dogAge,
      gender: dogGender,
      description: dogDescription,
      neuteredOrSpade: dogNeut,
    });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { dogs: createdDog._id } }
    );

    createdDogs.push(createdDog);
  }

  // create events
  let createdEvents = [];
  for (let i = 0; i < 100; i += 1) {
    const eventDate = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const eventTime = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const eventLocation = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdEvent = await Event.create({
      date: eventDate,
      time: eventTime,
      location: eventLocation,
    });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { dogs: createdEvent._id } }
    );

    createdEvents.push(createdEvent);
  }

  console.log("all done!");
  process.exit(0);
});









 



