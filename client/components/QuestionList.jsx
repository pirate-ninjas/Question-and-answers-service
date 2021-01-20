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
  margin-top: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;
const AnswerButton = styled.button`
  font-size: 16px;
  margin-top: 2em;
  margin-left: 1em;
  padding: 0.25em 0.50em;
  border: 0.25px solid black;
  background: white;
  cursor: pointer;
`;
const BodyQuestion = styled.h2`
  :hover {
  text-decoration: underline;
  cursor: pointer;
}
`;
const BodyAnswer = styled.h2`
  font-weight: normal;
}
`;
const AnswerWrapper = styled.div`
  margin-left: 1em;
`;
const Date = styled.span`
  margin-left: 0.5em;
  font-weight: normal;
  font-size:  16px;
`;
const YesNoReport = styled.button`
  font-size: 16px;
  margin-top: 2em;
  margin-left: 0.5em;
  padding: 0.25em 0.50em;
  border: 0.25px solid black;
  background: white;
  cursor: pointer;
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
            <Date>4 years ago </Date>
          </h3>
          <BodyQuestion onClick={() => handleClick(idx)}>
            {data.body}
          </BodyQuestion>
          <AnswerButton onClick={() => handleClick(idx)} type="button">Answer the Question</AnswerButton>
          {
            data.answers.length > 0
            && (
            <AnswerWrapper>
              <h3>
                {data.answers[0].user}
                <Date>4 years ago</Date>
              </h3>
              <BodyAnswer>
                {data.answers[0].body}
              </BodyAnswer>
              <span>
                Helpful?
                <YesNoReport onClick={() => handleYesButton(data._id, data.answers[0]._id)}>
                  {`Yes. ${data.answers[0].yes}`}
                </YesNoReport>
                <YesNoReport onClick={() => handleNoButton(data._id, data.answers[0]._id)}>
                  {`No. ${data.answers[0].no}`}
                </YesNoReport>
              </span>
            </AnswerWrapper>
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
