import React, {useState , useEffect} from 'react';
import {Link} from '@reach/router'
import Flippy, {FrontSide, BackSide} from 'react-flippy'
import LoadMoreBtn from './LoadMoreBtn'

import styled from 'styled-components'
 
const Background = styled.div`
background : ${props => `linear-gradient( 20deg, black, rgba(0,0,0, 0.5)),url(${props.img})`};
height : 100%;
width : 100%;



` 

const MovieThumb = ({ image , movieId, movieName , ratings, date , count , popularity }) => {
    console.log(ratings)
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 1000;
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    
        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);

    
    return(
         width < breakpoint ? 
         <Flippy
             flipOnHover={false}
             flipOnClick={true}
             
             flipDirection="horizontal" 
             style={{  }} 
            >
                 <FrontSide className='flex w-72 h-120 m-0  p-0 mb-8'>
         <div className='bg-white flex flex-col h-120 rounded-md overflow-hidden shadow-md w-72 mb-12 '>
         
          <img className='w-72 h-84' src={image} alt='image' />
          <div className='pl-4 pt-4 pb-4 '>
              <div className='flex  items-center mt-2'>
              <h3 className='text-gray-500 font-semibold pl-2 pb-2 mt-1'>Rating: {ratings} </h3>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="star w-5 h-5 ml-3 `"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
              </div>
              <div className='h-24'>
              <h1 className='text-xl font-bold pl-2 pb-4 pr-2'>{movieName}</h1>
              </div>
              <div className='bg-background p-2 rounded-full mr-4 ' >
              <h3 className='text-gray-800 font-semibold text-center '>Release Date- {date} </h3> 
              
              </div>
              
          </div>
          </div>
          </FrontSide>
         
         <Background>
         <BackSide className=' w-72 h-120 p-0 m-0 rounded-md overflow-hidden shadow-md '>
             <Background className='w-72 h-120 p-0 m-0  ' img={image} >
                 <div className='flex flex-col align-center justify-between w-full h-full'> 
                 <div>
             <h1 className='text-2xl font-bold text-green-100 p-4 text-center mt-48 '>{movieName}</h1>
             </div>
             <div className='mb-12'>
             <Link to={`/m/${movieId}`} >
         <LoadMoreBtn text='Preview' />
             </Link>
             </div>
             </div>
             </Background>            
            
          </BackSide>
          </Background>
         </Flippy> :
<Flippy
    flipOnHover={true}
    flipOnClick={false}
    
    flipDirection="horizontal" 
    style={{  }} 
   >
        <FrontSide className='flex w-72 h-120 m-0  p-0 mb-8'>
<div className='bg-white flex flex-col h-120 rounded-md overflow-hidden shadow-md w-72 mb-12 '>

 <img className='w-72 h-84' src={image} alt='image' />
 <div className='pl-4 pt-4 pb-4 '>
     <div className='flex  items-center '>
     <h3 className='text-gray-500 font-semibold pl-2 pb-2 mt-1'>Rating: {ratings} </h3>
     <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="star w-5 h-5 ml-3 `"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
     </div>
     <div className='h-24'>
     <h1 className='text-xl font-bold pl-2 pb-4 pr-2'>{movieName}</h1>
     </div>
     <div className='bg-background p-2 rounded-full mr-4 ' >
     <h3 className='text-gray-800 font-semibold text-center '>Release Date- {date} </h3> 
     
     </div>
     
 </div>
 </div>
 </FrontSide>

<Background>
<BackSide className=' w-72 h-120 p-0 m-0 rounded-md overflow-hidden shadow-md '>
    <Background className='w-72 h-120 p-0 m-0  ' img={image} >
        <div className='flex flex-col align-center justify-between w-full h-full'> 
        <div>
    <h1 className='text-2xl font-bold text-green-100 p-4 text-center mt-48 '>{movieName}</h1>
    </div>
    <div className='mb-12'>
    <Link to={`/m/${movieId}`} >
<LoadMoreBtn text='Preview' />
    </Link>
    </div>
    </div>
    </Background>            
   
 </BackSide>
 </Background>
</Flippy>


)


}
export default MovieThumb;

