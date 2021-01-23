/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import PostAnswer from '../PostAnswer';
import fakeData from './fakeData';

describe('PostAnswer', () => {
  beforeEach(() => {
    render(<PostAnswer data={fakeData[2]} currentQuestion={fakeData[2]} />);
  });
  test('Should render the Post Answer and Answer Form with the correct props', () => {
    expect(screen.getByText('BillyJoe')).toBeInTheDocument();
    expect(screen.getByText('So this is for the test')).toBeInTheDocument();
    expect(screen.getByText('AnotherBilly')).toBeInTheDocument();
  });
  test('should not break the structure of the form upon rendering', () => {
    expect(screen.getByText('Required fields are marked with *')).toBeInTheDocument();
    expect(screen.getByText('Answer*')).toBeInTheDocument();
    expect(screen.getByText('Maximum of 255 characters.')).toBeInTheDocument();
    expect(screen.getByText('Nickname*')).toBeInTheDocument();
  });
});
