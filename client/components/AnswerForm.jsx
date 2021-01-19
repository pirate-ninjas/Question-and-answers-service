/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Axios from 'axios';

const AnswerForm = (props) => {
  // eslint-disable-next-line camelcase
  const { question_id } = props;
  const [body, setBody] = useState('');
  const [user, setUser] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const handleClick = () => {
    const request = {
      _id: question_id,
      body,
      user,
      location,
      email,
      questionid: 1,
    };
    // eslint-disable-next-line no-console
    console.log(question_id);
    console.log(request);
    Axios.post('/api/products/1/qna/answer', request)
      .then((result) => {
        console.log(result);
        props.getDatabase();
        props.toggleIsQuestionClicked();
      });
  };
  return (
    <div>
      <label htmlFor="body">
        Answer*
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
        Post answer
      </button>
    </div>
  );
};

export default AnswerForm;
