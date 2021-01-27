import styled from 'styled-components';

const AppStyle = {
  Wrapper: styled.section`
  margin: auto;
  width: 85%;
  padding: 10px;
`,
  Qna: styled.h1`
  margin-bottom: 0.5em;
  font-family: 'Roboto', sans-serif;
`,
  AnswerButton: styled.button`
  :hover {
    cursor: pointer;
    font-size: 1em;
    margin-left: 87%;
    padding: 0.7em;
    background: #c7dfd1;
    color: green;
  };
  font-size: 1em;
  margin-left: 87%;
  margin-bottom: 1em;
  padding: 0.7em;
  background: #225c4e;
  color: white;
`,
  SortSpan: styled.span`
  margin-left: 62%;
`,
  HowManyQuestion: styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
`,
  LoadButton: styled.button`
  :hover {
    cursor: pointer;
  };
  font-size: 1em;
  margin-left: 30%;
  margin-bottom: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  border: 2px solid black;
  background: white;
  color: black;
  width: 40%;
`,
};

export default AppStyle;
