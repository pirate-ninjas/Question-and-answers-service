/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import QuestionList from './QuestionList';

const App = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    Axios.get('/api/products/1/qna')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <div>
      <h1>Question & Answers</h1>
      <h3>{`1 - 10 of ${datas.length} Questions`}</h3>
      <QuestionList list={datas} />
    </div>
  );
};
export default App;
