import styled from 'styled-components';

const PostAnswerStyle = {
  ModalContent: styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`,
  Xbutton: styled.button`
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
`,
  Title: styled.h3`
  font-weight: normal;
  margin-bottom: 2em;
`,
  Date: styled.span`
  margin-left: 0.2em;
  font-weight: normal;
  font-size: 16px;
`,
  QuestionAndUser: styled.h2`
  margin-left: 0.5em;
`,
  AnswerBody: styled.h3`
  font-weight: normal;
`,
  AnswerWrapper: styled.div`
  margin-left: 1em;
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
  margin-left: 78%;,
  font-weight: normal;
`,
  Answers: styled.span`
  margin-left: 83%;,
  font-weight: normal;
`,
};

export default PostAnswerStyle;
