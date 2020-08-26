import React from 'react';

// Components

import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Grid from './elements/Grid';
import BarLoader from "react-spinners/BarLoader";


import  useMovieFetch  from './hooks/useMovieFetch';

const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId);

  if (error) return <div>Something went wrong ...</div>;
  if (loading)return(   <BarLoader
  size={50}
  color={"#4f8a8b"}
  loading={true}
/> )

  return (
  <>
    
    <MovieInfo movie={movie} />
    <MovieInfoBar
      time={movie.runtime}
      budget={movie.budget}
      revenue={movie.revenue}
    />
    <Grid header="Actors">
      {movie.actors.map(actor => (
        <Actor key={actor.credit_id} actor={actor} />
      ))}     
    </Grid>
  </>
  )
};

export default Movie;