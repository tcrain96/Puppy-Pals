const faker = require('faker');

const db = require('../config/connection');
const { Dog, User } = require('../models');

db.once('open', async () => {
  await Dog.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);


  // create Dogs
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let dogId = userId;

    while (dogId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      dogId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { dogs: dogId } });
  }




// create Event


for (let i = 0; i < 50; i += 1) {
  const date = faker.internet.date();
  const time= faker.internet.time(username);
  const location = faker.internet.location();

  userData.push({ date, time, location });
}


const createdEvent = await Event.create({date, time, location});

const updatedUser = await User.updateOne(
  { _id: userId },
  { $push: { event: createdEvent._id } }
);

createdEvents.push(createdEvent);
}



console.log('all done!');
  process.exit(0);
});









 



