import React from 'react';

const MovieThumb = ({clickable, image , movieId, movieName , ratings, date }) => (

<>
<div className='bg-white rounded-md overflow-hidden shadow-md w-72 mb-12 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out '>
 <img className='w-72 h-84' src={image} alt='image' />
 <div className='pl-4 pt-4 pb-4 '>
     <div className='flex  items-center '>
     <h3 className='text-gray-500 font-semibold pl-2 pb-2 mt-1'>Rating: {ratings} </h3>
     <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="star w-5 h-5 ml-3 `"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
     </div>
     <h1 className='text-xl font-bold pl-2 pb-4 pr-2'>{movieName}</h1>
     <div className='bg-background p-2 rounded-full mr-4 ' >
     <h3 className='text-gray-800 font-semibold text-center '>Release Date- {date} </h3> 
     </div>
     
 </div>
</div>
</>
)
export default MovieThumb;

