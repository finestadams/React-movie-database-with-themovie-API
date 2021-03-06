import React from 'react';
import '../select2.min.css'
import PropTypes from 'prop-types';

const Search = (props) => {
    return (
        <>
        <div className="catalog__nav" data-testid="search-1" >
            <div className="catalog__select-wrap">
                <select data-testid="select" onChange = {(event) => props.handleGenre(event)} className="catalog__select" name="genres" > 
                <option value={""} data-testid="select-option">{"All Genres"}</option>
                    {props.movies && Array.from (new Set (props.movies.map( m => m.media_type))).map(media_type => { 
                            return (<option  key ={media_type} value={media_type}>{`All ${media_type}`}</option>)  
                    })}
                </select>
            </div>
            <div className="slider-radio">
                    <input className="header__form-input searchColor" type="text"
                    value={props.value} onChange={(event) => props.setSearchValue(event.target.value)}
                     placeholder="I'am looking for"
                     data-testid="input-1"
                     />
            </div>
        </div>
       
        </>
    )
}

Search.propTypes = {
    setSearchValue: PropTypes.any,
    value: PropTypes.string,
    handleGenre: PropTypes.func,
    handleYear: PropTypes.func,
    movies: PropTypes.any,
    id: PropTypes.number,
  }


export default Search;