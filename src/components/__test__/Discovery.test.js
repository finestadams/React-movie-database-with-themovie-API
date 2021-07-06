import React from 'react'
import { render} from '@testing-library/react'
import Discovery from './../Discovery';
import '@testing-library/react/dont-cleanup-after-each'

test('Renders without crashing', ()=>{
    render(<Discovery />)
})

test(' props works', () => {
    render (<Discovery discover = {[]} />)
})


test('render no discovered movies when there are no movies', () => {
    const {getByText} = render(<Discovery />);
    expect(getByText(/No Discovered Movies/i)).toBeInTheDocument()
})