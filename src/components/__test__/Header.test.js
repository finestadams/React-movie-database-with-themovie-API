import React from 'react'
import { render, screen} from '@testing-library/react'
import Header from './../Header';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/react/dont-cleanup-after-each'

test('Renders without crashing', ()=>{
    render(
        <MemoryRouter>
             <Header />
        </MemoryRouter>   
    )
})

test('full app rendering/navigating', () => {
    render(<Header />, { wrapper: MemoryRouter })
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/about/i)).toBeInTheDocument()
    expect(screen.getByText(/favourites/i)).toBeInTheDocument()
  })