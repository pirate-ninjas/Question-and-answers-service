/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import AnswerForm from './AnswerForm';
import PostAnswerStyle from './style/PostAnswer';

const {
  ModalContent,
  Xbutton,
  Title,
  Date,
  QuestionAndUser,
  AnswerBody,
  AnswerWrapper,
  YesReport,
  NoReport,
  HowManyAnswers,
  Answers,
} = PostAnswerStyle;

const PostAnswer = (props) => {
  const {
    currentQuestion, getDatabase, toggleIsQuestionClicked, data,
  } = props;
  const [question, setQuestion] = useState({
    id: 'asdd',
    user: 'asdd',
    body: 'asdd',
    answers: [
      {
        user: '', body: '', yes: 0, no: 0,
      }],
  });
  useEffect(() => {
    setQuestion(data);
  });
  return (
    <ModalContent>
      <Title>
        Post Answer
        <Xbutton onClick={toggleIsQuestionClicked}>X</Xbutton>
      </Title>
      <QuestionAndUser>
        {question.user}
        <Date>{moment(question.createdAt).fromNow()}</Date>
        <br />
        <Answers>
          {question.answers.length}
        </Answers>
        <br />
        <HowManyAnswers>
          Answers
        </HowManyAnswers>
      </QuestionAndUser>
      <QuestionAndUser>
        {question.body}
      </QuestionAndUser>
      {
        question.answers.length > 0 && (
          question.answers.map((answer) => (
            <AnswerWrapper key={`${answer._id}`}>
              <h3>
                {answer.user}
                <Date>{moment(answer.createdAt).fromNow()}</Date>
              </h3>
              <AnswerBody>
                {answer.body}
              </AnswerBody>
              <span>
                Helpful?
                <span>Yes. </span>
                <YesReport id={`yes ${answer._id}`} onClick={() => props.handleYesButton(question._id, answer._id)}>
                  {`${answer.yes}`}
                </YesReport>
                <span>No. </span>
                <NoReport id={`no ${answer._id}`} onClick={() => props.handleNoButton(question._id, answer._id)}>
                  {`${answer.no}`}
                </NoReport>
              </span>
            </AnswerWrapper>
          ))
        )
      }
      <AnswerForm
        getDatabase={getDatabase}
        question_id={currentQuestion._id}
        toggleIsQuestionClicked={toggleIsQuestionClicked}
      />
    </ModalContent>
  );
};

export default PostAnswer;
