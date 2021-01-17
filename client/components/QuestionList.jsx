import React from 'react';

const QuestionList = (props) => (
  <div>
    <h3>
      {props.user}
      <span>4 years ago </span>
    </h3>
    <h2>Would you please carry the orca?</h2>
    <span>5 answers</span>
    <button type="button">Answer the Question</button>
  </div>
);

export default QuestionList;
