import React from 'react'
import { render} from '@testing-library/react'
import MovieList from './../MovieList';
import '@testing-library/react/dont-cleanup-after-each'

test('Renders without crashing', ()=>{
    render(<MovieList />)
})

test(' props works', () => {
    render (<MovieList movies = {[]} />)
})

test('render no movies when there are no movies', () => {
    const {getByText} = render(<MovieList />);
    expect(getByText(/No Movies/i)).toBeInTheDocument()
})