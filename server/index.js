/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();
const port = 4000;
const Qna = require('../database/mongodb.js');

app.use(express.static('public'));
app.use(express.json());
// /5 and /7 different questions rendered
app.get('/api/products/:id/qna', (req, res) => {
  const questionid = parseInt(req.params.id, 10);
  Qna.find({ questionid: { $lte: questionid + 10, $gte: questionid } }).sort({ questionid: 1 })
    .sort({ createdAt: -1 })
    .then((result) => {
      console.log('GET request fired!');
      res.send(result);
    })
    .catch((err) => res.send(err));
});

app.post('/api/products/:id/qna', (req, res) => {
  const {
    user, location, email, body, questionid,
  } = req.body;
  Qna.findOne().sort('-questionid')
    .then((result) => {
      console.log(result.questionid);
      Qna.create({
        questionid, user, location, email, body,
      })
        .then((created) => {
          console.log(created);
          console.log('new data created!');
          res.send(created);
        })
        .catch((err) => res.send(err));
    })
    .catch((err) => res.send(err));
});

app.post('/api/products/:id/qna/answer', (req, res) => {
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
          console.log('new data created!');
          res.send(created);
        })
        .catch((err) => res.send(err));
    })
    .catch((err) => res.send(err));
});

app.patch('/api/products/:id/qna/answer/yes', (req, res) => {
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
    .catch((err) => res.send(err));
});

app.patch('/api/products/:id/qna/answer/no', (req, res) => {
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
    .catch((err) => res.send(err));
});

app.listen(port, () => {
  console.log(`Q&A app listening at http://localhost:${port}`);
});
