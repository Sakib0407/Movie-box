import React, { useState } from 'react';
import {
  API_URL,
  API_KEY,
  API_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE, 
  IMAGE_BASE_URL
} from '../config';


import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import useHomeFetch from './hooks/useHomeFetch'
import noImage from './images/no_image.jpg'
import BarLoader from "react-spinners/BarLoader";

const Home = () => {
  const [{state , loading , error }, fetchMovies] =useHomeFetch()
  const [searchTerm, setSearchTerm] = useState('')
  console.log(state)

  const loadMoreMovies = ()=> {

  const searchPoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${state.currentPage + 1 }`
  const loadPoint =   `${API_URL}movie/popular?api_key=${API_KEY}&page=${state.currentPage + 1 }`
  const endpoint = searchTerm ? searchPoint : loadPoint ;
  fetchMovies(endpoint)
  }


  if(!state.movies[0]) return (
    <>
    <div  className='flex justify-center items-center pt-64'>
    <BarLoader
      size={50}
      color={"#4f8a8b"}
      loading={true}
    />
    </div>
  </>
  )
  
  
  return(
  <>

  <SearchBar />
  <Grid header={ searchTerm ? 'Search Result' : 'Popular Movies'}>
    {
      state.movies.map( movie => (
        <MovieThumb 
        key={movie.id}
        clickable
        image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : noImage}
        movieId={movie.id}
        movieName={movie.original_title}
        ratings={movie.vote_average}
        date={movie.release_date}
        />
      )
      )
    }
   
    </Grid> 
    <div className=" flex justify-center items-center">
    { loading &&  <BarLoader
      size={50}
      color={"#4f8a8b"}
      loading={true}
    /> }
    </div>
 { state.currentPage < state.totalPages && !loading &&( <LoadMoreBtn text="Load More" callBack={loadMoreMovies} />)}
  </>
  )
  }
export default Home;
