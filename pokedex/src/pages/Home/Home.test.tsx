import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Pokédex link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Pokédex/i);
  expect(linkElement).toBeInTheDocument();
});
