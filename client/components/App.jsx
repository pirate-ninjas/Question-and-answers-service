/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';

const Wrapper = styled.section`
  margin: auto;
  width: 85%;
  padding: 10px;
`;
const Qna = styled.h1`
  margin-bottom: 0.5em;
  font-family: 'Roboto', sans-serif;
`;

const AnswerButton = styled.button`
  :hover {
    cursor: pointer;
    font-size: 1em;
    margin-left: 87%;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border: 2px solid green;
    background: white;
    color: green;
  };
  font-size: 1em;
  margin-left: 87%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  border: 2px solid green;
  background: green;
  color: white;
`;

const HowManyQuestion = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
`;

const App = () => {
  const [datas, setData] = useState([]);
  const [isQuestionClicked, setIsQuestionClicked] = useState(false);
  const [isAnswerClicked, setIsAnswerclicked] = useState(false);
  const [get, setGet] = useState(false);
  const getDatabase = () => {
    setGet(!get);
  };
  const handleQuestionButton = () => {
    setIsQuestionClicked(!isQuestionClicked);
  };
  const handleAnswerClicked = () => {
    setIsAnswerclicked(!isAnswerClicked);
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
      <Wrapper>
        <QuestionForm getDatabase={getDatabase} handleQuestionButton={handleQuestionButton} />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Qna>Question & Answers</Qna>
      <AnswerButton type="button" onClick={() => handleQuestionButton()}>Ask a question</AnswerButton>
      <HowManyQuestion>{`1 - 10 of ${datas.length} Questions`}</HowManyQuestion>
      <QuestionList
        getDatabase={getDatabase}
        handleQuestionButton={handleQuestionButton}
        list={datas}
        handleAnswerClicked={handleAnswerClicked}
      />
    </Wrapper>
  );
};
export default App;
