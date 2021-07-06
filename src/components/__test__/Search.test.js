import React from 'react'
import { render, screen} from '@testing-library/react';
import Search from '../Search';

test("should render search component", () => {
  render(<Search/>)
  const searchEl = screen.getByTestId('search-1')
  expect(searchEl).toBeInTheDocument();
})

test('check if search input exist', () => {
  render(<Search />);
  const inputEl = screen.getByTestId("input-1");
  expect(inputEl).toHaveAttribute("type", "text");
  expect(inputEl).toBeInTheDocument()
  const selecttEl = screen.getByTestId("select")
  expect(selecttEl).toBeInTheDocument()
});

