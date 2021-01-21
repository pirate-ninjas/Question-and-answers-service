/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;
const Description = styled.h5`
  font-weight: normal;
  margin-left: 1em;
`;
const DescriptionSpan = styled.span`
  font-weight: normal;
  margin-left: 1em;
`;
const LabelLeft = styled.label`
  font-weight: bold;
  margin-left: 1em;
`;
const LabelRight = styled.label`
  font-weight: bold;
  margin-left: 32%;
`;
const LabelSeperator = styled.div`
  margin-left: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const FormSeperator = styled.div`
  border-top: 0.5px solid black;
  margin-top: 1em;
  margin-bottom: 1em;
  padding-top: 1em;
  padding-bottom: 1em;
`;
const QuestionBody = styled.textarea`
  width: 90%;
  height: 100px;
`;
const FormInput = styled.input`
  width: 40%;
  height: 25px;
  margin-left: 1em;
  margin-top: 1em;
`;

const Submit = styled.button`
:hover {
  cursor: pointer;
  font-size: 1em;
  margin-left: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  border: 2px solid green;
  background: white;
  color: green;
};
font-size: 1em;
margin-left: 1em;
padding-top: 0.5em;
padding-bottom: 0.5em;
border: 2px solid green;
background: green;
color: white;
`;

const Invalid = styled.span`
  margin-left: 55%;
  color: red;
`;

const AnswerForm = (props) => {
  // eslint-disable-next-line camelcase
  const { question_id } = props;
  const [body, setBody] = useState('');
  const [user, setUser] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(true);
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
    if (request.body && request.user && request.email) {
      setValid(true);
      Axios.post('/api/products/1/qna/answer', request)
        .then((result) => {
          console.log(result);
          props.getDatabase();
          props.toggleIsQuestionClicked();
        });
    }
    setValid(false);
  };
  return (
    <Wrapper>
      <Description>
        Required fields are marked with *
        {
        !valid && (
          <Invalid>Please insert the required field!</Invalid>
        )
      }
      </Description>
      <FormSeperator>
        <LabelLeft htmlFor="body">
          Answer*
          <DescriptionSpan>Maximum of 255 characters.</DescriptionSpan>
          <LabelSeperator>
            <QuestionBody
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Answer the Question..."
            />
          </LabelSeperator>
        </LabelLeft>
      </FormSeperator>
      <FormSeperator>
        <LabelLeft htmlFor="nickname">
          Nickname*
        </LabelLeft>
        <LabelRight htmlFor="location">
          Location
        </LabelRight>
        <br />
        <FormInput
          type="text"
          name="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Example: jacky123"
        />
        <FormInput
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Example: Seattle,WA"
        />
      </FormSeperator>
      <FormSeperator>
        <LabelLeft htmlFor="email">
          Email*
          <br />
          <FormInput
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Example: youremail@gmail.com"
          />
        </LabelLeft>
      </FormSeperator>
      <FormSeperator>
        <label htmlFor="agree">
          <input type="checkbox" name="agree" value="agree" />
          I agree to the terms & conditions
        </label>
      </FormSeperator>
      <Submit type="button" onClick={() => handleClick()}>
        Post a Question
      </Submit>
    </Wrapper>
  );
};

export default AnswerForm;
