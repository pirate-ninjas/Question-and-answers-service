/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AnswerForm from './AnswerForm';

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  position: sticky;
`;
const Xbutton = styled.button`
  :hover {
    cursor: pointer;
  };
  background-color: gray;
  border: none;
  color: white;
  padding: 7px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  font-size: 14px;
  margin-left: 80%;
  border-radius: 50%;
`;
const Title = styled.h3`
  font-weight: normal;
  margin-bottom: 2em;
`;
const Date = styled.span`
  margin-left: 0.2em;
  font-weight: normal;
  font-size:  16px;
`;

const QuestionAndUser = styled.h2`
  margin-left: 0.5em;
`;

const AnswerBody = styled.h3`
  font-weight: lighter;
`;

const AnswerWrapper = styled.div`
  margin-left: 1em;
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
const HowManyAnswers = styled.span`
  margin-left: 78%;,
  font-weight: normal;
`;
const Answers = styled.span`
  margin-left: 83%;,
  font-weight: normal;
`;

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
        <Date>4years ago</Date>
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
              </h3>
              <AnswerBody>
                {answer.body}
              </AnswerBody>
              <span>
                Helpful?
                <YesNoReport onClick={() => props.handleYesButton(question._id, answer._id)}>
                  {`Yes. ${answer.yes}`}
                </YesNoReport>
                <YesNoReport onClick={() => props.handleNoButton(question._id, answer._id)}>
                  {`No. ${answer.no}`}
                </YesNoReport>
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
