import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Search  from './components/Search';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './components/About';
import MovieDetails from './components/MovieDetails';
import PropTypes from 'prop-types';
import HomeSlider from './components/HomeSlider';
import TopMovies from './components/TopMovies';
import Popular from './components/Popular';
import UpcomingDetails from './components/UpcomingDetails';
import PopularDetails from './components/PopularDetails';
import TopRatedDetails from './components/TopRatedDetails';
import DiscoverySearch from './components/DiscoverySearch';
import Discovery from './components/Discovery'
import DiscoveryDetails from './components/DiscoveryDetails'

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('star wars');
  const [isActive, setActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [filteredData,setFilteredData] = useState(movies);
  const [genre, setGenre] = useState(28)
  const [gte, setGte] = useState("2021-01-01")
  const [lte, setLte] = useState("2021-12-31")
  const [discover, setDiscover] = useState([])
  const [popularde, setPopularDe] = useState("popularity.desc")

  const API_KEY = process.env.REACT_APP_API_KEY;

  const getMovie = async (searchValue) => {
		const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchValue}`;
		const response = await fetch(url);
		const responseJson = await response.json();
		if (responseJson.results) {
			setMovies(responseJson.results);
      setFilteredData(responseJson.results);
		}
	};

  const getDiscover = async () => {
    const url = `http://api.themoviedb.org/3/discover/movie/?api_key=${API_KEY}&page=1&primary_release_date.gte=${gte}&primary_release_date.lte=${lte}&with_genres=${genre}&sort_by=${popularde}`;
    const resp = await fetch(url);
    const resJson =  await resp.json();
    if(resJson.results) {
      setDiscover(resJson.results);
    }
  };

  const getUpcoming = async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
    const resp = await fetch(url);
    const resJson =  await resp.json();
    if(resJson.results) {
      setUpcoming(resJson.results);
    }
  };

  const getPopular = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    const resp = await fetch(url);
    const resJson =  await resp.json();
    if(resJson.results) {
      setPopular(resJson.results);
    }
  }
  const getTopRated = async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    const resp = await fetch(url);
    const resJson =  await resp.json();
    if(resJson.results) {
      setTopRated(resJson.results);
    }
  };

useEffect(()=>{
  getUpcoming(upcoming);
  getPopular(popular);
  getTopRated(topRated);
  getDiscover(discover)

}, [genre,gte,lte,popularde])

useEffect(() => {
  const timer = setTimeout(() => {
    getMovie(searchValue);
  }, 5000);
  return () => clearTimeout(timer);
}, [searchValue]);

const MoviesWithId = ({match}) => {
    return(
      <MovieDetails 
      handleFavouritesClick={addFavouriteMovie}
      removeFavouriteMovie = {removeFavouriteMovie}
      movies = {movies.filter((movie) => movie.id == match.params.id)[0]} />
    )
  }  

  const UpcomingWithId = ({match}) => {
    console.log('upcoming id', upcoming)
    return (
    <UpcomingDetails 
      upcoming = {upcoming.filter((upc) => upc.id == match.params.id)[0]} />
    )
  }

  const PopularWithId = ({match}) => {
    return (
    <PopularDetails popular = {popular.filter((popular) => popular.id == match.params.id)[0]} />
    )
  }

  const TopRatedWithId = ({match}) => {
    return (
    <TopRatedDetails topRated = {topRated.filter((tr) => tr.id == match.params.id)[0]} />
    )
  }

  const DiscoverWithId = ({match}) => {
    return (
    <DiscoveryDetails discover = {discover.filter((disc) => disc.id == match.params.id)[0]} />
    )
  }

  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);
		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

  const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

  const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
    console.log(newFavouriteList);
		setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
	};

  const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.id !== movie.id
		);
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

const handleClick = () => {
    setActive(!isActive);
 }
 const handleOpen = () => {
  setOpen(!isOpen);
}

 const handleGenre = (event) => {
  let value = event.target.value;
  let result = [];
  result = filteredData.filter((data) => {
    return data.media_type?.search(value) != -1;
  });
  setMovies(result);
}

const handleYear = (event) => {
  let value = event.target.value;
  let result = [];
  result = filteredData.filter((data) => {
    console.log('this is data', data)
        return data.release_date?.includes(value);
  });
  setMovies(result);
}

const handleSearch= () => {
  console.log("this is the value",searchValue)
}

  return (

      <>
       <BrowserRouter>
        <Header isActive = {isActive} handleClick = {handleClick}
        isOpen = {isOpen} handleOpen = {handleOpen} 
        handleSearch = {handleSearch}
        setSearchValue = {setSearchValue}/>
        <HomeSlider upcoming = {upcoming} />
        <div className="catalog">
          <div className="container">
              <div className="row">
                <div className="col-12">
                  <Switch>
                        <Route path='/search' exact render = {() => <>
                            <div className="col-12 col-xl-6">
                              <h1 className="section__title section__title--head" style={{marginBottom: "30px"}}>Search Catalog</h1>
                            </div>
                            <Search searchValue={searchValue} setSearchValue={setSearchValue}
                            handleGenre = {handleGenre}
                            handleYear = {handleYear}
                            movies = {filteredData}
                            />
                            <div className="row row--grid">
                            { movies.length &&searchValue ? <MovieList movies = {movies} 
                            /> : <div className="row">
                                  <div className="col-sm-12">
                                    <div style={{marginTop: "20px", textAlign: "center", color: "white"}}>
                                        <h1> No Movies</h1>
                                    </div>
                                  </div>
                              </div>}
                            </div>
                        </> } />
                        <Route path="/favourites" exact render = {() => {
                          console.log(favourites, "here");
                          return (<div className="row row--grid">
                          <h1 className="section__title section__title--head">My Favourites</h1>
                             <MovieList movies = {favourites} 
                             /> 
                             </div>)
                        }}/>
                        <Route path="/discoverlists/:id" exact component = {DiscoverWithId} />  
                        <Route path="/about" exact component = {About}/> 
                        <Route path="/movielists/:id" exact component = {MoviesWithId} />  
                        <Route path="/popularlists/:id" exact component = {PopularWithId} /> 
                        <Route path="/topratedlists/:id" exact component = {TopRatedWithId} /> 
                        <Route path="/upcominglists/:id" exact component = {UpcomingWithId} />
                    </Switch>  
                    
                    <Route path='/' exact render = {() => {
                      return(
                      <>
                        <DiscoverySearch genre = {genre} setGenre = {setGenre} 
                        let = {lte} gte={gte}
                        setLte = {setLte} setGte={setGte}
                        popularde={popularde} setPopularDe={setPopularDe}
                        />
                        <div className="row row--grid">
                          <Discovery discover = {discover}  setDiscover = {setDiscover} />
                        </div>
                      </>
                      )}}/>                 
                </div>
              </div>
          </div>
        </div>
        <Route path="/" exact render = {() => {return(<TopMovies topMovies = {topRated} />)}} />
        <Route path="/" exact render = {() => {return( <Popular popularMovies = {popular} />)}} />              
       <Footer/>
       </BrowserRouter> 
    </>
  );
}

App.propTypes = {
  match: PropTypes.object,
}

export default App;
