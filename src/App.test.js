import { render, screen } from '@testing-library/react';
import React from 'react';
import Router from '../src/app/Router';

test('renders Moments', () => {
  render(<Router />);
  expect(screen.getByText(/moments/i), {}).toBeInTheDocument();
});
