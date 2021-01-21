import styled from 'styled-components';

const QuestionListStyle = {
  Wrapper: styled.section`
  border-top: 1px solid black;
  margin-top: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`,
  AnswerButton: styled.button`
  font-size: 16px;
  margin-top: 2em;
  margin-left: 1em;
  padding: 0.25em 0.50em;
  border: 0.25px solid black;
  background: white;
  cursor: pointer;
`,
  BodyQuestion: styled.h2`
  :hover {
  text-decoration: underline;
  cursor: pointer;
}
`,
  BodyAnswer: styled.h2`
  font-weight: normal;
}
`,
  AnswerWrapper: styled.div`
  margin-left: 1em;
`,
  Date: styled.div`
  font-weight: normal;
  font-size:  16px;
`,
  YesReport: styled.button`
  font-size: 16px;
  margin-top: 2em;
  padding: 0.25em 0.50em;
  border: none;
  background: white;
  color: blue;
  cursor: pointer;
`,
  NoReport: styled.button`
  font-size: 16px;
  margin-top: 2em;
  padding: 0.25em 0.50em;
  border: none;
  background: white;
  color: red;
  cursor: pointer;
`,
  HowManyAnswers: styled.span`
  margin-left: 88%;,
  font-weight: normal;
`,
  Answers: styled.span`
  margin-left: 91%;,
  font-weight: normal;
`,
};

export default QuestionListStyle;
