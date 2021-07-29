import React from 'react'
import { render} from '@testing-library/react'
import App from './../../App';
import Header from './../Header';
import Discovery from './../Discovery';
import Popular from './../Popular';
import TopMovies from './../TopMovies'
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/react/dont-cleanup-after-each'

test('Renders without crashing', ()=>{
    render(
        <MemoryRouter>
             <App />
        </MemoryRouter>,
        <MemoryRouter>
             <Header />
        </MemoryRouter>,
         <MemoryRouter>
             <Discovery />
        </MemoryRouter>
    )
  
})

test('full app rendering/navigating', () => {
    render(<App />, { wrapper: MemoryRouter })
    render(<Header />, { wrapper: MemoryRouter })
    render(<Discovery />, { wrapper: MemoryRouter })
    render(<Popular />, { wrapper: MemoryRouter })
    render(<TopMovies />, { wrapper: MemoryRouter })
  })