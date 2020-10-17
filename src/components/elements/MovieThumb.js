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
                 <FrontSide className='flex w-72  m-0  p-0 mb-8'>
         <div className='bg-white flex flex-col  rounded-md overflow-hidden shadow-md w-72  '>
         
          <img className='w-72 h-84 object-cover' src={image} alt='image' />
        
          </div>
          </FrontSide>
         
         <Background>
         <BackSide className=' w-72  p-0 m-0 rounded-md overflow-hidden shadow-md '>
             <Background className='w-72  p-0 m-0  ' img={image} >
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
        <FrontSide className='flex  mb-8  p-0'>
<div className='bg-white flex flex-col rounded-md overflow-hidden shadow-md w-72  '>

 <img className='w-72 ' src={image} alt='image' />
 
     

 </div>
 </FrontSide>

<Background>
<BackSide className=' w-72  p-0 m-0 rounded-md overflow-hidden shadow-md '>
    <Background className='w-72 p-0 m-0  ' img={image} >
        <div className='flex flex-col align-center justify-between w-full h-full'> 
        <div>
    <h1 className='text-2xl font-bold text-green-100 p-4 text-center mt-32 '>{movieName}</h1>
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

