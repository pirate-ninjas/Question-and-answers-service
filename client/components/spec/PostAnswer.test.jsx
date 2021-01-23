/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import PostAnswer from '../PostAnswer';

describe('PostAnswer', () => {
  beforeEach(() => {
    const fakeData = {
      _id: '6009e570c7ae5b11e67db791',
      questionid: 1,
      user: 'CloverJoyy',
      location: '',
      email: 'email@email.com',
      body: 'So this is for the test',
      answers: [
        {
          _id: '6009e570c7ae5b11e67db791',
          questionid: 1,
          user: 'CloverJoy',
          location: '',
          email: 'email@email.com',
          body: 'asdd',
          yes: 1,
          no: 1,
          createdAt: '2021-01-21T20:34:56.184Z',
          updatedAt: '2021-01-21T20:34:56.184Z',

        }],
      createdAt: '2021-01-21T20:34:56.184Z',
      updatedAt: '2021-01-21T20:34:56.184Z',
      _v: 0,
    };
    render(<PostAnswer data={fakeData} currentQuestion={fakeData} />);
  });
  test('Should render the Post Answer and Answer Form with the correct props', () => {
    expect(screen.getByText('CloverJoyy')).toBeInTheDocument();
    expect(screen.getByText('So this is for the test')).toBeInTheDocument();
    expect(screen.getByText('CloverJoy')).toBeInTheDocument();
  });
  test('should not break the structure of the form upon rendering', () => {
    expect(screen.getByText('Required fields are marked with *')).toBeInTheDocument();
    expect(screen.getByText('Answer*')).toBeInTheDocument();
    expect(screen.getByText('Maximum of 255 characters.')).toBeInTheDocument();
    expect(screen.getByText('Nickname*')).toBeInTheDocument();
  });
});
