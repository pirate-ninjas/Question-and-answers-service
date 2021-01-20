/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import PostAnswer from './PostAnswer';

const Wrapper = styled.section`
  border-top: 1px solid black;
  padding-top: 10%;
  padding-bottom: 10%
`;
const QuestionList = (props) => {
  const [datas, setData] = useState([{
    id: 'asdd',
    user: 'asdd',
    body: 'asdd',
    answers: [
      {
        user: '', body: '', yes: 0, no: 0,
      }],
  }]);
  const [question, setQuestion] = useState({});
  const [index, setIndex] = useState(0);
  const [isQuestionClicked, setIsQuestionClicked] = useState(false);
  useEffect(() => {
    setData(props.list);
  });
  const toggleIsQuestionClicked = () => {
    setIsQuestionClicked(!isQuestionClicked);
  };
  const handleClick = (idx) => {
    setIndex(idx);
    setQuestion(datas[idx]);
    toggleIsQuestionClicked();
  };
  const handleYesButton = (id, aid) => {
    const data = { _id: id, _aid: aid };
    Axios.patch('/api/products/1/qna/answer/yes', data)
      .then(() => {
        props.getDatabase();
      });
  };
  const handleNoButton = (id, aid) => {
    const data = { _id: id, _aid: aid };
    Axios.patch('/api/products/1/qna/answer/no', data)
      .then(() => {
        props.getDatabase();
      });
  };
  if (!isQuestionClicked) {
    return (
      datas.slice(0, 10).map((data, idx) => (
        <Wrapper key={`${data._id}`}>
          <h3>
            {data.user}
            <span>4 years ago </span>
          </h3>
          <h2 onClick={() => handleClick(idx)}>
            {data.body}
          </h2>
          <button onClick={() => handleClick(idx)} type="button">Answer the Question</button>
          {
            data.answers.length > 0
            && (
            <div>
              <h4>
                {data.answers[0].user}
                <span>4 years ago</span>
              </h4>
              <h5>
                {data.answers[0].body}
              </h5>
              <span>
                Helpful?
                <span onClick={() => handleYesButton(data._id, data.answers[0]._id)}>
                  {`Yes. ${data.answers[0].yes}`}
                </span>
                <span onClick={() => handleNoButton(data._id, data.answers[0]._id)}>
                  {`No. ${data.answers[0].no}`}
                </span>
              </span>
            </div>
            )
          }
        </Wrapper>
      ))
    );
  }
  if (isQuestionClicked) {
    return (
      <PostAnswer
        onClick={() => handleClick()}
        toggleIsQuestionClicked={toggleIsQuestionClicked}
        currentQuestion={question}
        getDatabase={props.getDatabase}
        handleYesButton={handleYesButton}
        handleNoButton={handleNoButton}
        data={datas[index]}
      />
    );
  }
  return (
    <h1>Your react is GG</h1>
  );
};

export default QuestionList;
