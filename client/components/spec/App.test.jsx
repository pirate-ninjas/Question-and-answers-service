/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/';
import App from '../App';
import fakeData from './fakeData';

describe('App', () => {
  beforeEach(() => {
    const test = true;
    render(<App test={test} testData={fakeData} />);
  });
  test('Should render the main App with a correct content', () => {
    expect(screen.getByText('Question & Answers')).toBeInTheDocument();
    expect(screen.getByText('Ask a question')).toBeInTheDocument();
    expect(screen.getByText('Load More')).toBeInTheDocument();
  });
  test('It should render Question form correctly when the Ask A question button is clicked', () => {
    fireEvent.click(screen.getByText('Ask a question'));
    expect(screen.getByText('Required fields are marked with *')).toBeInTheDocument();
    expect(screen.getByText('I agree to the terms & conditions')).toBeInTheDocument();
  });
  test('It should render Question form correctly when the Ask A question button is clicked', () => {
    fireEvent.click(screen.getByText('Ask a question'));
    expect(screen.getByText('Required fields are marked with *')).toBeInTheDocument();
    expect(screen.getByText('I agree to the terms & conditions')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Post a Question'));
    expect(screen.getByText('Please insert the required field!')).toBeInTheDocument();
  });
});
