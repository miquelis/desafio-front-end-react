import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pokédex link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokédex/i);
  expect(linkElement).toBeInTheDocument();
});
