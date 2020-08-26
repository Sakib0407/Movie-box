import React from 'react'
import useMovieFetch from './hooks/useMovieFetch'

const Movie = ( {movieId} ) => {
    console.log(movieId)
    
    const [state, loading,  error ] = useMovieFetch(movieId)
    return (
        <div>
            Movie : {movieId}
        </div>
    )
}

export default Movie
