/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import moment from 'moment';
import QuestionListStyle from './style/QuestionList';
import PostAnswer from './PostAnswer';

const {
  Wrapper,
  AnswerButton,
  BodyQuestion,
  BodyAnswer,
  AnswerWrapper,
  Date,
  YesReport,
  HowManyAnswers,
  Answers,
  NoReport,
} = QuestionListStyle;

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
    props.handleAnswerClicked();
  };
  const handleClick = (idx) => {
    // I need to know the exact coordinate on proxy
    if (!props.test) {
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
    setIndex(idx);
    setQuestion(datas[idx]);
    toggleIsQuestionClicked();
  };
  const handleYesButton = (id, aid) => {
    const data = { _id: id, _aid: aid };
    Axios.patch('/api/products/1/qna/answer/yes', data)
      .then(() => {
        props.getDatabase();
        document.getElementById(`yes ${aid}`).setAttribute('disabled', 'true');
        document.getElementById(`no ${aid}`).setAttribute('disabled', 'true');
      })
      .catch((err) => console.log(err));
  };
  const handleNoButton = (id, aid) => {
    const data = { _id: id, _aid: aid };
    Axios.patch('/api/products/1/qna/answer/no', data)
      .then(() => {
        props.getDatabase();
        document.getElementById(`no ${aid}`).setAttribute('disabled', 'true');
        document.getElementById(`yes ${aid}`).setAttribute('disabled', 'true');
      })
      .catch((err) => console.log(err));
  };
  if (!isQuestionClicked && !props.Load) {
    return (
      datas.slice(0, 10).map((data, idx) => (
        <Wrapper key={`${data._id}`}>
          <h3>
            {data.user}
            <Date>{moment(data.createdAt).fromNow()}</Date>
            <Answers>
              {data.answers.length}
            </Answers>
            <br />
            <HowManyAnswers>
              Answers
            </HowManyAnswers>
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
                <Date>{moment(data.answers[0].createdAt).fromNow()}</Date>
              </h3>
              <BodyAnswer>
                {data.answers[0].body}
              </BodyAnswer>
              <span>
                Helpful?
                <span>Yes. </span>
                <YesReport id={`yes ${data.answers[0]._id}`} onClick={() => handleYesButton(data._id, data.answers[0]._id)}>
                  {`${data.answers[0].yes}`}
                </YesReport>
                <span>No. </span>
                <NoReport id={`no ${data.answers[0]._id}`} onClick={() => handleNoButton(data._id, data.answers[0]._id)}>
                  {`${data.answers[0].no}`}
                </NoReport>
              </span>
            </AnswerWrapper>
            )
          }
        </Wrapper>
      ))
    );
  }
  if (!isQuestionClicked && props.Load) {
    return (
      datas.map((data, idx) => (
        <Wrapper key={`${data._id}`}>
          <h3>
            {data.user}
            <Date>{moment(data.createdAt).fromNow()}</Date>
            <Answers>
              {data.answers.length}
            </Answers>
            <br />
            <HowManyAnswers>
              Answers
            </HowManyAnswers>
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
                <Date>{moment(data.answers[0].createdAt).fromNow()}</Date>
              </h3>
              <BodyAnswer>
                {data.answers[0].body}
              </BodyAnswer>
              <span>
                Helpful?
                <span>Yes. </span>
                <YesReport id={`yes ${data.answers[0]._id}`} onClick={() => handleYesButton(data._id, data.answers[0]._id)}>
                  {`${data.answers[0].yes}`}
                </YesReport>
                <span>No. </span>
                <NoReport id={`no ${data.answers[0]._id}`} onClick={() => handleNoButton(data._id, data.answers[0]._id)}>
                  {`${data.answers[0].no}`}
                </NoReport>
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
