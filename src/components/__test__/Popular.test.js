import React from 'react'
import { render} from '@testing-library/react'
import Popular from './../Popular';
import '@testing-library/react/dont-cleanup-after-each'

test('Renders without crashing', ()=>{
    render(<Popular />)
})

test(' props works', () => {
    render (<Popular discover = {[]} />)
})


test('render no discovered movies when there are no movies', () => {
    const {getByText} = render(<Popular />);
    expect(getByText(/No Popular Movies/i)).toBeInTheDocument()
})
