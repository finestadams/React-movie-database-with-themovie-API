import React from 'react'
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import DiscoverySearch from '../DiscoverySearch';
import '@testing-library/react/dont-cleanup-after-each'

test("should render search component", () => {
  render(<DiscoverySearch/>)
})

test('click', () => {
    render(
      <div>
        <label htmlFor="popular">Popular</label>
        <input id="popular" type="checkbox" />
      </div>,
    )
    userEvent.click(screen.getByText('Popular'))
    expect(screen.getByLabelText('Popular')).toBeChecked()
  })

  test('Newest', () => {
    render(
      <div>
        <label htmlFor="newest">Newest</label>
        <input id="newest" type="checkbox" />
      </div>,
    )
    expect(screen.getByLabelText('Newest')).toBeInTheDocument()
  })

 
  test('selectOptions', () => {
    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>,
    )
    userEvent.selectOptions(screen.getByRole('listbox'), ['1', '3'])
    expect(screen.getByRole('option', {name: 'A'}).selected).toBe(true)
    expect(screen.getByRole('option', {name: 'B'}).selected).toBe(false)
    expect(screen.getByRole('option', {name: 'C'}).selected).toBe(true)
  })