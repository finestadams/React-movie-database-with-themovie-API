import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

test('About us page should render', ()=>{
    render(<Footer />)
    const footerElement = screen.getByTestId('footer-1')
    expect(footerElement).toBeInTheDocument();
})
