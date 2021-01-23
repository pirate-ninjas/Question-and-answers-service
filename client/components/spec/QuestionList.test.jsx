/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import '@babel/polyfill';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/';
import QuestionList from '../QuestionList';
import fakeData from './fakeData';

// jest.mock('axios');

describe('QuestionList', () => {
  beforeEach(() => {
    const test = true;
    render(<QuestionList test={test} list={fakeData} handleAnswerClicked={() => console.log('If you see this, this test is most likely working!')} />);
  });
  test('Should render the QuestionList with the correct props', () => {
    expect(screen.getByText('CloverJoy')).toBeInTheDocument();
    expect(screen.getByText('Another CloverJoy')).toBeInTheDocument();
    expect(screen.getByText('This is the question')).toBeInTheDocument();
  });
  test('When a question is clicked, it should render the PostAnswer section with the following question', () => {
    fireEvent.click(screen.getByText('asdd'));
    expect(screen.getByText('CloverJoy')).toBeInTheDocument();
    expect(screen.getByText('Required fields are marked with *')).toBeInTheDocument();
    fireEvent.click(screen.getByText('X'));
    fireEvent.click(screen.getByText('This is the question'));
    expect(screen.getByText('Another CloverJoy')).toBeInTheDocument();
    expect(screen.getByText('Required fields are marked with *')).toBeInTheDocument();
  });
});
