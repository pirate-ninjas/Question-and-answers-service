/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const mongoose = require('mongoose');
const faker = require('faker');

// for localhost deployment
// mongoose.connect('mongodb://localhost/qna', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('successfully connect to QnA DB'));

// for Docker deployment
mongoose.connect('mongodb://database/qna', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('successfully connect to QnA DB'));
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

// tester mongoose query sandbox
// Qna.findById('6001e3b3bbe18d0925f61218')
//   .then((result) => console.log(result));

module.exports = Qna;
