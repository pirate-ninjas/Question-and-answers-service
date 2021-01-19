/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';

const App = () => {
  const [datas, setData] = useState([]);
  const [isQuestionClicked, setIsQuestionClicked] = useState(false);
  const [get, setGet] = useState(false);
  const getDatabase = () => {
    setGet(!get);
  };
  const handleQuestionButton = () => {
    setIsQuestionClicked(!isQuestionClicked);
  };
  useEffect(() => {
    Axios.get('/api/products/1/qna')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }, [get]);
  if (isQuestionClicked) {
    return (
      <QuestionForm getDatabase={getDatabase} handleQuestionButton={handleQuestionButton} />
    );
  }
  return (
    <div>
      <h1>Question & Answers</h1>
      <h3>{`1 - 10 of ${datas.length} Questions`}</h3>
      <button type="button" onClick={() => handleQuestionButton()}>Ask a question</button>
      <QuestionList
        getDatabase={getDatabase}
        handleQuestionButton={handleQuestionButton}
        list={datas}
      />
    </div>
  );
};
export default App;
