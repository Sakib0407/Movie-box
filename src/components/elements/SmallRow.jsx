import React from 'react';
import ReactDelayRender from 'react-delay-render';
import LoadMoreBtn from './LoadMoreBtn'
 
const SmallRow = () => (
  <div className="md:text-3xl font-bold font-gray-900 pt-6 pb-84
  text-lg text-center md:text-left">
   <h1 className='pb-24 pt-12'>Sorry!! No movies Found :( </h1>
    <LoadMoreBtn text="Go Back!" link='https://movie-boxv1.vercel.app/' />
  </div>
);
 
export default ReactDelayRender({ delay: 2000 })(SmallRow);