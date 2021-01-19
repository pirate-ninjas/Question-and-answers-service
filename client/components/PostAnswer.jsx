/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import AnswerForm from './AnswerForm';

const PostAnswer = (props) => {
  const { currentQuestion, getDatabase, toggleIsQuestionClicked } = props;
  return (
    <div>
      <h3>
        Post Answer
        <span onClick={toggleIsQuestionClicked}>X</span>
      </h3>
      <h3>
        {currentQuestion.user}
        <span>4 years ago</span>
      </h3>
      <h3>
        {currentQuestion.body}
      </h3>
      {
        currentQuestion.answers.length > 0 && (
          currentQuestion.answers.map((answer) => (
            <div key={answer._id}>
              <h4>
                {answer.user}
              </h4>
              <h5>
                {answer.body}
              </h5>
              <span>
                Helpful?
                <span>
                  {`Yes. ${answer.yes}`}
                </span>
                <span>
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
