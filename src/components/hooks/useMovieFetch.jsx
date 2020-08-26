import React, { useCallback, useState ,useEffect } from 'react'
import { API_URL , API_KEY } from '../../config';

const useMovieFetch = ( movieId ) => {
  
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = useCallback( async () => {
        setLoading(true)
        setError(false)
        try{
        const endPoint =`${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        const credits =`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
        const result = await (await fetch(endPoint)).json()
        const creditsResult = await (await fetch(credits)).json()
        const directors = creditsResult.crew.filter(
            member => member.job === 'Director'
          );
    
          setState({
            ...result,
            actors: creditsResult.cast,
            directors,
          })
        }
        catch (error)
        {
            setError(error)
        }
        setLoading(false)
    },[movieId])


useEffect(() => {
    fetchData();
}, [fetchData])

return [state, loading, error]
}
export default useMovieFetch;    
  
