/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import AnswerForm from './AnswerForm';

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
    <div>
      <h3>
        Post Answer
        <span onClick={toggleIsQuestionClicked}>X</span>
      </h3>
      <h3>
        {question.user}
        <span>4 years ago</span>
      </h3>
      <h3>
        {question.body}
      </h3>
      {
        question.answers.length > 0 && (
          question.answers.map((answer) => (
            <div key={`${answer._id}`}>
              <h4>
                {answer.user}
              </h4>
              <h5>
                {answer.body}
              </h5>
              <span>
                Helpful?
                <span onClick={() => props.handleYesButton(question._id, answer._id)}>
                  {`Yes. ${answer.yes}`}
                </span>
                <span onClick={() => props.handleNoButton(question._id, answer._id)}>
                  {`No. ${answer.no}`}
                </span>
              </span>
            </div>
          ))
        )
      }
      <AnswerForm
        getDatabase={getDatabase}
        question_id={currentQuestion._id}
        toggleIsQuestionClicked={toggleIsQuestionClicked}
      />
    </div>
  );
};

export default PostAnswer;
