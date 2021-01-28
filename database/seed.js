/* eslint-disable no-loop-func */
/* eslint-disable no-console */
const mongoose = require('mongoose');
const faker = require('faker');
const Qna = require('./mongodb.js');

const fakeDatas = [];

let id = 0;
for (let i = 0; i <= 100; i += 1) {
  const randomName = faker.name.findName();
  const randomLocation = `${faker.address.state()} ${faker.address.zipCodeByState()}`;
  const randomEmail = faker.internet.email();
  const sentences = faker.lorem.sentences();
  const fakeQuestion = new Qna({
    questionid: id,
    user: randomName,
    location: randomLocation,
    email: randomEmail,
    body: sentences,
  });
  fakeQuestion.answers.push(
    {
      user: faker.name.findName(),
      location: `${faker.address.state()} ${faker.address.zipCodeByState()}`,
      email: faker.internet.email(),
      body: faker.lorem.sentences(),
    },
    {
      user: faker.name.findName(),
      location: `${faker.address.state()} ${faker.address.zipCodeByState()}`,
      email: faker.internet.email(),
      body: faker.lorem.sentences(),
    },
  );
  id += 1;
  fakeDatas.push(fakeQuestion);
}

const seedMyDB = () => {
  Qna.create(fakeDatas)
    .then(() => {
      console.log('seeded');
      mongoose.connection.close();
    })
    .catch((err) => console.log(err));
};

seedMyDB();
