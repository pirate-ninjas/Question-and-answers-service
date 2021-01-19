/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Axios from 'axios';

const QuestionForm = (props) => {
  const [body, setBody] = useState('');
  const [user, setUser] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const handleClick = () => {
    const request = {
      body,
      user,
      location,
      email,
      questionid: 1,
    };
    // eslint-disable-next-line no-console
    console.log(request);
    Axios.post('/api/products/1/qna', request)
      .then((result) => {
        console.log(result);
        props.getDatabase();
        props.handleQuestionButton();
      });
  };
  return (
    <div>
      <label htmlFor="body">
        Question
        <span onClick={props.handleQuestionButton}>X</span>
        <textarea name="body" value={body} onChange={(e) => setBody(e.target.value)} />
      </label>
      <br />
      <label htmlFor="nickname">
        Nickname*
        <input type="text" name="user" value={user} onChange={(e) => setUser(e.target.value)} />
      </label>
      <br />
      <label htmlFor="location">
        Location
        <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <br />
      <label htmlFor="email">
        Email*
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label htmlFor="agree">
        <input type="checkbox" name="agree" value="agree" />
        I agree to the terms & conditions
      </label>
      <br />
      <button type="button" onClick={() => handleClick()}>
        Post a Question
      </button>
    </div>
  );
};

export default QuestionForm;
