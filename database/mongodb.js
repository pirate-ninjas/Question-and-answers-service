/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/qna', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('successfully connect to QnA DB'));
mongoose.Promise = global.Promise;

const answerSchema = new mongoose.Schema({
  user: String,
  location: String,
  email: String,
  body: String,
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },

},
{
  timestamps: true,
});

const qnaSchema = new mongoose.Schema({
  questionid: Number,
  user: String,
  location: String,
  email: String,
  body: String,
  answers: [answerSchema],
},
{
  timestamps: true,
});

const Qna = mongoose.model('Qna', qnaSchema);
const Answer = mongoose.model('Answer', answerSchema);

Qna.find({})
  .then((result) => console.log(result));

// Qna.findById('6000f4af9bb92236ce7326a1')
//   .then((result) => {
//     // access subdocument for certain id
//     console.log(result.answers.id('6000f4b19bb92236ce7327c6'));
//   }).catch((error) => console.log(error));

// console.log(faker.address.zipCodeByState());

// this one is how to insert the question
// Qna.create({ user: 'test', location: 'kasjdlkasd', email: 'asdasd' })
//   .then((result) => {
//     result.answers.push({ user: 'test', location: 'kasjdlkasd', email: 'asdasd' });
//     result.answers.push({ user: 'test', location: 'kasjdlkasd', email: 'asdasd' });
//     result.save();
//     console.log(result);
//   });
// Qna.findById('600093a88dd8270b3a69bd24')
//   .then((result) => {
//     // this one is how to insert the answer in follow id
//     result.answers.push({user: 'test', location: 'kasjdlkasd', email: 'asdasd'});
//     result.save();
//     console.log(result);
//     console.log(faker.lorem.sentence());
//   });

module.exports = Qna;
