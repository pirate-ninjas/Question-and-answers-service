/* eslint-disable no-undef */
import React from 'react';
// import axios from 'axios';
import '@babel/polyfill';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import QuestionList from '../QuestionList';

// jest.mock('axios');

describe('QuestionList', () => {
  beforeEach(() => {
    const fakeData = [
      {
        _id: '6009e570c7ae5b11e67db791',
        questionid: 1,
        user: 'CloverJoy',
        location: '',
        email: 'email@email.com',
        body: 'asdd',
        answers: [],
        createdAt: '2021-01-21T20:34:56.184Z',
        updatedAt: '2021-01-21T20:34:56.184Z',
        __v: 0,
      },
      {
        _id: '6009e22da50c18117e7bb492',
        questionid: 1,
        user: 'Another CloverJoy',
        location: '',
        email: 'email@email.com',
        body: 'This is the question',
        answers: [],
        createdAt: '2021-01-21T20:21:01.094Z',
        updatedAt: '2021-01-21T20:21:01.094Z',
        __v: 0,
      },
    ];
    render(<QuestionList list={fakeData} />);
  });
  test('Should render the QuestionList with the correct props', async () => {
    expect(screen.getByText('CloverJoy')).toBeInTheDocument();
    expect(screen.getByText('Another CloverJoy')).toBeInTheDocument();
    expect(screen.getByText('This is the question')).toBeInTheDocument();
  });
});

// it('should render please', async () => {
//   axios.get('/api/products/3/qna')
//     .then((res) => {
//       const { data } = res.data;
//       render(<QuestionList />);
//       screen.debug();
//     })
//     .catch(()=> console.log('cannot get the data'));
// });
