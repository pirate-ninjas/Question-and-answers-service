/* eslint-disable no-console */
const faker = require('faker');
const Qna = require('./mongodb.js');

const seedMyDB = () => {
  let id = 0;
  for (let i = 0; i < 100; i += 1) {
    const randomName = faker.name.findName();
    const randomLocation = `${faker.address.state()} ${faker.address.zipCodeByState()}`;
    const randomEmail = faker.internet.email();
    const sentences = faker.lorem.sentences();

    Qna.create({
      questionid: id,
      user: randomName,
      location: randomLocation,
      email: randomEmail,
      body: sentences,
    })
      .then((result) => {
        result.answers.push(
          {
            user: faker.name.findName(),
            location: `${faker.address.state()} ${faker.address.zipCodeByState()}`,
            email: faker.internet.email(),
            body: faker.lorem.sentences(),
          },
        );
        result.answers.push(
          {
            user: faker.name.findName(),
            location: `${faker.address.state()} ${faker.address.zipCodeByState()}`,
            email: faker.internet.email(),
            body: faker.lorem.sentences(),
          },
        );
        result.save();
      });
    id += 1;
  }
};

seedMyDB();
