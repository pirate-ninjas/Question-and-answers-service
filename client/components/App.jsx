import React, { useEffect } from 'react';
import Axios from 'axios';
import QuestionList from './QuestionList';

const App = () => {
  useEffect(() => {
    Axios.get('/api/products/1/qna')
      .then((res) => console.log(res.data));
  });
  return (
    <div>
      <h1>Question & Answers</h1>
      <h3>1 - 10 of 16 Questions</h3>
      <QuestionList />
    </div>
  );
};
export default App;
