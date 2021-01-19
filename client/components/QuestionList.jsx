/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import PostAnswer from './PostAnswer';

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
  const [isQuestionClicked, setIsQuestionClicked] = useState(false);
  useEffect(() => {
    setData(props.list);
  });
  const toggleIsQuestionClicked = () => {
    setIsQuestionClicked(!isQuestionClicked);
  };
  const handleClick = (idx) => {
    setQuestion(datas[idx]);
    toggleIsQuestionClicked();
  };
  if (!isQuestionClicked) {
    return (
      datas.slice(0, 10).map((data, idx) => (
        <div key={`${data._id}`}>
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
                <span>
                  {`Yes. ${data.answers[0].yes}`}
                </span>
                <span>
                  {`No. ${data.answers[0].no}`}
                </span>
              </span>
            </div>
            )
          }
        </div>
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
      />
    );
  }
  return (
    <h1>Your react is GG</h1>
  );
};

export default QuestionList;
