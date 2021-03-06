import React, { useState } from 'react';
import {
  API_URL,
  API_KEY,

  POSTER_SIZE,
 
  IMAGE_BASE_URL
} from '../config';


import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import useLatestFetch from './hooks/useLatestFetch'
import noImage from './images/no_image.jpg'
import BarLoader from "react-spinners/BarLoader";
import SmallRow from './elements/SmallRow';

const Latest = () => {
  const [{state , loading , error }, fetchMovies] =useLatestFetch()
  const [searchTerm, setSearchTerm] = useState('')
  console.log(state)
  const searchMovies = search => {
    const endpoint = search ? `${API_URL}search/movie?api_key=${API_KEY}&query=${search}`
    : `${API_URL}movie/top_rated?api_key=${API_KEY}`
    setSearchTerm(search)
    fetchMovies(endpoint)
  }

  const loadMoreMovies = ()=> {

  const searchPoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${state.currentPage + 1 }`
  const loadPoint =   `${API_URL}movie/top_rated?api_key=${API_KEY}&page=${state.currentPage + 1 }`
  const endpoint = searchTerm ? searchPoint : loadPoint ;
  fetchMovies(endpoint)
  }


  if(!state.movies[0]) return (
    <>
    <div  className='flex justify-center flex-col items-center pt-32 pb-110'>
    <BarLoader
      size={50}
      color={"#4f8a8b"}
      loading={true}
    />
    <SmallRow />
    </div>
  </>
  )
  
  
  return(
  <>

  <SearchBar callBack={searchMovies} />
  <Grid header={ searchTerm ? 'Search Result' : 'Top Rated'}>
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
        count={movie.vote_count}
        popularity={movie.popularity}
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
export default Latest;
