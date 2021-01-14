const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/qna', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('successfully connect to QnA DB'));
mongoose.Promise = global.Promise;

const answerSchema = new mongoose.Schema({
  user: String,
  location: String,
  email: String,
  body: String,
  yes: {type: Number, default: 0},
  no: {type: Number, default: 0}

},
  {
    timestamps: true
  }
);

const qnaSchema = new mongoose.Schema({
  user: String,
  location: String,
  email: String,
  body: String,
  answers: [answerSchema]
},
  {
    timestamps: true
  }
);

const Qna = mongoose.model('Qna', qnaSchema);

// Qna.create({user: 'test', location: 'kasjdlkasd', email: 'asdasd', body: 'a;sdklafsd'})
//   .then(result => console.log(result));
Qna.find({_id: '600093a88dd8270b3a69bd24'})
  .then(result => console.log(result));

module.exports = Qna;
