import React from 'react'
import { render, screen } from '@testing-library/react'
import About from '../About'

test('About us page should render', ()=>{
    render(<About />)
    const aboutElement = screen.getByTestId('about-1')
    expect(aboutElement).toBeInTheDocument();
})
