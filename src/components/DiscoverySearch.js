import React from 'react'
import { PropTypes } from 'prop-types';

const DiscoverySearch = (props) => {
   
    return (
      
        <div className="catalog__nav">
            <div className="catalog__select-wrap">
                <select className="catalog__select" name="genres" onChange = {(event) => props.setGenre(event.target.value)} >
                <option value={""}>{"All Genres"}</option>
                <option value={28}>Action</option>
                <option value={12}>Adventure</option>
                <option value={16}>Animation</option>
                <option value={35}>Comedy</option>
                <option value={80}>Crime</option>
                <option value={99}>Documentary</option>
                <option value={18}>Drama</option>
                <option value={10751}>Family</option>
                <option value={14}>Fantasy</option>
                <option value={36}>History</option>
                <option value={27}>Horror</option>
                <option value={10402}>Music</option>
                <option value={9648}>Mystery</option>
                <option value={10749}>Romance</option>
                <option value={878}>Sci Fic</option>
                <option value={10770}>TV Movie</option>
                <option value={53}>Thriller</option>
                <option value={10752}>War</option>
                <option value={37}>Western</option>
                    {/* {
                     Array.from(props.genre.map( (g, index) => {
                         console.log(" this is g",g, index)
                        return(<option key = {index} value={g.id} data-select2-id="select2-data-3-n56x">{g.name}</option>)
                     }))

                    } */}
                </select>
                <select className="catalog__select" name="years" onChange = {(event) => {
                     const [gte, lte] = event.target.value.split(",");
                     props.setGte(gte), props.setLte(lte)
                }}>
                    <option value="">All the years</option>
                    <option value={`1950-01-01,1959-12-31`}> {`'50s`}</option>
                    <option value={`1960-01-01,1969-12-01`}>{`'60s`}</option>
                    <option value={`1970-01-01,1979-12-01`}>{`'70s`}</option>
                    <option value={`1980-01-01,1989-12-01`}>{`'80s`}</option>
                    <option value={`1990-01-01,1999-12-01`}>{`'90s`}</option>
                    <option value={`2000-01-01,2020-12-01`}>{`2000-20`}</option>
                    <option value={`2021-01-01,2021-12-01`}>{`2021`}</option>
                </select>
            </div>
            <div className="slider-radio" onChange = {(event) => props.setPopularDe(event.target.value)} >
                <input type="radio" name="grade" id="popular" />
                <label htmlFor="popular" value="popularity.desc">Popular</label>
                <input type="radio" name="grade" id="newest" value="" />
                <label htmlFor="newest" >Newest</label>
                <div className="sliding-piece" style={{position: "absolute",
                    transition: "width 0.2s ease 0s, height 0.2s ease 0s, top 0.2s ease 0s, left 0.2s ease 0s",
                    opacity: "0",
                    left: "5px", 
                    top: "5px",
                    width: "79.4531px",
                    height: "30px"}}>
                </div>
            </div>
            {/* <div className="slider-radio">
                <input type="radio" name="grade" id="featured" checked="checked" /><label htmlFor="featured">Featured</label>
                <input type="radio" name="grade" id="popular" /><label htmlFor="popular">Popular</label>
                <input type="radio" name="grade" id="newest" /><label htmlFor="newest">Newest</label>
                <div className="sliding-piece" style={{position: "absolute", transition: "width 0.2s ease 0s", height: "0.2s ease 0s", top: "0.2s ease 0s", left: "0.2s ease 0s", opacity: "0",
                   width: "79.4531px"}}></div>
            </div> */}
        </div>
    
    )
}

DiscoverySearch.propTypes = {
    setSearchValue: PropTypes.any,
    setPopularDe: PropTypes.any,
    setGte: PropTypes.any,
    setLte: PropTypes.any,
    setGenre: PropTypes.any,
    value: PropTypes.any,
    handleSelect: PropTypes.func,
    mapObject: PropTypes.func,
    gte: PropTypes.any,
    lte: PropTypes.any,
}
export default DiscoverySearch