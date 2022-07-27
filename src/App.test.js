import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Router from '../src/app/Router';

// test('renders Moments', async() => {
//   render(<Router />);
//   expect(await screen.findByText(/moments/i)).toBeInTheDocument();
// });

test('renders Moments', () => {
  let target = screen.findByText(/moments/i)
  fireEvent.load(target);
  expect(target).toBeInTheDocument();
  }
);

