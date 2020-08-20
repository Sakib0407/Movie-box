import React from 'react';
import ReactDelayRender from 'react-delay-render';
 
const SmallRow = () => (
  <div className="md:text-3xl font-bold font-gray-900 pt-12
  text-lg text-center md:text-left">
   Sorry!! No movies Found :(
  </div>
);
 
export default ReactDelayRender({ delay: 2000 })(SmallRow);