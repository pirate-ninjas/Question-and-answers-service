/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import AppStyle from './style/App';
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';

const {
  Wrapper,
  Qna,
  AnswerButton,
  HowManyQuestion,
  SortSpan,
  LoadButton,
} = AppStyle;

const App = () => {
  const [datas, setData] = useState([]);
  const [isQuestionClicked, setIsQuestionClicked] = useState(false);
  const [isAnswerClicked, setIsAnswerclicked] = useState(false);
  const [get, setGet] = useState(false);
  const [sort, setSort] = useState('newest-question');
  const [loadMore, setLoadMore] = useState(false);
  const getDatabase = () => {
    setGet(!get);
  };
  const handleQuestionButton = () => {
    setIsQuestionClicked(!isQuestionClicked);
  };
  const handleAnswerClicked = () => {
    setIsAnswerclicked(!isAnswerClicked);
  };
  const handleSort = (event) => {
    setSort(event.target.value);
    getDatabase();
    console.log(sort);
  };
  const handleLoadMore = () => {
    const button = document.getElementById('loadmorebutton');
    button.style.display = 'none';
    setLoadMore(true);
  };
  useEffect(() => {
    if (sort === 'newest-question') {
      Axios.get('/api/products/1/qna')
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        });
    }
    if (sort === 'most-answered' || sort === 'most-helpful-answers') {
      Axios.get('/api/products/1/qna')
        .then((res) => {
          let currentData = [...res.data];
          currentData = currentData.sort((a, b) => b.answers.length - a.answers.length);
          setData(currentData);
          console.log(currentData);
        });
    }
    if (sort === 'answer-needed') {
      Axios.get('/api/products/1/qna')
        .then((res) => {
          let currentData = [...res.data];
          currentData = currentData.sort((a, b) => a.answers.length - b.answers.length);
          setData(currentData);
          console.log(currentData);
        });
    }
  }, [get]);
  if (isQuestionClicked) {
    return (
      <Wrapper>
        <QuestionForm getDatabase={getDatabase} handleQuestionButton={handleQuestionButton} />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Qna>Question & Answers</Qna>
      <AnswerButton type="button" onClick={() => handleQuestionButton()}>Ask a question</AnswerButton>
      {loadMore && (
        <HowManyQuestion>
            {`1 - ${datas.length} Questions`}
          <SortSpan>
            <span>Sort by: </span>
            <select onChange={handleSort} name="sort">
              <option value="newest-question">Newests Question</option>
              <option value="most-answered">Most Answered</option>
              <option value="answer-needed">Answer Needed</option>
              <option value="most-helpful-answers">Most helpful answers</option>
            </select>
          </SortSpan>
        </HowManyQuestion>
      )}
      {!loadMore && (
        <HowManyQuestion>
          {`1 - 10 of ${datas.length} Questions`}
          <SortSpan>
            <span>Sort by: </span>
            <select onChange={handleSort} name="sort">
              <option value="newest-question">Newests Question</option>
              <option value="most-answered">Most Answered</option>
              <option value="answer-needed">Answer Needed</option>
              <option value="most-helpful-answers">Most helpful answers</option>
            </select>
          </SortSpan>
        </HowManyQuestion>
      )}
      <QuestionList
        getDatabase={getDatabase}
        handleQuestionButton={handleQuestionButton}
        list={datas}
        handleAnswerClicked={handleAnswerClicked}
        Load={loadMore}
      />
      {
        !isAnswerClicked && !loadMore && (
          <LoadButton
            id="loadmorebutton"
            type="button"
            onClick={() => handleLoadMore()}
          >
            Load More
          </LoadButton>
        )
      }
    </Wrapper>
  );
};
export default App;
