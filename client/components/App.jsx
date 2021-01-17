/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import QuestionList from './QuestionList';

const App = () => {
  const [name, setName] = useState('Default Name');
  useEffect(() => {
    Axios.get('/api/products/1/qna')
      .then((res) => {
        setName(res.data[0].user);
      });
  });
  return (
    <div>
      <h1>Question & Answers</h1>
      <h3>1 - 10 of 16 Questions</h3>
      <QuestionList user={name} />
    </div>
  );
};
export default App;
