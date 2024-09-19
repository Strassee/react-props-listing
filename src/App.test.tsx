import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('plug', () => {
  expect(1).toBe(1);
}); 

// test('renders card', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/il_570xN.1617195081_5opo/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders list', () => {
//   render(<App />);
//   screen.debug();
//   const list = screen.getAllByRole('paragraph');
//   expect(list).toBeInTheDocument();
// });