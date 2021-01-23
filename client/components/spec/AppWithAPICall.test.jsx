/* eslint-disable no-undef */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/';
import '@babel/polyfill';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../App';
import fakeData from './fakeData';

const server = setupServer(
  rest.get('/api/products/1/qna', (req, res, ctx) => res(ctx.json(fakeData))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Should load the content properly with the API GET call', async () => {
  render(<App />);
  await waitFor(() => screen.getByText('Question & Answers'));
  expect(screen.getByText('CloverJoy')).toBeInTheDocument();
  expect(screen.getByText('Another CloverJoy')).toBeInTheDocument();
  expect(screen.getByText('BillyJoe')).toBeInTheDocument();
});
