/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
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

const App = (props) => {
  const [datas, setData] = useState([]);
  const [isQuestionClicked, setIsQuestionClicked] = useState(false);
  const [isAnswerClicked, setIsAnswerclicked] = useState(false);
  const [get, setGet] = useState(false);
  const [sort, setSort] = useState('newest-question');
  const [loadMore, setLoadMore] = useState(false);
  const [dataLoading, setdataLoading] = useState(true);
  const [productId, setProductId] = useState(1);
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
    // This code below is to change the productid for the apicall params
    // setProductId('INSERT ANY NUMBER OR THE DEFAULT IS 1');
    if (props.test === true) {
      setData(props.testData);
      setdataLoading(false);
    }
    if (sort === 'newest-question' && !props.test) {
      Axios.get(`/api/products/${productId}/qna`)
        .then((res) => {
          setData(res.data);
          setdataLoading(false);
        })
        .catch((err) => console.log(err));
    }
    if ((sort === 'most-answered' || sort === 'most-helpful-answers') && !props.test) {
      Axios.get(`/api/products/${productId}/qna`)
        .then((res) => {
          let currentData = [...res.data];
          currentData = currentData.sort((a, b) => b.answers.length - a.answers.length);
          setData(currentData);
          setdataLoading(false);
          console.log(currentData);
        })
        .catch((err) => console.log(err));
    }
    if (sort === 'answer-needed' && !props.test) {
      Axios.get(`/api/products/${productId}/qna`)
        .then((res) => {
          let currentData = [...res.data];
          currentData = currentData.sort((a, b) => a.answers.length - b.answers.length);
          setData(currentData);
          setdataLoading(false);
          console.log(currentData);
        })
        .catch((err) => console.log(err));
    }
  }, [get]);
  if (dataLoading) {
    return (
      <div>Loading ...</div>
    );
  }
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
        test={props.test || false}
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
