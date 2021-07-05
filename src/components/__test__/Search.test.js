import React from 'react'
import { render, screen, } from '@testing-library/react';
import Search from '../Search';

test("should render search component", () => {
  render(<Search/>)
  const searchEl = screen.getByTestId('search-1')
  expect(searchEl).toBeInTheDocument();

})