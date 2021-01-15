/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();
const port = 3000;
const Qna = require('../database/mongodb.js');

app.use(express.static('public'));
app.use(express.json());

app.get('/api/qna', (req, res) => {
  Qna.find({ questionid: { $lte: 15, $gte: 0 } }).sort('questionid')
    .then((result) => {
      console.log(result);
      res.send(result);
    });
});

app.post('/api/qna', (req, res) => {
  const {
    user, location, email, body,
  } = req.body;
  Qna.findOne().sort('-questionid')
    .then((result) => {
      console.log(result.questionid);
      Qna.create({
        questionid: result.questionid + 1, user, location, email, body,
      })
        .then((created) => {
          console.log(created);
          res.send(created);
        });
    });
});

app.post('/api/qna/answer', (req, res) => {
  const {
    _id, user, location, email, body,
  } = req.body;
  Qna.findById(_id)
    .then((result) => {
      result.answers.push({
        user, location, email, body,
      });
      result.save()
        .then((created) => {
          console.log(created);
          res.send(created);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

app.patch('/api/qna/answer/yes', (req, res) => {
  const {
    _id, _aid,
  } = req.body;
  Qna.findById(_id)
    .then((result) => {
      const currentDoc = result.answers.id(_aid);
      currentDoc.yes += 1;
      result.save();
      res.send(result.answers.id(_aid));
    })
    .catch((err) => console.log(err));
});

app.patch('/api/qna/answer/no', (req, res) => {
  const {
    _id, _aid,
  } = req.body;
  Qna.findById(_id)
    .then((result) => {
      const currentDoc = result.answers.id(_aid);
      currentDoc.no += 1;
      result.save();
      res.send(result.answers.id(_aid));
    })
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`Q&A app listening at http://localhost:${port}`);
});
